const PAIRS = `jeg|eg|pronomen
ikke|ikkje|adverb
hva|kva|spørjeord
hvem|kven|spørjeord
hvor|kvar|spørjeord
hvordan|korleis|spørjeord
hvorfor|kvifor|spørjeord
noe|noko|pronomen
noen|nokon|pronomen
man|ein|pronomen
hun|ho|pronomen
de|dei|pronomen
dem|dei|pronomen
deres|dykkar|eigedomsord, når du vender deg til fleire
deres|deira|eigedomsord, når du omtalar andre
hver|kvar|determinativ
hverandre|kvarandre|pronomen
selv|sjølv|pronomen
mye|mykje|mengdeord
mer|meir|mengdeord
bare|berre|adverb
nå|no|adverb
også|òg|adverb
allerede|allereie|adverb
fremdeles|framleis|adverb
alltid|alltid|adverb
aldri|aldri|adverb
sammen|saman|adverb
likevel|likevel|adverb
derfor|derfor|adverb
heller|heller|adverb
hjem|heim|adverb
hjemme|heime|adverb
frem|fram|adverb
fra|frå|preposisjon
uten|utan|preposisjon
etter|etter|preposisjon
mens|medan|subjunksjon
hvis|dersom|subjunksjon
fordi|fordi|subjunksjon
enten|anten|konjunksjon
annet|anna|determinativ
annen|annan|determinativ
begge|begge|determinativ
begge|båe|determinativ
hvilken|kva for ein|spørjeuttrykk
være|vere|verb
gjøre|gjere|verb
si|seie|verb
gi|gi|verb
gi|gje|verb
komme|kome|verb
komme|komme|verb
se|sjå|verb
vite|vite|verb
spørre|spørje|verb
fortelle|fortelje|verb
velge|velje|verb
selge|selje|verb
telle|telje|verb
sette|setje|verb
legge|leggje|verb
ligge|liggje|verb
sitte|sitje|verb
synes|synast|verb
føle|kjenne|verb, om ei kjensle
mene|meine|verb
ønske|ønskje|verb
åpne|opne|verb
lukke|lukke|verb
begynne|byrje|verb
slutte|slutte|verb
jobbe|jobbe|verb
arbeide|arbeide|verb
bo|bu|verb
tro|tru|verb
spille|spele|verb
spise|ete|verb
spise|spise|verb
løpe|springe|verb
høre|høyre|verb
kjøre|køyre|verb
søke|søkje|verb
trenge|trenge|verb
bruke|bruke|verb
forstå|forstå|verb
huske|hugse|verb
forklare|forklare|verb
undersøke|undersøkje|verb
sammenligne|samanlikne|verb
påvirke|påverke|verb
beskrive|skildre|verb
begrunne|grunngi|verb
utvikle|utvikle|verb
forandre|endre|verb
oppdage|oppdage|verb
virke|verke|verb
tilhøre|høyre til|uttrykk
skole|skule|substantiv
skole|skole|substantiv
elev|elev|substantiv
lærer|lærar|substantiv
oppgave|oppgåve|substantiv
spørsmål|spørsmål|substantiv
svar|svar|substantiv
språk|språk|substantiv
ord|ord|substantiv
setning|setning|substantiv
fortelling|forteljing|substantiv
mening|meining|substantiv
forskjell|forskjell|substantiv
forskjell|skilnad|substantiv
likhet|likskap|substantiv
mulighet|moglegheit|substantiv
mulighet|høve|substantiv, avhengig av samanhengen
virkelighet|røyndom|substantiv
kjærlighet|kjærleik|substantiv
frihet|fridom|substantiv
trygghet|tryggleik|substantiv
nyhet|nyheit|substantiv
hemmelighet|løyndom|substantiv
følelse|kjensle|substantiv
venn|venn|substantiv
venn|ven|substantiv
venninne|veninne|substantiv
familie|familie|substantiv
barn|barn|substantiv
ungdom|ungdom|substantiv
menneske|menneske|substantiv
verden|verda|substantiv, bunden form
sted|stad|substantiv
vei|veg|substantiv
uke|veke|substantiv
måned|månad|substantiv
morgen|morgon|substantiv
kveld|kveld|substantiv
øyeblikk|augneblink|substantiv
hånd|hand|substantiv
øye|auge|substantiv
hode|hovud|substantiv
hjerte|hjarte|substantiv
vann|vatn|substantiv
høst|haust|substantiv
snø|snø|substantiv
sol|sol|substantiv
bilde|bilete|substantiv
bok|bok|substantiv
kilde|kjelde|substantiv
leser|lesar|substantiv
forfatter|forfattar|substantiv
virkemiddel|verkemiddel|substantiv
hovedperson|hovudperson|substantiv
hendelse|hending|substantiv
sammenheng|samanheng|substantiv
samfunn|samfunn|substantiv
bærekraft|berekraft|substantiv
utfordring|utfordring|substantiv
løsning|løysing|substantiv
årsak|årsak|substantiv
resultat|resultat|substantiv
regel|regel|substantiv
eksempel|døme|substantiv
eksempel|eksempel|substantiv
vanlig|vanleg|adjektiv
vanskelig|vanskeleg|adjektiv
mulig|mogleg|adjektiv
forskjellig|ulik|adjektiv
viktig|viktig|adjektiv
riktig|rett|adjektiv
virkelig|verkeleg|adjektiv
tydelig|tydeleg|adjektiv
særlig|særleg|adjektiv
naturlig|naturleg|adjektiv
personlig|personleg|adjektiv
skriftlig|skriftleg|adjektiv
muntlig|munnleg|adjektiv
faglig|fagleg|adjektiv
lykkelig|lykkeleg|adjektiv
hyggelig|hyggeleg|adjektiv
nysgjerrig|nysgjerrig|adjektiv
åpen|open|adjektiv
egen|eigen|adjektiv
liten|liten|adjektiv
stor|stor|adjektiv
gammel|gammal|adjektiv
ny|ny|adjektiv
bedre|betre|adjektiv/adverb
verst|verst|adjektiv/adverb
flere|fleire|mengdeord
færre|færre|mengdeord`.split('\n').map(x=>{const [bm,nn,note]=x.split('|');return {bm,nn,note}});
const GROUPS={'a-verb':'A-verba har -ar i presens og -a i preteritum og etter «har»: kastar – kasta – har kasta.','e-verb':'E-verba har ofte -er i presens og -te eller -de i preteritum: kjøper – kjøpte – har kjøpt. Nokre verb har fleire godkjende mønster.','sterke verb':'Sterke verb skiftar ofte vokal i preteritum og har vanlegvis ikkje -r i presens: skriv – skreiv – har skrive. Lær formene saman.','j-verb':'J-verba har ikkje -r i presens: velje – vel – valde – har valt. J-en i infinitiven kjem ikkje med i desse bøyingsformene.','kortverb':'Kortverb har éi staving i infinitiv og -dde i preteritum: bu – bur – budde – har budd/butt.'};
const QUIZZES=[
['substantiv','Fyll inn: ein gut – guten – fleire ___ – alle gutane.',['gutar'],'Mange hankjønnsord får -ar og -ane i fleirtal.'],
['substantiv','Fyll inn: ei jente – jenta – fleire ___ – alle jentene.',['jenter'],'Mange hokjønnsord får -er og -ene i fleirtal.'],
['substantiv','Fyll inn: eit hus – huset – fleire ___ – alle husa.',['hus'],'Mange inkjekjønnsord har inga ending i ubunden fleirtal.'],
['substantiv','Fyll inn: eit eple – eplet – fleire eple – alle ___.',['epla'],'Inkjekjønnsord får vanlegvis -a i bunden fleirtal.'],
['substantiv','Fyll inn: ei bok – boka – fleire ___ – alle bøkene.',['bøker'],'Bok skiftar vokal i fleirtal: bøker – bøkene.'],
['substantiv','Fyll inn: ein lærar – læraren – fleire ___ – alle lærarane.',['lærarar'],'Hankjønnsord på -ar får vanlegvis -arar i ubunden fleirtal.'],
['substantiv','Fyll inn: ein dag – dagen – fleire dagar – alle ___.',['dagane'],'Hankjønnsmønsteret er -ar og -ane.'],
['substantiv','Fyll inn: ei hand – handa – fleire ___ – alle hendene.',['hender'],'Hand er eit uregelrett hokjønnsord: hender – hendene.'],
['substantiv','Fyll inn: eit barn – barnet – fleire ___ – alle barna.',['barn','born'],'Både barn og born er godkjende fleirtalsformer.'],
['pronomen','Byt ut bokmålsordet: «Hun» les ei bok.',['ho'],'Ho er personleg pronomen i tredje person eintal.'],
['pronomen','Byt ut bokmålsordet: Eg snakka med «dem».',['dei'],'Dei blir brukt både som subjekt og objekt i tredje person fleirtal.'],
['pronomen','Fyll inn: Eg har ei bok. Dette er boka ___.',['mi'],'Eigedomsordet følgjer kjønnet til substantivet: boka mi.'],
['pronomen','Fyll inn: Eg har eit hus. Dette er huset ___.',['mitt'],'Hus er inkjekjønn, og eigedomsordet blir mitt.'],
['pronomen','Fyll inn: Dette er vennene mine. Eg er glad i ___.',['dei'],'Dei er objektforma når vi omtalar fleire andre.'],
['pronomen','Byt ut bokmålsordet: «Hvem» kjem i morgon?',['kven'],'Kven spør etter ein person. Kva spør etter ein ting eller eit innhald.'],
['pronomen','Byt ut bokmålsordet: «Hvordan» går det?',['korleis'],'Korleis er eit nynorsk spørjeord.'],
['pronomen','Fyll inn: Læraren kjem. ___ har ei bok med seg. (Kvinne)',['ho'],'Ho viser her tilbake til læraren.'],
['adjektiv','Fyll inn: ein fin dag – eit ___ hus.',['fint'],'Mange adjektiv får -t framfor inkjekjønnsord.'],
['adjektiv','Fyll inn: ein fin dag – fleire ___ dagar.',['fine'],'Adjektivet får vanlegvis -e i fleirtal.'],
['adjektiv','Fyll inn: ein god ven – eit ___ råd.',['godt'],'God får forma godt i inkjekjønn.'],
['adjektiv','Fyll inn: ein liten gut – ei ___ jente.',['lita'],'Liten har eigne former: liten – lita – lite – små.'],
['adjektiv','Fyll inn: ein liten gut – eit ___ barn.',['lite'],'Lite er inkjekjønnsforma av liten.'],
['adjektiv','Fyll inn: ein liten gut – fleire ___ barn.',['små'],'Fleirtalsforma av liten er små.'],
['adjektiv','Fyll inn: gammal – ___ – eldst.',['eldre'],'Gradbøyinga er uregelrett: gammal – eldre – eldst.'],
['adjektiv','Fyll inn: god – ___ – best.',['betre'],'Betre er komparativ av god.'],
['tekstbinding','Fyll inn årsaksordet: Eg tek på jakke ___ det er kaldt.',['fordi','sidan','ettersom'],'Fordi, sidan og ettersom kan innleie ei leddsetning som forklarer årsaka.'],
['tekstbinding','Fyll inn motsetningsordet: Eg er trøytt, ___ eg vil lese ferdig.',['men'],'Men bind saman to ledd som står i motsetning til kvarandre.'],
['tekstbinding','Skriv heile setninga med komma: Når timen er slutt går vi heim.',['Når timen er slutt, går vi heim.'],'Det skal vere komma etter ei leddsetning som står først i heilsetninga.'],
['tekstbinding','Fyll inn: Eg likar ___ lese. (og/å)',['å'],'Å er infinitivsmerket framfor lese.'],
['tekstbinding','Fyll inn: Vi les ___ skriv. (og/å)',['og'],'Og bind saman to verb i presens.'],
['tekstbinding','Fyll inn: Ho fortel at ho ___ kan kome. (ikkje)',['ikkje'],'I leddsetninga står ikkje føre det finitte verbet: at ho ikkje kan kome.']
].map((x,i)=>({id:'g'+i,topic:x[0],prompt:x[1],answers:x[2],explain:x[3]}));
const TOPICS=[['verb','Verb','Bli trygg på notid, fortid og perfektum.','å → har'],['substantiv','Substantiv','Ein, ei eller eit? Få tak på mønstera.','ein / ei'],['pronomen','Pronomen','Eg, ho, dei – og orda som viser tilbake.','eg · dei'],['adjektiv','Adjektiv','La skildringane passe til substantiva.','fin → fint'],['tekstbinding','Setningar & samanheng','Bind saman tankar og set komma rett.','og, men'],['blanda','Blanda økt','Test litt av kvart, og finn ditt neste steg.','✳']];
const RULES=[
['Verb: fire former du treng','Infinitiv er grunnforma med å. Presens fortel ofte om no, preteritum om fortida. Presens perfektum er har + perfektum partisipp.','å skrive → skriv → skreiv → har skrive','Du kan velje e-infinitiv (å skrive, å kaste) eller a-infinitiv (å skriva, å kasta). Kløyvd infinitiv er òg tillate, men følgjer eit eige system. Her bruker forklaringane e-infinitiv. Øvingane godtek dei alternative formene som ligg i verbgrunnlaget frå ordboka.'],
['A-verb og e-verb','A-verba har -ar i presens og -a i fortid. E-verba har ofte -er i presens og -te eller -de i fortid.','kaste – kastar – kasta – har kasta<br>kjøpe – kjøper – kjøpte – har kjøpt<br>leve – lever – levde – har levd/levt','Ikkje avgjer verbgruppa berre ut frå infinitiven. Slå opp verbet og sjå heile bøyinga. Nokre verb har fleire godkjende bøyingsmønster.'],
['Sterke verb, j-verb og kortverb','Sterke verb skiftar ofte vokal i fortid. J-verb manglar -r i presens. Kortverb får -dde i preteritum.','finne – finn – fann – har funne<br>velje – vel – valde – har valt<br>bu – bur – budde – har budd/butt','Lag di eiga setning med kvar av formene. Det gjer mønsteret lettare å hugse.'],
['Substantiv: kjønn og tal','Substantiv har tre kjønn i nynorsk. Lær artikkelen saman med ordet.','ein gut – guten – gutar – gutane<br>ei jente – jenta – jenter – jentene<br>eit hus – huset – hus – husa','Dette er vanlege mønster, ikkje reglar utan unntak. Til dømes: ei bok – boka – bøker – bøkene. Bruk ordboka når du er i tvil.'],
['Pronomen og eigedomsord','Dei blir brukt både som subjekt og objekt. Eigedomsordet blir bøygd etter det som er eigd.','Dei kjem. Eg ser dei.<br>bilen min – boka mi – huset mitt – bøkene mine','I andre person fleirtal kan du bruke de som subjekt og dykk som objekt, eller dokker i begge posisjonar. Eigedomsorda er dykkar eller dokkar. Deira viser til noko som tilhøyrer dei.'],
['Adjektiv: samsvar og grad','Adjektiv skildrar substantiv og får ofte ulike former etter kjønn og tal.','ein fin dag – ei fin bok – eit fint hus – fine dagar<br>god – betre – best','Det finst unntak. Liten blir liten – lita – lite – små. Slå opp ord du ikkje kjenner, i staden for å leggje til -t automatisk.'],
['Tekstbinding og ordstilling','Vis lesaren korleis tankane heng saman. Vel bindeord som uttrykkjer akkurat den samanhengen du meiner.','Årsak: fordi, sidan · Motsetning: men, likevel<br>Tillegg: dessutan, òg · Følgje: derfor, dermed','I ei vanleg forteljande heilsetning står det finitte verbet på andre setningsleddplass: I dag skriv eg. I ei leddsetning står ikkje vanlegvis før det finitte verbet: fordi eg ikkje skriv.'],
['Komma, og og å','Set komma mellom sidestilte heilsetningar med kvart sitt subjekt. Set òg komma etter ei leddsetning som står først.','Eg les, og ho skriv.<br>Når eg er ferdig, går eg ut.<br>Eg likar å lese og skrive.','Å står framfor infinitiv. Og bind saman ord eller ledd. Det er ikkje komma mellom to verb med same subjekt: Eg les og skriv.'],
['Nynorsk er meir enn ordbyte','Bruk ord og setningar som formidlar det du vil seie. Omsetjing ord for ord kan gjere språket stivt.','«Eg føretok ei undersøking av saka.» → «Eg undersøkte saka.»','Forslaget er eit stilval, ikkje ei rettskrivingsregel. Også formelle uttrykk kan passe i rett sjanger. Ord med an-, be-, -heit eller -ing er ikkje automatisk feil; sjekk ordboka.']
];
const REWRITES=[
['La verbet gjere jobben','Vi gjorde ei vurdering av forslaget.','Vi vurderte forslaget.','Eit presist verb kan gjere setninga kortare og meir direkte. Begge formuleringane kan vere rette.'],
['Gjer aktøren synleg','Det vart bestemt at friminuttet skulle bli lengre.','Elevrådet bestemte at friminuttet skulle bli lengre.','Når du veit kven som handlar, kan aktiv form gjere teksten tydelegare. Ikkje legg til ein aktør du ikkje har dekning for.'],
['Vel ei tydeleg årsak','Det var mykje regn. Kampen vart avlyst.','Kampen vart avlyst fordi det regna mykje.','Bindeord viser samanheng. Bruk berre fordi dersom regnet faktisk var årsaka.'],
['Gjer skildringa konkret','Ho var veldig nervøs.','Ho fikla med glidelåsen og såg ned i golvet.','I ei forteljing kan handling og sansedetaljar vise ei kjensle. I ein fagtekst kan den direkte formuleringa passe betre.'],
['Varier starten','Eg kom heim. Eg åt middag. Eg gjorde leksene.','Då eg kom heim, åt eg middag. Etterpå gjorde eg leksene.','Tidsuttrykk skaper flyt. Legg merke til komma etter leddsetninga og plasseringa av verbet etter Etterpå.'],
['Bygg eit argument','Vi bør ha lengre friminutt. Det er bra.','Vi bør ha lengre friminutt, fordi vi då får betre tid til å røre oss.','Ei grunngiving gjer meininga lettare å vurdere. Støtt faktapåstandar med kjelder når det trengst.']
];
const TEXTS=[{title:'Den tomme plassen',genre:'Kortforteljing',time:'3 min lesing',text:['Det var berre éin ledig plass att i klasserommet. Stolen ved sida av Amina. Ho flytta sekken sakte ned på golvet, sjølv om ingen hadde bede henne om det.','Den nye eleven stod i døra med jakka på. Læraren sa eit namn som forsvann i lyden av ein stol som skrapa. Amina såg på dei våte skoa hans. Han hadde gått gjennom regnet.','«Her», sa ho og drog stolen litt ut. Det var ikkje eit stort ord. Berre tre bokstavar. Likevel såg det ut som om skuldrene hans sokk nokre centimeter.','Då det ringde ut, vart sekken hennar liggjande på golvet.'],questions:['Kva kan den tomme plassen symbolisere? Grunngi med noko frå teksten.','Finn to sterke verb i preteritum. Kva heiter dei i infinitiv?','Kvifor trur du forfattaren avsluttar med sekken? Prøv ei anna avslutning.'],hint:'Til dømes stod → stå og såg → sjå. Plassen og sekken kan tolkast som teikn på å sleppe nokon inn. Andre tolkingar kan òg fungere når du grunngir dei med teksten.'},
{title:'Eit friminutt for alle',genre:'Argumenterande tekst',time:'2 min lesing',text:['Skulegarden bør ha ein roleg stad der ein kan vere utan å spele ball. Det treng ikkje vere stort: nokre benkar, eit bord og litt ly for regnet kan vere ein start.','Ballspel er fint for mange, men ikkje for alle. Nokre ønskjer å snakke saman, lese eller berre puste ut mellom timane. Ein skulegard med fleire typar møteplassar gir fleire elevar noko å velje mellom.','Nokre vil kanskje seie at det kostar for mykje. Derfor bør elevrådet først undersøkje kva vi allereie har, og spørje elevane kva dei treng. Kanskje kan ei lita endring gjere ein stor forskjell.'],questions:['Kva er påstanden, og kva grunngivingar blir brukte?','Finn eit motargument. Korleis svarar teksten på det?','Kva bør skulen undersøkje før han bestemmer seg? Skriv ditt eige svar med fordi og likevel.'],hint:'Påstanden kjem i første setning. Kostnad er eit motargument. Teksten føreslår å kartleggje ressursar og behov. Dette er ein modelltekst, ikkje dokumentasjon på effekten av eit bestemt tiltak.'},
{title:'Eitt språklandskap, mange stemmer',genre:'Språk og identitet',time:'3 min lesing',text:['Nynorsk og bokmål er to norske skriftspråk. Vi møter begge i bøker, aviser og skulearbeid. Måten vi snakkar på, kan likevel vere ganske ulik måten vi skriv på.','På 1800-talet samla Ivar Aasen inn kunnskap om norske dialektar. Dette arbeidet vart eit grunnlag for landsmålet, som seinare fekk namnet nynorsk. Bokmålet voks fram gjennom endringar i det danske skriftspråket som hadde vore brukt i Noreg.','Ingen treng å leggje bort dialekten sin for å skrive nynorsk. Når du samanliknar ord du seier, med ord du skriv, kan du oppdage både likskapar og skilnader. Kanskje seier du eg, ikkje eller heim allereie?'],questions:['Kva er forskjellen på talespråk og skriftspråk?','Skriv tre ord på dialekten din. Samanlikn med nynorsk og bokmål i ordboka.','Kva haldningar til nynorsk har du møtt? Korleis kan slike haldningar påverke lysta til å skrive?'],hint:'Eit talespråk blir brukt når vi snakkar; eit skriftspråk har normer for skrift. Dialekt og målform er derfor ikkje det same. Samtalen om haldningar har ikkje eitt fasitsvar.'}
];
