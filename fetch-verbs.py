import json,urllib.request,urllib.parse
from pathlib import Path
words={'a-verb':['kaste','hoppe','snakke','danse','vente','spele','opne','sykle'],'e-verb':['kjøpe','lære','leve','prøve','høyre','reise'],'sterke verb':['skrive','lese','finne','drikke','springe','kome','ta','sjå','gå','ete','sove','vere'],'j-verb':['telje','velje','selje','spørje','setje'],'kortverb':['bu','tru','nå']}
def get(url):
 with urllib.request.urlopen(url,timeout=20) as r:return json.load(r)
verbs=[]
for group,ws in words.items():
 for w in ws:
  ids=get('https://ord.uib.no/api/articles?dict=nn&scope=e&w='+urllib.parse.quote(w))['articles'].get('nn',[])
  found=None
  for id in ids:
   a=get(f'https://ord.uib.no/nn/article/{id}.json')
   if any('VERB' in p.get('tags',[]) for l in a['lemmas'] for p in l.get('paradigm_info',[])):found=a;break
  if not found:raise Exception(w)
  forms=[[],[],[],[]]
  for l in found['lemmas']:
   for p in l.get('paradigm_info',[]):
    if p.get('to'):continue
    for f in p.get('inflection',[]):
     for i,t in enumerate(['Inf','Pres','Past','<PerfPart>']):
      if f['tags']==[t] and f['word_form'] and f['word_form'] not in forms[i]:forms[i].append(f['word_form'])
  if not all(forms):raise Exception((w,forms))
  verbs.append({'word':w,'group':group,'forms':forms,'id':found['article_id']})
Path('dist/verbs.json').write_text(json.dumps(verbs,ensure_ascii=False))
print('Verified',len(verbs),'verbs with official current inflections')
