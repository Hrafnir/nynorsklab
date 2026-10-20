/* GPL-2.0-or-later. Learning logic is separate from rendering. */
const Learning=(()=>{
 const normalize=s=>s.normalize('NFC').trim().toLocaleLowerCase('nn').replace(/\s+/g,' ');
 function answerKey(s,q){s=normalize(s);if(q.answerMode==='sentence')s=s.replace(/[.!?]$/,'').trim().replace(/\s*,\s*/g,', ');return s}
 function matches(q,answer){return q.answers.some(a=>answerKey(a,q)===answerKey(answer,q))}
 function shuffle(items,rng=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
 function select(items,history={},answered=0,limit=10,rng=Math.random){
  const shuffled=shuffle(items,rng),dueWrong=shuffled.filter(q=>history[q.id]?.wrong&&history[q.id].dueAt<=answered).sort((a,b)=>history[a.id].lastSeen-history[b.id].lastSeen).slice(0,3);
  const selected=new Set(dueWrong.map(q=>q.id));
  const rank=q=>!history[q.id]?0:history[q.id].dueAt<=answered?1:2;
  const rest=shuffled.filter(q=>!selected.has(q.id)).sort((a,b)=>rank(a)-rank(b)||(history[a.id]?.lastSeen??-1)-(history[b.id]?.lastSeen??-1));
  return [...dueWrong,...rest].slice(0,limit);
 }
 function record(previous,right,answered){const streak=right?(previous?.streak||0)+1:0;return {attempts:(previous?.attempts||0)+1,streak,wrong:!right,lastSeen:answered,dueAt:answered+(right?[10,30,60][Math.min(streak-1,2)]:5)}}
 return {matches,shuffle,select,record};
})();
const TOPIC_SUPPORT={
 verb:{hint:'Finn tidsforma. Sjå deretter etter mønsteret til akkurat dette verbet.',transfer:'Skriv eit lite avsnitt om noko som hende i går. Bruk tre verb frå økta i preteritum, og forklar eitt av vala.'},
 substantiv:{hint:'Finn kjønn, eintal eller fleirtal, og ubunden eller bunden form. Lær artikkelen saman med ordet.',transfer:'Skildre ein stad med minst tre substantiv frå økta. Bruk både eintal og fleirtal, og forklar ei bøying.'},
 pronomen:{hint:'Kven eller kva viser ordet til? Er det subjekt, objekt, eigarskap eller eit spørsmål?',transfer:'Skriv fire setningar om to personar. Bruk pronomen og eigedomsord, og sjekk at lesaren veit kven orda viser til.'},
 adjektiv:{hint:'Sjå på substantivet: kva kjønn og tal har det? Etter har og etter er kan eit partisipp få ulike former.',transfer:'Skildre ein stad eller ein person med tre adjektiv. Endre så frå eintal til fleirtal og forklar kva som skjer med formene.'},
 tekstbinding:{hint:'Kva samanheng vil du uttrykkje? Sjå etter subjekt, verb og grenser mellom setningsledd.',transfer:'Skriv eit avsnitt med ei årsak, ei motsetning og eit tillegg. Bruk til dømes fordi, men og dessutan. Forklar eitt komma eller eitt ordval.'},
 blanda:{hint:'Les oppgåva og finn kva du skal undersøkje: ordform, ordstilling eller samanheng.',transfer:'Skriv eit kort avsnitt om noko du er oppteken av. Bruk tre språkval frå økta, og forklar kvifor dei passar.'}
};
const VERB_CONTEXTS={
 kaste:['Amina ___ ballen til Per.','På trening i går ___ Amina ballen langt.','Amina har ___ ballen til Per mange gonger.'],
 hoppe:['Elevane ___ tau i friminuttet.','I friminuttet ___ elevane tau.','Elevane har ___ tau før timen.'],
 snakke:['Vi ___ om boka i klassen.','Etter timen ___ vi om boka.','Vi har ___ om boka i klassen.'],
 danse:['Dei ___ til musikken.','På festen ___ dei saman.','Dei har ___ heile kvelden.'],
 vente:['Per ___ på bussen.','Ved haldeplassen ___ Per på bussen.','Per har ___ på bussen i ti minutt.'],
 spele:['Vi ___ fotball etter skulen.','Etter skulen i går ___ vi fotball.','Vi har ___ fotball etter skulen.'],
 opne:['Ho ___ vindauget.','Før timen ___ ho vindauget.','Ho har ___ vindauget.'],
 sykle:['Eg ___ til skulen.','Heim frå skulen ___ eg saman med Per.','Eg har ___ til skulen kvar dag denne veka.'],
 kjøpe:['Vi ___ brød i butikken.','På veg heim ___ vi brød.','Vi har ___ brød til turen.'],
 lære:['Elevane ___ eit nytt språk.','På kurset ___ elevane mykje.','Elevane har ___ fleire nye ord.'],
 leve:['Fisken ___ i ferskvatn.','Fisken ___ lenge i det store akvariet.','Fisken har ___ i akvariet i fleire år.'],
 prøve:['Vi ___ ein annan framgangsmåte.','I førre time ___ vi ein annan framgangsmåte.','Vi har ___ fleire framgangsmåtar.'],
 høyre:['Eg ___ musikk frå naborommet.','Frå naborommet ___ eg musikk i går.','Eg har ___ denne songen før.'],
 reise:['Familien ___ med tog.','I ferien ___ familien med tog.','Familien har ___ med tog mange gonger.'],
 skrive:['Elevrådet ___ eit brev til rektor.','Etter møtet ___ elevrådet eit brev.','Elevrådet har ___ eit brev til rektor.'],
 lese:['Ho ___ ei bok om verdsrommet.','På bussen ___ ho ei bok.','Ho har ___ ei bok om verdsrommet.'],
 finne:['Vi ___ svaret i teksten.','I teksten ___ vi svaret på spørsmålet.','Vi har ___ svaret i teksten.'],
 drikke:['Eg ___ vatn etter treninga.','Etter treninga ___ eg eit glas vatn.','Eg har ___ eit glas vatn.'],
 springe:['Hunden ___ over plassen.','Over plassen ___ hunden i full fart.','Hunden har ___ over plassen.'],
 kome:['Bussen ___ om fem minutt.','Til haldeplassen ___ bussen for seint i går.','Bussen har ___ til haldeplassen.'],
 ta:['Eg ___ med ei bok på turen.','På turen ___ eg med ei bok.','Eg har ___ med ei bok på turen.'],
 sjå:['Vi ___ eit ekorn i treet.','I treet ___ vi eit ekorn.','Vi har ___ eit ekorn i treet.'],
 gå:['Klassen ___ til biblioteket.','Etter lunsj ___ klassen til biblioteket.','Klassen har ___ til biblioteket.'],
 ete:['Vi ___ nista ute.','På turen ___ vi nista ute.','Vi har ___ nista vår.'],
 sove:['Katten ___ på stolen.','I natt ___ katten på stolen.','Katten har ___ på stolen i heile dag.'],
 vere:['Eg ___ på biblioteket.','Etter skulen ___ eg på biblioteket.','Eg har ___ på biblioteket.'],
 telje:['Vi ___ stolane i rommet.','Før møtet ___ vi stolane.','Vi har ___ stolane i rommet.'],
 velje:['Klassen ___ ei bok å lese.','På måndag ___ klassen ei bok.','Klassen har ___ ei bok å lese.'],
 selje:['Laget ___ kaker til inntekt for turen.','På marknaden ___ laget kaker.','Laget har ___ kaker til inntekt for turen.'],
 spørje:['Ho ___ læraren om hjelp.','Etter timen ___ ho læraren om hjelp.','Ho har ___ læraren om hjelp.'],
 setje:['Vi ___ syklane i stativet.','Framfor skulen ___ vi syklane i stativet.','Vi har ___ syklane i stativet.'],
 bu:['Dei ___ nær skulen.','Før flyttinga ___ dei nær skulen.','Dei har ___ nær skulen i tre år.'],
 tru:['Eg ___ på det du seier.','Først ___ eg at timen var slutt.','Eg har ___ på det du seier.'],
 nå:['Vi ___ bussen dersom vi går no.','I går ___ vi bussen akkurat i tide.','Vi har ___ målet vårt.']
};
function verbExplanation(v){return v.word==='spele'?'Spele har fleire godkjende mønster: spelar–spela–har spela og speler–spelte–har spelt. Blanda bøying spelar–spelte–har spelt er òg tillaten.':GROUPS[v.group]}
if(typeof module!=='undefined'&&module.exports)module.exports={Learning,TOPIC_SUPPORT,VERB_CONTEXTS};
