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
// IDs are permanent: saved practice history refers to them. Never renumber.
const QUIZZES=[
  {
    "id": "g0",
    "topic": "substantiv",
    "prompt": "Fyll inn: ein gut – guten – fleire ___ – alle gutane.",
    "answers": [
      "gutar"
    ],
    "explain": "Mange hankjønnsord får -ar og -ane i fleirtal.",
    "kind": "form"
  },
  {
    "id": "g1",
    "topic": "substantiv",
    "prompt": "Fyll inn: ei jente – jenta – fleire ___ – alle jentene.",
    "answers": [
      "jenter"
    ],
    "explain": "Mange hokjønnsord får -er og -ene i fleirtal.",
    "kind": "form"
  },
  {
    "id": "g2",
    "topic": "substantiv",
    "prompt": "Fyll inn: eit hus – huset – fleire ___ – alle husa.",
    "answers": [
      "hus"
    ],
    "explain": "Mange inkjekjønnsord har inga ending i ubunden fleirtal.",
    "kind": "form"
  },
  {
    "id": "g3",
    "topic": "substantiv",
    "prompt": "Fyll inn: eit eple – eplet – fleire eple – alle ___.",
    "answers": [
      "epla"
    ],
    "explain": "Inkjekjønnsord får vanlegvis -a i bunden fleirtal.",
    "kind": "form"
  },
  {
    "id": "g4",
    "topic": "substantiv",
    "prompt": "Fyll inn: ei bok – boka – fleire ___ – alle bøkene.",
    "answers": [
      "bøker"
    ],
    "explain": "Bok skiftar vokal i fleirtal: bøker – bøkene.",
    "kind": "form"
  },
  {
    "id": "g5",
    "topic": "substantiv",
    "prompt": "Fyll inn: ein lærar – læraren – fleire ___ – alle lærarane.",
    "answers": [
      "lærarar"
    ],
    "explain": "Hankjønnsord på -ar får vanlegvis -arar i ubunden fleirtal.",
    "kind": "form"
  },
  {
    "id": "g6",
    "topic": "substantiv",
    "prompt": "Fyll inn: ein dag – dagen – fleire dagar – alle ___.",
    "answers": [
      "dagane"
    ],
    "explain": "Hankjønnsmønsteret er -ar og -ane.",
    "kind": "form"
  },
  {
    "id": "g7",
    "topic": "substantiv",
    "prompt": "Fyll inn: ei hand – handa – fleire ___ – alle hendene.",
    "answers": [
      "hender"
    ],
    "explain": "Hand er eit uregelrett hokjønnsord: hender – hendene.",
    "kind": "form"
  },
  {
    "id": "g8",
    "topic": "substantiv",
    "prompt": "Fyll inn rekkja med barn–barna: eit barn – barnet – fleire ___ – alle barna.",
    "answers": [
      "barn"
    ],
    "explain": "To godkjende rekkjer er barn–barna og born–borna. Her øver vi på barn–barna.",
    "kind": "form"
  },
  {
    "id": "g9",
    "topic": "pronomen",
    "prompt": "Byt ut bokmålsordet: «Hun» les ei bok.",
    "answers": [
      "ho"
    ],
    "explain": "Ho er personleg pronomen i tredje person eintal.",
    "kind": "form"
  },
  {
    "id": "g10",
    "topic": "pronomen",
    "prompt": "Byt ut bokmålsordet: Eg snakka med «dem».",
    "answers": [
      "dei"
    ],
    "explain": "Dei blir brukt både som subjekt og objekt i tredje person fleirtal.",
    "kind": "form"
  },
  {
    "id": "g11",
    "topic": "pronomen",
    "prompt": "Fyll inn: Eg har ei bok. Dette er boka ___.",
    "answers": [
      "mi"
    ],
    "explain": "Eigedomsordet følgjer kjønnet til substantivet: boka mi.",
    "kind": "form"
  },
  {
    "id": "g12",
    "topic": "pronomen",
    "prompt": "Fyll inn: Eg har eit hus. Dette er huset ___.",
    "answers": [
      "mitt"
    ],
    "explain": "Hus er inkjekjønn, og eigedomsordet blir mitt.",
    "kind": "form"
  },
  {
    "id": "g13",
    "topic": "pronomen",
    "prompt": "Fyll inn: Dette er vennene mine. Eg er glad i ___.",
    "answers": [
      "dei"
    ],
    "explain": "Dei er objektforma når vi omtalar fleire andre.",
    "kind": "form"
  },
  {
    "id": "g14",
    "topic": "pronomen",
    "prompt": "Byt ut bokmålsordet: «Hvem» kjem i morgon?",
    "answers": [
      "kven"
    ],
    "explain": "Kven spør etter ein person. Kva spør etter ein ting eller eit innhald.",
    "kind": "form"
  },
  {
    "id": "g15",
    "topic": "pronomen",
    "prompt": "Byt ut bokmålsordet: «Hvordan» går det?",
    "answers": [
      "korleis"
    ],
    "explain": "Korleis er eit spørjeadverb, ikkje eit pronomen. Det spør etter måten noko skjer på.",
    "kind": "form"
  },
  {
    "id": "g16",
    "topic": "pronomen",
    "prompt": "Fyll inn: Læraren kjem. ___ har ei bok med seg. (Kvinne)",
    "answers": [
      "ho"
    ],
    "explain": "Ho viser her tilbake til læraren.",
    "kind": "form"
  },
  {
    "id": "g17",
    "topic": "adjektiv",
    "prompt": "Fyll inn: ein fin dag – eit ___ hus.",
    "answers": [
      "fint"
    ],
    "explain": "Mange adjektiv får -t framfor inkjekjønnsord.",
    "kind": "form"
  },
  {
    "id": "g18",
    "topic": "adjektiv",
    "prompt": "Fyll inn: ein fin dag – fleire ___ dagar.",
    "answers": [
      "fine"
    ],
    "explain": "Adjektivet får vanlegvis -e i fleirtal.",
    "kind": "form"
  },
  {
    "id": "g19",
    "topic": "adjektiv",
    "prompt": "Fyll inn: ein god ven – eit ___ råd.",
    "answers": [
      "godt"
    ],
    "explain": "God får forma godt i inkjekjønn.",
    "kind": "form"
  },
  {
    "id": "g20",
    "topic": "adjektiv",
    "prompt": "Fyll inn: ein liten gut – ei ___ jente.",
    "answers": [
      "lita"
    ],
    "explain": "Liten har eigne former: liten – lita – lite – små.",
    "kind": "form"
  },
  {
    "id": "g21",
    "topic": "adjektiv",
    "prompt": "Fyll inn: ein liten gut – eit ___ barn.",
    "answers": [
      "lite"
    ],
    "explain": "Lite er inkjekjønnsforma av liten.",
    "kind": "form"
  },
  {
    "id": "g22",
    "topic": "adjektiv",
    "prompt": "Fyll inn: ein liten gut – fleire ___ barn.",
    "answers": [
      "små"
    ],
    "explain": "Fleirtalsforma av liten er små.",
    "kind": "form"
  },
  {
    "id": "g23",
    "topic": "adjektiv",
    "prompt": "Fyll inn: gammal – ___ – eldst.",
    "answers": [
      "eldre"
    ],
    "explain": "Gradbøyinga er uregelrett: gammal – eldre – eldst.",
    "kind": "form"
  },
  {
    "id": "g24",
    "topic": "adjektiv",
    "prompt": "Fyll inn: god – ___ – best.",
    "answers": [
      "betre"
    ],
    "explain": "Betre er komparativ av god.",
    "kind": "form"
  },
  {
    "id": "g25",
    "topic": "tekstbinding",
    "prompt": "Fyll inn årsaksordet: Eg tek på jakke ___ det er kaldt.",
    "answers": [
      "fordi",
      "sidan",
      "ettersom"
    ],
    "explain": "Fordi, sidan og ettersom kan innleie ei leddsetning som forklarer årsaka.",
    "kind": "form"
  },
  {
    "id": "g26",
    "topic": "tekstbinding",
    "prompt": "Fyll inn motsetningsordet: Eg er trøytt, ___ eg vil lese ferdig.",
    "answers": [
      "men"
    ],
    "explain": "Men bind saman to ledd som står i motsetning til kvarandre.",
    "kind": "form"
  },
  {
    "id": "g27",
    "topic": "tekstbinding",
    "prompt": "Skriv heile setninga med komma: Når timen er slutt går vi heim.",
    "answers": [
      "Når timen er slutt, går vi heim."
    ],
    "explain": "Det skal vere komma etter ei leddsetning som står først i heilsetninga.",
    "kind": "form",
    "answerMode": "sentence"
  },
  {
    "id": "g28",
    "topic": "tekstbinding",
    "prompt": "Fyll inn: Eg likar ___ lese. (og/å)",
    "answers": [
      "å"
    ],
    "explain": "Å er infinitivsmerket framfor lese.",
    "kind": "form"
  },
  {
    "id": "g29",
    "topic": "tekstbinding",
    "prompt": "Fyll inn: Vi les ___ skriv. (og/å)",
    "answers": [
      "og"
    ],
    "explain": "Og bind saman to verb i presens.",
    "kind": "form"
  },
  {
    "id": "g30",
    "topic": "tekstbinding",
    "prompt": "Plasser «ikkje» rett: Ho fortel at ho ___ kan ___ kome. Skriv heile setninga.",
    "answers": [
      "Ho fortel at ho ikkje kan kome."
    ],
    "explain": "I leddsetninga står ikkje føre det finitte verbet: at ho ikkje kan kome.",
    "kind": "context",
    "answerMode": "sentence"
  },
  {
    "id": "n-born",
    "topic": "substantiv",
    "prompt": "Bruk born–borna: På biblioteket sat fleire ___.",
    "answers": [
      "born"
    ],
    "explain": "Born er ubunden fleirtal. Den tilhøyrande bundne forma er borna.",
    "kind": "context"
  },
  {
    "id": "n-borna",
    "topic": "substantiv",
    "prompt": "Bruk born–borna: Alle ___ fann ei bok.",
    "answers": [
      "borna"
    ],
    "explain": "Born–borna er eit godkjent alternativ til barn–barna.",
    "kind": "context"
  },
  {
    "id": "n-stolar",
    "topic": "substantiv",
    "prompt": "Vi manglar to ___ rundt bordet. (ein stol)",
    "answers": [
      "stolar"
    ],
    "explain": "Stol er hankjønn: ein stol – stolen – stolar – stolane.",
    "kind": "context"
  },
  {
    "id": "n-stolane",
    "topic": "substantiv",
    "prompt": "Set alle ___ inntil veggen. (ein stol)",
    "answers": [
      "stolane"
    ],
    "explain": "Alle viser her til bunden fleirtal: stolane.",
    "kind": "context"
  },
  {
    "id": "n-veker",
    "topic": "substantiv",
    "prompt": "Det er tre ___ til ferien. (ei veke)",
    "answers": [
      "veker"
    ],
    "explain": "Veke blir bøygd ei veke – veka – veker – vekene.",
    "kind": "context"
  },
  {
    "id": "n-vekene",
    "topic": "substantiv",
    "prompt": "Dei siste ___ har vi lese ei novelle. (ei veke)",
    "answers": [
      "vekene"
    ],
    "explain": "Vekene er bunden fleirtal av veke.",
    "kind": "context"
  },
  {
    "id": "n-bilete",
    "topic": "substantiv",
    "prompt": "På veggen heng fire ___. (eit bilete)",
    "answers": [
      "bilete"
    ],
    "explain": "Bilete får inga ekstra ending i ubunden fleirtal.",
    "kind": "context"
  },
  {
    "id": "n-bileta",
    "topic": "substantiv",
    "prompt": "Vi heng opp alle ___. (eit bilete)",
    "answers": [
      "bileta"
    ],
    "explain": "Bilete får -a i bunden fleirtal: bileta.",
    "kind": "context"
  },
  {
    "id": "n-fjell",
    "topic": "substantiv",
    "prompt": "Frå toppen såg vi fleire ___. (eit fjell)",
    "answers": [
      "fjell"
    ],
    "explain": "Fjell har inga ending i ubunden fleirtal: fjell–fjella.",
    "kind": "context"
  },
  {
    "id": "n-regel",
    "topic": "substantiv",
    "prompt": "Hugs ___ viktig regel. (ein/ei/eit)",
    "answers": [
      "ein"
    ],
    "explain": "Regel er hankjønn: ein regel – regelen.",
    "kind": "context"
  },
  {
    "id": "n-augneblink",
    "topic": "substantiv",
    "prompt": "Vent ___ augneblink! (ein/ei/eit)",
    "answers": [
      "ein"
    ],
    "explain": "Augneblink er hankjønn. Lær artikkelen saman med ordet.",
    "kind": "context"
  },
  {
    "id": "n-netter",
    "topic": "substantiv",
    "prompt": "Vi sov i telt i to ___. (ei natt)",
    "answers": [
      "netter"
    ],
    "explain": "Natt har vokalskifte: ei natt – natta – netter – nettene.",
    "kind": "context"
  },
  {
    "id": "n-ex-neuter",
    "topic": "substantiv",
    "prompt": "Kvifor heiter det «fleire hus»?",
    "answers": [
      "Hus har inga ending i ubunden fleirtal."
    ],
    "explain": "Mange inkjekjønnsord, mellom anna hus, har inga ending i ubunden fleirtal.",
    "kind": "explain",
    "choices": [
      "Hus har inga ending i ubunden fleirtal.",
      "Alle substantiv er like i eintal og fleirtal.",
      "Fleire gjer at substantivet blir eit verb."
    ]
  },
  {
    "id": "n-ex-gender",
    "topic": "substantiv",
    "prompt": "Korleis finn du tryggast kjønnet på eit ukjent substantiv?",
    "answers": [
      "Slå opp ordet og lær artikkelen saman med det."
    ],
    "explain": "Kjønn og bøying bør lærast saman med ordet; enkle endereglar har unntak.",
    "kind": "explain",
    "choices": [
      "Slå opp ordet og lær artikkelen saman med det.",
      "Bruk alltid eit dersom bokmålsordet har et.",
      "Alle ord på -e er hokjønn."
    ]
  },
  {
    "id": "n-ex-book",
    "topic": "substantiv",
    "prompt": "Kvifor er «fleire bøker» ei form ein må lære?",
    "answers": [
      "Bok skiftar vokal i fleirtal."
    ],
    "explain": "Bok–bøker har vokalskifte. Det same gjeld ikkje alle hokjønnsord.",
    "kind": "explain",
    "choices": [
      "Bok skiftar vokal i fleirtal.",
      "Alle hokjønnsord skiftar vokal.",
      "Bøker er eintal."
    ]
  },
  {
    "id": "n-ex-pairs",
    "topic": "substantiv",
    "prompt": "Kva for to bøyingsrekkjer viser variantane av barn?",
    "answers": [
      "barn–barna og born–borna"
    ],
    "explain": "Lær heile rekkjer, ikkje berre lausrivne former.",
    "kind": "explain",
    "choices": [
      "barn–barna og born–borna",
      "barn–barnane og born–bornane",
      "barner–barna og borner–borna"
    ]
  },
  {
    "id": "p-vi",
    "topic": "pronomen",
    "prompt": "___ skal lese saman. Bruk eit personleg pronomen for deg sjølv og ein ven.",
    "answers": [
      "vi",
      "me"
    ],
    "explain": "Vi og me er begge godkjende pronomen i første person fleirtal.",
    "kind": "context"
  },
  {
    "id": "p-de",
    "topic": "pronomen",
    "prompt": "Læraren snakkar til to elevar: «___ kan starte no.» (de/dykk)",
    "answers": [
      "de"
    ],
    "explain": "De er subjektforma. Dokker kan òg brukast, men her øver vi på paret de/dykk.",
    "kind": "context"
  },
  {
    "id": "p-dykk",
    "topic": "pronomen",
    "prompt": "Læraren snakkar til to elevar: «Eg hjelper ___.» (de/dykk)",
    "answers": [
      "dykk"
    ],
    "explain": "Dykk er objektforma når ein bruker de/dykk. Dokker er eit anna godkjent alternativ.",
    "kind": "context"
  },
  {
    "id": "p-dokker",
    "topic": "pronomen",
    "prompt": "Bruk dokker-forma: Eg vil høyre kva ___ meiner.",
    "answers": [
      "dokker"
    ],
    "explain": "Dokker kan vere både subjekt og objekt.",
    "kind": "context"
  },
  {
    "id": "p-dykkar",
    "topic": "pronomen",
    "prompt": "Eg snakkar til klassen: Er dette boka ___? (dykkar/deira)",
    "answers": [
      "dykkar"
    ],
    "explain": "Dykkar viser til dei du snakkar til. Dokkar er òg godkjent.",
    "kind": "context"
  },
  {
    "id": "p-deira",
    "topic": "pronomen",
    "prompt": "Amina og Per har eit telt. Dette er teltet ___. (dykkar/deira)",
    "answers": [
      "deira"
    ],
    "explain": "Deira viser til nokon vi omtalar, ikkje dei vi snakkar direkte til.",
    "kind": "context"
  },
  {
    "id": "p-min",
    "topic": "pronomen",
    "prompt": "Eg eig ein sykkel. Dette er sykkelen ___.",
    "answers": [
      "min"
    ],
    "explain": "Min står til hankjønnsordet sykkel.",
    "kind": "context"
  },
  {
    "id": "p-mine",
    "topic": "pronomen",
    "prompt": "Eg eig desse bøkene. Dette er bøkene ___.",
    "answers": [
      "mine"
    ],
    "explain": "Mine er fleirtalsforma og står til bøkene.",
    "kind": "context"
  },
  {
    "id": "p-si",
    "topic": "pronomen",
    "prompt": "Amina tok med boka ho sjølv eig. Ho tok med boka ___.",
    "answers": [
      "si"
    ],
    "explain": "Si viser her tilbake til subjektet Amina og står til hokjønnsordet bok.",
    "kind": "context"
  },
  {
    "id": "p-sitt",
    "topic": "pronomen",
    "prompt": "Per fann skjerfet han sjølv eig. Han fann skjerfet ___.",
    "answers": [
      "sitt"
    ],
    "explain": "Sitt viser tilbake til subjektet og står til inkjekjønnsordet skjerf.",
    "kind": "context"
  },
  {
    "id": "p-kva",
    "topic": "pronomen",
    "prompt": "___ betyr dette ordet? (kva/kven)",
    "answers": [
      "kva"
    ],
    "explain": "Kva spør her etter eit innhald. Kven spør etter ein person.",
    "kind": "context"
  },
  {
    "id": "p-kven",
    "topic": "pronomen",
    "prompt": "___ har skrive denne boka? (kva/kven)",
    "answers": [
      "kven"
    ],
    "explain": "Kven spør etter ein person.",
    "kind": "context"
  },
  {
    "id": "p-kvar",
    "topic": "pronomen",
    "prompt": "___ bur du? Bruk spørjeordet som spør etter ein stad.",
    "answers": [
      "kvar"
    ],
    "explain": "Kvar er her eit spørjeadverb som spør etter stad.",
    "kind": "context"
  },
  {
    "id": "p-ex-dei",
    "topic": "pronomen",
    "prompt": "Kva viser «dei» til i «Bøkene er nye. Eg les dei»?",
    "answers": [
      "Bøkene"
    ],
    "explain": "Pronomenet dei viser tilbake til bøkene og er objekt i den andre setninga.",
    "kind": "explain",
    "choices": [
      "Bøkene",
      "Eg",
      "Ein ukjend person"
    ]
  },
  {
    "id": "p-ex-mi",
    "topic": "pronomen",
    "prompt": "Kvifor heiter det «boka mi»?",
    "answers": [
      "Eigedomsordet passar til hokjønnsordet bok."
    ],
    "explain": "Forma på eigedomsordet følgjer det som er eigd, ikkje kjønnet på eigaren.",
    "kind": "explain",
    "choices": [
      "Eigedomsordet passar til hokjønnsordet bok.",
      "Den som eig boka, må vere ei jente.",
      "Alle eigedomsord sluttar på -i."
    ]
  },
  {
    "id": "p-ex-korleis",
    "topic": "pronomen",
    "prompt": "Kva slags ord er «korleis»?",
    "answers": [
      "Eit spørjeadverb"
    ],
    "explain": "Korleis spør etter måten noko skjer på. I dette temaet øver vi på både pronomen og spørjeord.",
    "kind": "explain",
    "choices": [
      "Eit spørjeadverb",
      "Eit personleg pronomen",
      "Eit substantiv"
    ]
  },
  {
    "id": "p-ex-dokker",
    "topic": "pronomen",
    "prompt": "Kva for eit pronomen kan vere både subjekt og objekt i andre person fleirtal?",
    "answers": [
      "dokker"
    ],
    "explain": "Dokker kan brukast i begge posisjonane. Alternativet er de som subjekt og dykk som objekt.",
    "kind": "explain",
    "choices": [
      "dokker",
      "dykk",
      "de"
    ]
  },
  {
    "id": "a-raudt",
    "topic": "adjektiv",
    "prompt": "På bordet ligg eit ___ eple. (raud)",
    "answers": [
      "raudt"
    ],
    "explain": "Raud får -t når det står til inkjekjønnsordet eple.",
    "kind": "context"
  },
  {
    "id": "a-raude",
    "topic": "adjektiv",
    "prompt": "Vi plukka fleire ___ eple. (raud)",
    "answers": [
      "raude"
    ],
    "explain": "I fleirtal får raud forma raude.",
    "kind": "context"
  },
  {
    "id": "a-stort",
    "topic": "adjektiv",
    "prompt": "Vi møttest i eit ___ rom. (stor)",
    "answers": [
      "stort"
    ],
    "explain": "Stor blir stort i inkjekjønn.",
    "kind": "context"
  },
  {
    "id": "a-store",
    "topic": "adjektiv",
    "prompt": "Skulen har to ___ rom. (stor)",
    "answers": [
      "store"
    ],
    "explain": "Store er fleirtalsforma.",
    "kind": "context"
  },
  {
    "id": "a-nytt",
    "topic": "adjektiv",
    "prompt": "Eg fekk eit ___ kart. (ny)",
    "answers": [
      "nytt"
    ],
    "explain": "Ny får forma nytt i inkjekjønn.",
    "kind": "context"
  },
  {
    "id": "a-nye",
    "topic": "adjektiv",
    "prompt": "Elevane fekk ___ kart. (ny)",
    "answers": [
      "nye"
    ],
    "explain": "Nye er fleirtalsforma.",
    "kind": "context"
  },
  {
    "id": "a-open",
    "topic": "adjektiv",
    "prompt": "Døra er ___. (open)",
    "answers": [
      "open"
    ],
    "explain": "Open passar til hokjønnsordet dør.",
    "kind": "context"
  },
  {
    "id": "a-ope",
    "topic": "adjektiv",
    "prompt": "Vindauget er ___. (open)",
    "answers": [
      "ope"
    ],
    "explain": "Ope er inkjekjønnsforma av open.",
    "kind": "context"
  },
  {
    "id": "a-opne",
    "topic": "adjektiv",
    "prompt": "Begge dørene er ___. (open)",
    "answers": [
      "opne"
    ],
    "explain": "Opne er fleirtalsforma av open.",
    "kind": "context"
  },
  {
    "id": "a-skriven",
    "topic": "adjektiv",
    "prompt": "Boka er ___ på nynorsk. Bruk partisipp av skrive.",
    "answers": [
      "skriven"
    ],
    "explain": "Det sterke partisippet blir samsvarsbøygd: boka er skriven, brevet er skrive, bøkene er skrivne.",
    "kind": "context"
  },
  {
    "id": "a-skrive",
    "topic": "adjektiv",
    "prompt": "Brevet er ___ på nynorsk. Bruk partisipp av skrive.",
    "answers": [
      "skrive"
    ],
    "explain": "Brevet er inkjekjønn. Partisippet får forma skrive.",
    "kind": "context"
  },
  {
    "id": "a-skrivne",
    "topic": "adjektiv",
    "prompt": "Bøkene er ___ på nynorsk. Bruk partisipp av skrive.",
    "answers": [
      "skrivne"
    ],
    "explain": "Bøkene er fleirtal. Partisippet får forma skrivne.",
    "kind": "context"
  },
  {
    "id": "a-ex-har",
    "topic": "adjektiv",
    "prompt": "Kva er rett etter hjelpeverbet har?",
    "answers": [
      "Dei har skrive bøkene."
    ],
    "explain": "Etter har bruker vi skrive. I «bøkene er skrivne» er det samsvar med bøkene.",
    "kind": "explain",
    "choices": [
      "Dei har skrive bøkene.",
      "Dei har skrivne bøkene.",
      "Dei har skriven bøkene."
    ]
  },
  {
    "id": "a-ex-small",
    "topic": "adjektiv",
    "prompt": "Kva er rett bøying av liten?",
    "answers": [
      "liten – lita – lite – små"
    ],
    "explain": "Liten har eigne former etter kjønn og tal.",
    "kind": "explain",
    "choices": [
      "liten – lita – lite – små",
      "liten – liten – litent – litene",
      "liten – lita – lite – lite"
    ]
  },
  {
    "id": "a-ex-style",
    "topic": "adjektiv",
    "prompt": "Kva for ei endring er eit stilval, ikkje ei nødvendig retting?",
    "answers": [
      "Å byte «veldig glad» med ei konkret skildring."
    ],
    "explain": "Ein kan velje ei meir konkret skildring, men veldig glad kan òg passe. Dei andre endringane rettar samsvaret.",
    "kind": "explain",
    "choices": [
      "Å byte «veldig glad» med ei konkret skildring.",
      "Å byte «eit fin hus» med «eit fint hus».",
      "Å byte «fleire stor hus» med «fleire store hus»."
    ]
  },
  {
    "id": "a-ex-weak",
    "topic": "adjektiv",
    "prompt": "Kva er rett om «Dørene er måla»?",
    "answers": [
      "Måla er ei rett form her."
    ],
    "explain": "Måla er partisipp av eit svakt verb. I denne setninga er forma den same i eintal og fleirtal; ikkje legg til -ne automatisk.",
    "kind": "explain",
    "choices": [
      "Måla er ei rett form her.",
      "Alle partisipp må ha -ne i fleirtal.",
      "Måla kan berre stå etter har."
    ]
  },
  {
    "id": "a-ex-participle",
    "topic": "adjektiv",
    "prompt": "Kvifor heiter det «bøkene er skrivne»?",
    "answers": [
      "Det sterke partisippet står i samsvar med fleirtalet bøkene."
    ],
    "explain": "Skrivne er fleirtalsforma av det sterke partisippet. Regelen kan ikkje overførast til alle verb.",
    "kind": "explain",
    "choices": [
      "Det sterke partisippet står i samsvar med fleirtalet bøkene.",
      "Ordet er krev alltid -ne etter seg.",
      "Alle nynorske verb sluttar på -ne i fleirtal."
    ]
  },
  {
    "id": "t-dersom",
    "topic": "tekstbinding",
    "prompt": "___ det regnar, tek vi bussen. Bruk dersom eller dessutan.",
    "answers": [
      "dersom"
    ],
    "explain": "Dersom uttrykkjer eit vilkår.",
    "kind": "context"
  },
  {
    "id": "t-dessutan",
    "topic": "tekstbinding",
    "prompt": "Boka er spennande. ___ er ho lett å lese. (Dessutan/Dersom)",
    "answers": [
      "Dessutan"
    ],
    "explain": "Dessutan legg til eit nytt poeng.",
    "kind": "context"
  },
  {
    "id": "t-likevel",
    "topic": "tekstbinding",
    "prompt": "Det regna. ___ gjekk vi ut. (Likevel/Fordi)",
    "answers": [
      "Likevel"
    ],
    "explain": "Likevel viser ei motsetning til det ein kunne vente.",
    "kind": "context"
  },
  {
    "id": "t-derfor",
    "topic": "tekstbinding",
    "prompt": "Bussen var innstilt. ___ måtte vi gå. (Derfor/Sjølv om)",
    "answers": [
      "Derfor"
    ],
    "explain": "Derfor viser ei følgje av det som er sagt i førre setning.",
    "kind": "context"
  },
  {
    "id": "t-fordi",
    "topic": "tekstbinding",
    "prompt": "Ho tok med niste ___ turen var lang. (fordi/men)",
    "answers": [
      "fordi"
    ],
    "explain": "Fordi innleier årsaka til at ho tok med niste.",
    "kind": "context"
  },
  {
    "id": "t-modal",
    "topic": "tekstbinding",
    "choices": ["Vi skal lese teksten.", "Vi skal å lese teksten."],
    "prompt": "Vel setninga med rett bruk av infinitiv etter skal.",
    "answers": [
      "Vi skal lese teksten."
    ],
    "explain": "Etter skal står infinitiven vanlegvis utan å: Vi skal lese teksten.",
    "kind": "context"
  },
  {
    "id": "t-og",
    "topic": "tekstbinding",
    "prompt": "Ho syklar ___ går til skulen. (og/å)",
    "answers": [
      "og"
    ],
    "explain": "Og bind saman to verb i presens.",
    "kind": "context"
  },
  {
    "id": "t-aa",
    "topic": "tekstbinding",
    "prompt": "Dei prøver ___ finne ei løysing. (og/å)",
    "answers": [
      "å"
    ],
    "explain": "Å er infinitivsmerket framfor finne.",
    "kind": "context"
  },
  {
    "id": "t-comma-if",
    "topic": "tekstbinding",
    "prompt": "Set inn nødvendig komma: Dersom det regnar tek vi bussen.",
    "answers": [
      "Dersom det regnar, tek vi bussen."
    ],
    "explain": "Komma kjem etter leddsetninga som står først.",
    "kind": "context",
    "answerMode": "sentence"
  },
  {
    "id": "t-comma-two",
    "topic": "tekstbinding",
    "prompt": "Set inn nødvendig komma: Eg les og ho skriv.",
    "answers": [
      "Eg les, og ho skriv."
    ],
    "explain": "To sidestilte heilsetningar med kvart sitt subjekt får komma framfor og.",
    "kind": "context",
    "answerMode": "sentence"
  },
  {
    "id": "t-no-comma",
    "topic": "tekstbinding",
    "prompt": "Fjern det unødvendige kommaet: Eg les, og skriv.",
    "answers": [
      "Eg les og skriv."
    ],
    "explain": "Her har verba same subjekt. Det skal ikkje vere komma framfor og.",
    "kind": "context",
    "answerMode": "sentence"
  },
  {
    "id": "t-order",
    "topic": "tekstbinding",
    "prompt": "Ordne orda til ei setning som byrjar med I dag: I dag / vi / skriv / eit brev.",
    "answers": [
      "I dag skriv vi eit brev."
    ],
    "explain": "Det finitte verbet skriv står på andre setningsleddplass.",
    "kind": "context",
    "answerMode": "sentence"
  },
  {
    "id": "t-subclause",
    "topic": "tekstbinding",
    "prompt": "Rett ordstillinga: Ho seier at ho kan ikkje kome.",
    "answers": [
      "Ho seier at ho ikkje kan kome."
    ],
    "explain": "I denne leddsetninga står ikkje framfor det finitte verbet kan.",
    "kind": "context",
    "answerMode": "sentence"
  },
  {
    "id": "t-active",
    "topic": "tekstbinding",
    "prompt": "Gjer setninga aktiv utan å endre kven som handlar: Brevet vart skrive av elevrådet.",
    "answers": [
      "Elevrådet skreiv brevet."
    ],
    "explain": "Elevrådet er oppgitt som aktør. Vi kan gjere aktøren til subjekt utan å finne på nye opplysningar.",
    "kind": "context",
    "answerMode": "sentence"
  },
  {
    "id": "t-ex-comma",
    "topic": "tekstbinding",
    "prompt": "Kvifor skal «Når timen er slutt, går vi heim» ha komma?",
    "answers": [
      "Leddsetninga står før heilsetninga."
    ],
    "explain": "Det er setningsstrukturen som avgjer kommaet, ikkje lengda åleine.",
    "kind": "explain",
    "choices": [
      "Leddsetninga står før heilsetninga.",
      "Det skal alltid vere komma framfor går.",
      "Alle lange setningar skal ha eitt komma."
    ]
  },
  {
    "id": "t-ex-cause",
    "topic": "tekstbinding",
    "prompt": "Kva for eit ord passar når du vil vise årsak?",
    "answers": [
      "fordi"
    ],
    "explain": "Fordi viser årsak, dessutan tillegg og men motsetning.",
    "kind": "explain",
    "choices": [
      "fordi",
      "dessutan",
      "men"
    ]
  },
  {
    "id": "t-ex-passive",
    "topic": "tekstbinding",
    "prompt": "Du les «Det vart bestemt at turen skulle avlysast». Kven bestemte det?",
    "answers": [
      "Det går ikkje fram av setninga."
    ],
    "explain": "Ikkje legg til ein aktør utan dekning når du skriv om passiv til aktiv.",
    "kind": "explain",
    "choices": [
      "Det går ikkje fram av setninga.",
      "Læraren bestemte det.",
      "Elevrådet bestemte det."
    ]
  },
  {
    "id": "t-ex-reference",
    "topic": "tekstbinding",
    "prompt": "Kva er problemet med «Amina møtte Sara då ho kom» dersom lesaren må vite kven som kom?",
    "answers": [
      "Ho kan vise til begge personane."
    ],
    "explain": "Gjer det tydeleg kven pronomenet viser til, til dømes ved å bruke namnet.",
    "kind": "explain",
    "choices": [
      "Ho kan vise til begge personane.",
      "Møtte er alltid feil nynorsk.",
      "Det manglar eit adjektiv."
    ]
  },
  {
    "id": "t-ex-relation",
    "topic": "tekstbinding",
    "prompt": "Kva er mest presist når meininga er at du vil snakke om turen?",
    "answers": [
      "Eg vil seie noko om turen."
    ],
    "explain": "Om uttrykkjer emnet direkte. I forhold til passar betre når du faktisk samanliknar.",
    "kind": "explain",
    "choices": [
      "Eg vil seie noko om turen.",
      "Eg vil seie noko i forhold til turen.",
      "Eg vil seie noko samanlikna med turen."
    ]
  }
];
const TOPICS=[['verb','Verb','Bli trygg på notid, fortid og perfektum.','å → har'],['substantiv','Substantiv','Ein, ei eller eit? Få tak på mønstera.','ein / ei'],['pronomen','Pronomen og spørjeord','Vis til andre, uttrykk eigarskap og still spørsmål.','eg · dei'],['adjektiv','Adjektiv','La skildringane passe til substantiva.','fin → fint'],['tekstbinding','Setningar & samanheng','Bind saman tankar og set komma rett.','og, men'],['blanda','Blanda økt','Test litt av kvart, og finn ditt neste steg.','✳']];
const RULES=[
['Verb: fire former du treng','Infinitiv er grunnforma med å. Presens fortel ofte om no, preteritum om fortida. Presens perfektum er har + perfektum partisipp.','å skrive → skriv → skreiv → har skrive','Du kan velje e-infinitiv (å skrive, å kaste) eller a-infinitiv (å skriva, å kasta). Kløyvd infinitiv er òg tillate, men følgjer eit eige system. Her bruker forklaringane e-infinitiv. Øvingane godtek dei alternative formene som ligg i verbgrunnlaget frå ordboka.'],
['A-verb og e-verb','A-verba har -ar i presens og -a i fortid. E-verba har ofte -er i presens og -te eller -de i fortid.','kaste – kastar – kasta – har kasta<br>kjøpe – kjøper – kjøpte – har kjøpt<br>leve – lever – levde – har levd/levt','Ikkje avgjer verbgruppa berre ut frå infinitiven. Slå opp verbet og sjå heile bøyinga. Nokre verb har fleire godkjende bøyingsmønster.'],
['Sterke verb, j-verb og kortverb','Sterke verb skiftar ofte vokal i fortid. J-verb manglar -r i presens. Kortverb får -dde i preteritum.','finne – finn – fann – har funne<br>velje – vel – valde – har valt<br>bu – bur – budde – har budd/butt','Lag di eiga setning med kvar av formene. Det gjer mønsteret lettare å hugse.'],
['Substantiv: kjønn og tal','Substantiv har tre kjønn i nynorsk. Lær artikkelen saman med ordet.','ein gut – guten – gutar – gutane<br>ei jente – jenta – jenter – jentene<br>eit hus – huset – hus – husa','Dette er vanlege mønster, ikkje reglar utan unntak. Til dømes: ei bok – boka – bøker – bøkene. Bruk ordboka når du er i tvil.'],
['Pronomen og eigedomsord','Dei blir brukt både som subjekt og objekt. Eigedomsordet blir bøygd etter det som er eigd.','Dei kjem. Eg ser dei.<br>bilen min – boka mi – huset mitt – bøkene mine','I andre person fleirtal kan du bruke de som subjekt og dykk som objekt, eller dokker i begge posisjonar. Eigedomsorda er dykkar eller dokkar. Deira viser til noko som tilhøyrer dei.'],
['Adjektiv: samsvar og grad','Adjektiv skildrar substantiv og får ofte ulike former etter kjønn og tal.','ein fin dag – ei fin bok – eit fint hus – fine dagar<br>god – betre – best','Det finst unntak. Liten blir liten – lita – lite – små. Slå opp ord du ikkje kjenner, i staden for å leggje til -t automatisk.'],
['Tekstbinding og ordstilling','Vis lesaren korleis tankane heng saman. Vel bindeord som uttrykkjer akkurat den samanhengen du meiner.','Årsak: fordi, sidan · Motsetning: men, likevel<br>Tillegg: dessutan, òg · Følgje: derfor, dermed','I ei vanleg forteljande heilsetning står det finitte verbet på andre setningsleddplass: I dag skriv eg. I ei leddsetning står ikkje vanlegvis før det finitte verbet: fordi eg ikkje skriv.'],
['Komma, og og å','Set komma mellom sidestilte heilsetningar med kvart sitt subjekt. Set òg komma etter ei leddsetning som står først.','Eg les, og ho skriv.<br>Når eg er ferdig, går eg ut.<br>Eg likar å lese og skrive.','Å står framfor infinitiv. Og bind saman ord eller ledd. Det er ikkje komma mellom to verb med same subjekt: Eg les og skriv.'],
['Nynorsk er meir enn ordbyte','Bruk ord og setningar som formidlar det du vil seie. Omsetjing ord for ord kan gjere språket stivt.','«Eg føretok ei undersøking av saka.» → «Eg undersøkte saka.»','Forslaget er eit stilval, ikkje ein rettskrivingsregel. Også formelle uttrykk kan passe i rett sjanger. Ord med an-, be-, -heit eller -ing er ikkje automatisk feil; sjekk ordboka.']
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

RULES.push(['Partisipp: har skrive, men er skriven','Etter har bruker vi partisippet utan samsvarsbøying. Når eit sterkt partisipp står som skildring, må forma passe til substantivet.','Ho har skrive boka.<br>Boka er skriven. Brevet er skrive. Bøkene er skrivne.','For svake partisipp er samsvarsbøying valfri etter mellom anna er og blir, men obligatorisk rett framfor substantivet. Nokre partisipp på -tt har eigne reglar; ikkje bruk -ne automatisk. <a href="https://sprakradet.no/godt-og-korrekt-sprak/praktisk-sprakbruk/nynorskhjelp/rettleiing-om-konsekvent-nynorsk/" target="_blank" rel="noopener">Les om samsvarsbøying hos Språkrådet ↗</a>'],['Aktiv og passiv: kven handlar?','Aktiv form kan gjere aktøren tydeleg. Passiv kan passe når handlinga er viktigare enn kven som utfører henne.','Brevet vart skrive av elevrådet. → Elevrådet skreiv brevet.','I «Brevet vart skrive» er aktøren ukjend. Ikkje legg til elevrådet eller læraren utan dekning. Å velje aktiv form er ofte eit stilval, ikkje ei grammatisk retting.']);
