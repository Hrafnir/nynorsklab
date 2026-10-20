# Kjelder, rettar og takk

## Apertium: ordparlista

Copyright © 2009–2024 Apertium contributors, slik det står i den originale ordbokfila.

- Prosjekt: [apertium/apertium-nno-nob](https://github.com/apertium/apertium-nno-nob).
- Fil: `apertium-nno-nob.nno-nob.dix`.
- Versjon: [af921d87acad00f45e79a5b7f17d71068adb5ec8](https://github.com/apertium/apertium-nno-nob/tree/af921d87acad00f45e79a5b7f17d71068adb5ec8).
- Lisens: **GPL-2.0-or-later**; [uendra lisenstekst](dist/lexicon/COPYING.txt).
- Henta og konvertert 20. oktober 2026.

Den medfølgjande [AUTHORS-fila](dist/lexicon/AUTHORS.txt) krediterer:

- Kevin Brubeck Unhammer
- Trond Trosterud
- Anja Zawadzka Persvold
- Hallvard Østrem
- Victoria Troland
- Jo Christian Oterhals
- Francis M. Tyers
- Sjur Nørstebø Moshagen
- Jim O’Regan
- Jacob Nordfalk
- Frode Håvik Korneliussen

Dette er namna i AUTHORS ved den valde versjonen, ikkje ein påstand om at alle historiske bidrag er oppførte der. Sjå òg [prosjekthistorikken](https://github.com/apertium/apertium-nno-nob/commits/) og upstream sine [takkseiingar](dist/lexicon/ACKNOWLEDGEMENTS.txt). Sistnemnde omtalar Norsk Ordbank, Oslo–Bergen-taggaren og støtte frå Google Summer of Code for språkpakken. Nynorsklab nyttar den tospråklege ordbokfila, ikkje heile analyse- og omsetjingssystemet.

### Kva Nynorsklab har endra

Nynorsklab har utvida eksplisitte paradigme, konvertert ordpar til JSON, slått saman duplikat innan same ordklasse, bevart retning, skilt ut eigennamn, fjerna interne homografnummer og utelate regulære uttrykk og enkelte tekniske oppføringar. Dette er våre omformingar; eventuelle feil i konverteringa er ikkje Apertiums ansvar. Den originale XML-fila er uendra i [kjeldearkivet](dist/lexicon/source.zip), saman med konverteringsskriptet og upstream-merknadene. [Metadata](dist/lexicon/meta.json) dokumenterer teljingar og avgrensingar.

### Fagleg referanse

Kevin Brubeck Unhammer og Trond Trosterud (2009): *Reuse of Free Resources in Machine Translation between Nynorsk and Bokmål*. Proceedings of the First International Workshop on Free/Open-Source Rule-Based Machine Translation, s. 35–42. [Artikkel](https://hdl.handle.net/10045/12025).

For Apertium-plattforma: Forcada mfl. (2011), *Apertium: a free/open-source platform for rule-based machine translation*. Machine Translation 25, 127–144. [DOI](https://doi.org/10.1007/s10590-011-9090-0).

## Bokmålsordboka og Nynorskordboka

**Universitetet i Bergen og Språkrådet**, [ordbøkene.no](https://ordbokene.no/), [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/).

`dist/verbs.json` inneheld eit utval på 34 verb, henta 20. oktober 2026 med `fetch-verbs.py`. Bøyingsdata er valde ut og viste i eit forenkla oppsett. Direkte oppslag hentar artiklar frå `ord.uib.no`; definisjonar og bøyingsformer blir viste forenkla, med lenkje til originalartikkelen. Desse dataa beheld CC BY 4.0, også når resten av programmet blir distribuert under GPL.

## Pedagogisk grunnlag

Utdanningsdirektoratet si læreplan i norsk, NOR01-08, og Språkrådet sine nynorskressursar har vore brukte som faglege referansar. Oppgåver, forklaringar og skriveguide er utforma for Nynorsklab og må ikkje oppfattast som offisielt godkjende undervisningsressursar. Kjelder er òg lenkja frå lærarsida og skriveguiden.

## Nynorsklab

App, visuell utforming, undervisningsinnhald og datakonvertering er utarbeidde for Eirik Gaarde med hjelp frå OpenAI Codex, 2026. Eigen kode og eige innhald: GPL-2.0-or-later. Ingen garanti. Eksisterande tredjepartsrettar og lisensar blir ikkje endra.
