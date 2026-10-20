#!/usr/bin/env python3
"""Nynorsklab converter, 2026-10-20. GPL-2.0-or-later.
Expands explicit bilingual entries, preserving direction restrictions.
No morphology or lexical-selection engine is run. Regex and technical symbols
are excluded. See generated metadata for coverage and exclusions.
Usage: python3 scripts/build-lexicon.py SOURCE_DIRECTORY
"""
import sys,json,re,collections,functools,xml.etree.ElementTree as ET,zipfile
from pathlib import Path
src=Path(sys.argv[1]);out=Path('dist/lexicon');out.mkdir(parents=True,exist_ok=True)
root=ET.parse(src/'apertium-nno-nob.nno-nob.dix').getroot()
paradigms={p.attrib['n']:p for p in root.findall('pardefs/pardef')}
CLASSES={'n','np','prn','det','vblex','adj','adv','pr','ij','cnjsub','cnjcoo','cnjadv','part'}
skipped=collections.Counter()
def side(node):
    text=node.text or '';tags=[]
    for x in node:
        if x.tag=='s':tags.append(x.attrib['n'])
        elif x.tag=='b':text+=' '
        elif x.tag=='g':
            a,b=side(x);text+=a;tags+=b
        else:raise ValueError('Unsupported side element '+x.tag)
        text+=x.tail or ''
    return text,tuple(tags)
def combine(a,b):
    return a[0]+b[0],a[1]+b[1],a[2]+b[2],a[3]+b[3],a[4]&b[4]
@functools.lru_cache(None)
def expand_par(name):
    return tuple(y for e in paradigms[name].findall('e') for y in expand(e))
def expand(e):
    if e.find('re') is not None:return []
    current=[('',(),'',(),{'LR':1,'RL':2}.get(e.get('r'),3))]
    for x in e:
        if x.tag=='p':
            l,lt=side(x.find('l'));r,rt=side(x.find('r'));parts=[(l,lt,r,rt,3)]
        elif x.tag=='i':
            l,lt=side(x);parts=[(l,lt,l,lt,3)]
        elif x.tag=='par':parts=expand_par(x.get('n'))
        else:raise ValueError('Unsupported entry '+x.tag)
        current=[c for a in current for b in parts if (c:=combine(a,b))[4]]
    return current
rows={};names={}
for section in root.findall('section'):
 for e in section.findall('e'):
    if e.find('re') is not None:skipped['regex_entries']+=1;continue
    for nn,nt,bm,bt,d in expand(e):
        nn=' '.join(nn.split());bm=' '.join(bm.split())
        # Superscripts distinguish internal homographs; the source surface is a lemma.
        nn=re.sub('[¹²³⁴⁵⁶⁷⁸⁹⁰]','',nn);bm=re.sub('[¹²³⁴⁵⁶⁷⁸⁹⁰]','',bm)
        if not nn or not bm or re.search(r'[_^~@<>*+\\/{}\[\]|]',nn+bm) or not any(x.isalpha() for x in nn+bm):skipped['technical_or_empty_expansions']+=1;continue
        pos=next((t for t in nt if t in CLASSES),next((t for t in bt if t in CLASSES),'other'))
        # Apertium uses the verb lemma for its adjectival participle analysis too.
        if any(p.get('n') in ('vblex_adj','vblex_noadj') for p in e.findall('par')):pos='vblex'
        # Keep lexical classes distinct, merge gender/inflection tags into one lemma pair.
        key=(bm,nn,pos);target=names if pos=='np' else rows
        target[key]=target.get(key,0)|d
for name,data in [('words',rows),('names',names)]:
    result=[[*k,v] for k,v in sorted(data.items(),key=lambda kv:(kv[0][0].casefold(),kv[0][1].casefold(),kv[0][2]))]
    (out/(name+'.json')).write_text(json.dumps(result,ensure_ascii=False,separators=(',',':')))
sha=json.loads((src/'commit.json').read_text())['sha']
meta={'source':'Apertium apertium-nno-nob','sourceURL':'https://github.com/apertium/apertium-nno-nob','commit':sha,'date':'2026-10-20','license':'GPL-2.0-or-later','words':len(rows),'names':len(names),'total':len(rows)+len(names),'sourceEntries':len(root.findall('section/e')),'uniqueBokmal':len({k[0] for k in rows}),'uniqueNynorsk':len({k[1] for k in rows}),'different':sum(k[0]!=k[1] for k in rows),'skipped':dict(skipped),'columns':['bokmal','nynorsk','wordClass','direction'],'direction':{'1':'nynorsk to bokmal only','2':'bokmal to nynorsk only','3':'both'},'limitations':'Lemma pairs, not a complete translation engine. No morphological generation or contextual lexical selection. Source spelling and variants preserved; consult Ordbøkene for current norms. Regex rules and internal markers excluded.'}
(out/'meta.json').write_text(json.dumps(meta,ensure_ascii=False,indent=2))
(out/'COPYING.txt').write_bytes((src/'COPYING').read_bytes())
(out/'AUTHORS.txt').write_bytes((src/'AUTHORS').read_bytes())
with zipfile.ZipFile(out/'source.zip','w',zipfile.ZIP_DEFLATED) as z:
 for f in ['apertium-nno-nob.nno-nob.dix','COPYING','AUTHORS','README','ACKNOWLEDGEMENTS']:
    z.write(src/f,f)
 z.write(Path(__file__),'scripts/build-lexicon.py')
 z.write(out/'meta.json','meta.json')
 z.write(src/'commit.json','commit.json')
 z.writestr('CHANGES.txt','Nynorsklab, 20 October 2026: expanded paradigms, converted explicit lemma mappings to JSON, merged duplicate class/pair mappings and direction bits, separated proper names, excluded regex and technical entries, removed superscript homograph indices. Original XML preserved without changes. Converted data and converter: GPL-2.0-or-later. No warranty. See COPYING and AUTHORS.\nRebuild: extract source files to a folder, provide commit.json with the SHA from meta.json, then run python3 scripts/build-lexicon.py that-folder from the project root.\n')
print(json.dumps(meta,ensure_ascii=False,indent=2))
