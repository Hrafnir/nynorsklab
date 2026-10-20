# Nynorsklab

Eit undervisningsverktøy for nynorsk på ungdomstrinnet: grammatikkøvingar, ordpar, direkte ordbokoppslag og ein regelbasert skriveverkstad.

## Takk til Apertium

Den store ordparlista er **ikkje laga frå grunnen av av Nynorsklab**. Ho er avleidd frå den tospråklege ordboka i [Apertium apertium-nno-nob](https://github.com/apertium/apertium-nno-nob), laga av Apertium-bidragsytarane. Nynorsklab har konvertert og presentert dataa for undervisning. Sjå [CREDITS.md](CREDITS.md) for namn, presis kjelde, endringar og andre kjelder.

- 196 116 oppføringar for ord og uttrykk; 217 520 oppføringar for eigennamn.
- Ei oppføring er eit ordpar med ordklasse, ikkje nødvendigvis eit unikt ord.
- Retningsavgrensingar er bevarte. Nokre oppføringar kan berre søkjast i éi retning.
- Lista er ikkje ei komplett normativ ordbok eller ein full omsetjar. Ordval må vurderast i kontekst; sjekk gjeldande norm i [Ordbøkene](https://ordbokene.no/).

Nynorsklab er eit sjølvstendig prosjekt. Apertium, Universitetet i Bergen og Språkrådet har ikkje godkjent eller kvalitetssikra appen.

## Køyr lokalt

Ingen pakkar eller byggjesteg er nødvendige. Med Python 3 installert:

```sh
python3 -m http.server 8765 --directory dist
```

Opne http://localhost:8765. Ordparlista og skriveguiden blir behandla i nettlesaren. Direkte ordbokoppslag treng nett og bruker ord.uib.no. Kladd, framgang og lagra ord blir lagra lokalt i nettlesaren, ikkje i dette repositoryet. Skriveguiden er regelbasert og sender ikkje teksten til ei KI-teneste.

## Testar

Med Node.js 18 eller nyare:

```sh
node --test tests/*.test.cjs
```

## Bygg ordparlista på nytt

[dist/lexicon/source.zip](dist/lexicon/source.zip) inneheld den uendra originale XML-fila, upstream-lisens, AUTHORS, ACKNOWLEDGEMENTS, README, commit.json og konverteringsskriptet.

Frå prosjektrota, med Python 3.9 eller nyare:

```sh
python3 -m zipfile -e dist/lexicon/source.zip /tmp/nynorsklab-source
python3 scripts/build-lexicon.py /tmp/nynorsklab-source
```

Dette regenererer JSON-data og kjeldearkivet. `dist/lexicon-meta.js` speglar `dist/lexicon/meta.json`; ved endring i datagrunnlaget må denne fila oppdaterast òg. Den noverande versjonen er festa til commit `af921d87acad00f45e79a5b7f17d71068adb5ec8` i upstream-prosjektet.

## Publisering

`dist/` kan leggjast på ein vanleg statisk nettstad. Denne GitHub-versjonen inneheld ikkje private Sites-innstillingar, nøklar eller elevtekstar. GitHub-repositoryet publiserer kjeldekoden; GitHub Pages er ikkje automatisk aktivert.

## Lisens

Nynorsklabs eigen programkode, konverteringsskript og undervisningsinnhald blir delte under **GNU GPL versjon 2 eller seinare**. Sjå [LICENSE](LICENSE). Apertium-data og avleidde JSON-filer har same lisens, med opphavlege rettshavarar og merknader bevarte. Ingen garanti.

Ordbokdata frå Universitetet i Bergen og Språkrådet, mellom anna `dist/verbs.json` og data henta ved direkte oppslag, har separat **CC BY 4.0**-lisens. Dei blir ikkje omlisensierte. Sjå [CREDITS.md](CREDITS.md).
