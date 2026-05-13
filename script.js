// Vocabulary Data
const unit1Words = [
    "computer:kompýuter","system:ulgam","hardware:enjam üpjünçiligi","software:programma üpjünçiligi","device:enjam",
    "machine:maşyn","equipment:enjamlar","processor:prosessor","memory:ýat","storage:saklaýyş",
    "desktop:stol kompýuteri","laptop:noutbuk","notebook:noutbuk","tablet:planşet","smartphone:smartfon",
    "mainframe:meýnfreým","supercomputer:superkompýuter","server:serwer","workstation:iş stansiýasy","embedded system:oturdylan ulgam",
    "CPU:merkezi prosessor","motherboard:esasy plata","hard drive:gaty disk","SSD:SSD disk","RAM:operatiw ýat",
    "keyboard:klawiatura","mouse:syçanjyk","monitor:monitor","printer:printer","scanner:skaner",
    "input:giriş","output:çykyş","input device:giriş enjamy","output device:çykyş enjamy","touchscreen:sensor ekran",
    "speaker:ses çykaryjy","microphone:mikrofon","webcam:web kamera","display:ekran","interface:interfeýs",
    "speed:tizlik","capacity:sygym","performance:öndürijilik","power:kuwwat","efficiency:netijelilik",
    "processing:gaýtadan işlemek","multitasking:köp meseleli iş","compatibility:laýyklyk","reliability:ygtybarlylyk","upgrade:täzelenme",
    "program:programma","application:goşundy","operating system:operasion ulgam","file:faýl","data:maglumat",
    "database:maglumat gory","command:buýruk","instruction:görkezme","code:kod","network:tor",
    "internet:internet","connection:baglanyşyk","wireless:simsiz","cable:kabel","router:router",
    "bandwidth:geçirijilik","access:giriş","protocol:protokol","user:ulanyjy","operator:operator",
    "technician:tehnik","engineer:inžener","developer:dörediji","administrator:administrator","end-user:soňky ulanyjy",
    "interaction:özara täsir","usability:ulanylyş aňsatlygy","experience:tejribe","technology:tehnologiýa","digital:sanly",
    "electronic:elektron","automation:awtomatlaşdyrma","system unit:ulgam bloky","peripheral:daşarky enjam","device driver:draywer",
    "installation:gurnama","configuration:sazlama","maintenance:hyzmat etmek","portable:göterip bolýan","powerful:güýçli",
    "compact:ykjam","efficient:netijeli","advanced:ösen","basic:başlangyç","modern:häzirki zaman",
    "traditional:däp bolan","virtual:wirtual","cloud:bulut","algorithm:algoritm","encryption:şifrleme"
];

const unit2Words = [
    "firmware:programma üpjünçiligini","bus:elektrik signallaryny geçirýän ýol","clock speed:takt tizligi","core:ýadro","thread:akym",
    "cache:ötâg çalt ýat","register:iň çalt ýat öýjügi","deployment server:ýerleşdirme serweri","execution:ýerine ýetiriş","pipeline:konweýer",
    "latency time:gijikme wagty","bandwidth usage:geçirijilik ulanylyşy","data rate:maglumat tizligi","transmission:geçiriş","command line:buýruk setiri",
    "decryption:şifri açmak","authentication:tassyklama","authorization:ygtyýar bermek","token:token","certificate:şahadatnama",
    "digital signature:sanly gol","hashing:hashing","script:skript","data structure:maglumat gurluşy","array:massiw",
    "stack:stek","queue:nobat","pointer:görkeziji","variable:üýtgeýän","constant:hemişelik",
    "loop:gaýtalanma","condition:şert","compiler:kompilýator","interpreter:interpretator","syntax:sintaksis",
    "debugging:düzetmek","testing:synag","deployment:ýerleşdirmek","integration:integrasiýa","API:API",
    "endpoint:soňky nokat","request:sorag","response:jogap","JSON:JSON","XML:XML",
    "markup:bellik dili","browser:brauzer","rendering:render","session:sessiýa","cookie:kuki",
    "cache memory:keş ýady","load balancing:ýük paýlaşma","failover:ätiýaç geçiş","clustering:toparlaşdyrma","scalability:giňelmek ukyby",
    "availability:elýeterlilik","cron job:meýilnama işi","maintainability:hyzmat edilmek","variable scope:üýtgeýän çägi","interface design:interfeýs dizaýny",
    "user experience:ulanyjy tejribesi","accessibility:elýeterlilik","localization:lokalizasiýa","internationalization:halkara uýgunlaşma","encoding:kodlamak",
    "decoding:kod açmak","compression:gysmak","decompression:açmak","streaming:akym","buffering:buferleme",
    "codec:kodek","frame:kadr","resolution scale:çözgüt derejesi","refresh rate:täzelenme tizligi","aspect ratio:gatnaşygy",
    "pixel density:piksel dykyzlygy","color depth:reňk çuňlugy","grayscale:gara-ak","rendering engine:render hereketlendiriji","scheduler:meýilnamalaýjy",
    "full-stack:doly ulgam","multiprocessing:köp prosess","parallelism:paralellik","concurrency:bir wagtda işlemek","thread pool:thread toplumy",
    "load:ýük","workload:iş ýükü","bottleneck:dar ýer","throughput rate:geçirijilik derejesi","interrupt:kesme signaly",
    "polling:barlag","clock cycle:takt sikli","instruction set:görkezmeler toplumy","addressing:adresleme","segmentation:segmentasiýa",
    "paging:sahypalama","fragmentation:böleklenme","allocation:paýlamak","deallocation:boşatmak","kernel:ýadro"
];

const unit3Words = [
    "operating system:operasion ulgam","kernel mode:ýadro režimi","user mode:ulanyjy režimi","multitasking OS:köp wezipeli operasion ulgam","real-time system:real wagt ulgamy",
    "distributed system:paýlanan ulgam","file system:faýl ulgamy","directory:katalog","root directory:esasy katalog","path:ýol",
    "absolute path:doly ýol","relative path:gatnaşykly ýol","file permission:faýl rugsady","read permission:okamak rugsady","write permission:ýazmak rugsady",
    "execute permission:ýerine ýetirmek rugsady","process ID:prosesiň belgisi","thread scheduling:akym meýilleşdirilmegi","context switch:kontekst çalyşma","deadlock:blokirlenme",
    "starvation:ýetmezçilik","semaphore:semafor","mutex:mutex","virtual memory:wirtual ýat","paging file:sahypalama faýly",
    "swap space:çalşylýan ýat","disk partition:disk bölümi","file allocation:faýl paýlanyşy","journaling:ýazgy ýöretmek","booting:ýüklenme",
    "bootloader:ýükleýji","system call:ulgam çagyryşy","device driver:enjam draýweri","interrupt handler:kesme işleýjisi","scheduler queue:planlaýjy nobaty",
    "time slice:wagt bölegi","priority:ileri tutma","foreground process:öň proses","background process:arka proses","daemon process:daemon proses",
    "resource:serişde","allocation table:paýlama tablisasy","inode:inode","file descriptor:faýl görkeziji","mount:birikdirmek",
    "unmount:aýyrmak","partition table:bölüniş tablisasy","filesystem type:faýl görnüşi","ext4:Fourth Extended Filesystem","NTFS:New Technology File System",
    "FAT32:File Allocation Table 32","system log:ulgam ýazgysy","audit:barlag","monitoring:gözegçilik","uptime:iş wagty",
    "downtime:işlemeýän wagt","load average:ortaça ýük","system resource:ulgam serişdesi","memory leak:ýat syzmasy","system crash:ulgam çökmek",
    "fault tolerance:ýalňyşlyga garşylyk","redundancy system:ätiýaç ulgam","checkpoint:gözegçilik nokady","rollback point:yzyna gaýtma nokady","recovery mode:dikeldiş režimi",
    "safe mode:howpsuz režim","shell script:shell skript","command prompt:buýruk setiri","terminal emulator:terminal emulýator","system utility:ulgam guraly",
    "disk utility:disk guraly","task manager:wezipe dolandyryjy","process manager:proses dolandyryjy","system tray:ulgam paneli","status bar:ýagdaý paneli",
    "notification:bildiriş","popup window:çykýan penjire","dialog box:aragatnaşyk penjiresi","shortcut:gysga ýol","desktop icon:nyşan",
    "recycle bin:zikir gutusy","file explorer:faýl gözlegçi","system settings:ulgam sazlamalary","control panel:dolandyryş paneli","administrator:administrator",
    "root access:doly ygtyýar","privilege:aýratyn hukuk","user account:ulanyjy hasaby","login screen:giriş ekrany","lock screen:gulplama ekrany",
    "password policy:parol syýasaty","authentication method:tassyklama usuly","login attempt:giriş synanyşygy","access control:giriş dolandyryşy","security policy:howpsuzlyk syýasaty",
    "audit log:audit ýazgysy","system update:ulgam täzelenmesi","patch update:düzediş täzelenmesi","system upgrade:ulgam kämilleşmesi","rollback system:yzyna gaýtarmak"
];

const unit4Words = [
    "restore point:dikeldiş nokady","system image:ulgam suraty","backup copy:ätiýaç nusga","disk cleanup:disk arassalama","disk defragmentation:disk tertipleme",
    "system performance:ulgam öndürijiligi","vulnerability scan:gowşaklyk barlagy","intranet:içki tor","extranet:daşarky tor","ISP:internet üpjünçi",
    "broadband:giň zolak","dial-up:telefon arkaly","fiber optic:optiki süýüm","ethical hacking:etik hacking","hotspot:hyzmat nokady",
    "access point:giriş nokady","signal strength:signal güýji","coverage:örtük","roaming:roaming","IP protocol:IP protokol",
    "subnet:subnet","subnet mask:subnet maskasy","gateway address:geçelge adresi","MAC address:MAC salgysy","port number:port belgisi",
    "socket:socket","packet loss:paket ýitgisi","jitter:jitter","ping:ping","traceroute:ýol yzarlama",
    "DNS server:DNS serwer","domain name:domen ady","URL:URL","web address:web adres","hyperlink:hyperlink",
    "web page:web sahypa","website:web sahypa toplumy","homepage:baş sahypa","browser tab:brauzer tab","bookmark:bellik",
    "history:taryh","cache storage:keş saklaýyş","private browsing:gizlin serfing","search engine:gözleg ulgamy","query:sorag",
    "keyword:açar söz","result page:netijeler sahypasy","crawling:gezmek","indexing:indeksleme","ranking:derejelendirme",
    "SEO:SEO","metadata:metamaglumat","web server:web serwer","hosting:hosting","shared hosting:umumy hosting",
    "dedicated server:aýratyn server","cloud hosting:bulut hosting","penetration testing:gorag synagy","traffic:trafik","data transfer:maglumat geçiriş",
    "upload speed:ýükleme tizligi","download speed:ýükläp alyş tizligi","firewall rule:firewall düzgüni","antivirus:antivirus","malware:zyýanly programma",
    "spyware:yzarlama programma","ransomware:şantaj programma","phishing:aldaw hüjümi","spam:islenilmeýän hat","encryption key:şifr açary",
    "SSL:Secure Sockets Layer","HTTPS:howpsuz HTTP","certificate authority:sertifikat edarasy","VPN:wirtual şahsy tor","tunneling:tunelleşme",
    "proxy server:proksi serwer","anonymity:gizlinlik","digital footprint:sanly yz","data privacy:maglumat gizlinligi","cyber attack:kiber hüjüm",
    "intrusion:girip gelme","IDS:Intrusion Detection System","exploit:exploit","patch security:howpsuzlyk düzedişi","bandwidth throttling:tizligi çäklendirme",
    "network congestion:tor dyknyşygy","data packet:maglumat paketi","packet switching:paket geçirişi","circuit switching:zynjyr geçirişi","network protocol stack:protokol toplumy",
    "TCP/IP model:TCP/IP modeli","OSI model:OSI modeli","physical layer:fiziki gatlak","data link layer:maglumat gatlagy","network layer:tor gatlagy",
    "transport layer:transport gatlagy","session layer:sessiýa gatlagy","presentation layer:görkezme gatlagy","application layer:programma gatlagy","port forwarding:port ugrukdyrma"
];

const unit5Words = [
    "NAT:NAT","IP routing:IP ugrukdyrma","routing table:ugrukdyrma tablisasy","static IP:hemişelik IP","dynamic IP:üýtgeýän IP",
    "DHCP:DHCP","port scanning:port barlagy","intrusion detection:girip gelme ýüze çykarmak","IDS:IDS","IPS:IPS",
    "honeypot:aldaw ulgamy","botnet:bot ulgamy","DDoS attack:DDoS hüjümi","brute force:güýç bilen döwme","password cracking:parol döwme",
    "two-factor authentication:iki faktorlu tassyklama","biometric authentication:biometrik tassyklama","fingerprint scan:barmak yzy","face recognition:ýüz tanama","encryption protocol:şifrleme protokoly",
    "secure channel:howpsuz kanal","handshake:başlangyç baglanyşyk","digital certificate:sanly sertifikat","certificate chain:sertifikat zynjyry","trust authority:ygtybarly edara",
    "secure socket:howpsuz socket","data breach:maglumat syzmasy","cyber security:kiber howpsuzlyk","security audit:howpsuzlyk barlagy","database management system:DBMS",
    "relational database:gatnaşykly baza","table:tablisa","row:setir","column:sütün","record:ýazgy",
    "field:meýdan","primary key:esasy açar","foreign key:daşary açar","index:indeks","query language:sorag dili",
    "SQL:SQL","SELECT statement:saýlama buýrugy","INSERT statement:goşma buýrugy","UPDATE statement:täzeleme buýrugy","DELETE statement:pozma buýrugy",
    "WHERE clause:şert bölegi","JOIN operation:birleşdiriş","INNER JOIN:içki birleşme","OUTER JOIN:daşky birleşme","normalization:normallaşdyrma",
    "denormalization:kärsizleşdirme","schema:shema","entity:obyekt","attribute:hasiýet","relationship:baglanyşyk",
    "ER diagram:ER diagrammasy","constraint:çäklendirme","unique constraint:ýeke-täk çäklendirme","not null:boş bolmaly däl","default value:başlangyç gymmat",
    "transaction:tranzaksiýa","commit transaction:tranzaksiýany tassyklamak","rollback transaction:yzyna gaýtarmak","ACID properties:ACID häsiýetleri","atomicity:bölünmezlik",
    "consistency:laýyklyk","isolation:aýratynlyk","durability:durnuklylyk","data warehouse:maglumat ammary","data mining:maglumat gazma",
    "big data:uly maglumatlar","data analytics:maglumat analizi","structured data:gurluşly maglumat","unstructured data:gurluşsyz maglumat","semi-structured:ýarym gurluşly",
    "data model:maglumat modeli","hierarchical model:ierarhiki model","network model:tor modeli","NoSQL database:NoSQL bazasy","document store:dokument saklaýjy",
    "key-value store:açar-gymmat saklaýjy","column store:sütün bazasy","graph database:graf bazasy","node:düwün","edge:gyra",
    "query optimization:sorag optimizasiýasy","execution plan:ýerine ýetiriş meýilnamasy","indexing strategy:indeks strategiýasy","sharding:bölmek","replication:göçürme",
    "master-slave:baş-we-gul","failover cluster:ätiýaç topar","distributed database:paýlanan baza","consistency model:laýyklyk modeli","eventual consistency:soňky laýyklyk",
    "strong consistency:güýçli laýyklyk","tuple:tuple","relation:gatnaşyk","cardinality:kardinalik","one-to-one:bir-bire"
];

// Parse helper
function parseWords(arr) {
    return arr.map(item => {
        let [en, tk] = item.split(":");
        return { en: en, tk: tk };
    });
}

const vocabulary = {
    unit1: parseWords(unit1Words),
    unit2: parseWords(unit2Words),
    unit3: parseWords(unit3Words),
    unit4: parseWords(unit4Words),
    unit5: parseWords(unit5Words)
};

// Global game state
let scoreHistory = [];
let gameWords = [], currentIdx = 0, score = 0, timerInterval = null, timeLeft = 0, correctAns = "", selectedUnit = "", gameMode = "", isWaiting = false;

// Storage Functions
function loadScoresFromStorage() { 
    try { 
        const stored = localStorage.getItem('ict_score_history'); 
        scoreHistory = stored ? JSON.parse(stored) : []; 
    } catch(e) { 
        scoreHistory = []; 
    } 
}

function saveScoresToStorage() { 
    localStorage.setItem('ict_score_history', JSON.stringify(scoreHistory)); 
}

function addScoreRecord(percent) { 
    let now = new Date(); 
    let formatted = now.toLocaleString('tk-TM'); 
    scoreHistory.unshift({ date: formatted, percent: percent }); 
    if(scoreHistory.length > 30) scoreHistory = scoreHistory.slice(0,30); 
    saveScoresToStorage(); 
    updateBestScoreDisplay(); 
    if(document.getElementById('results-screen')?.classList.contains('active')) renderScoresList(); 
}

function renderScoresList() { 
    let container = document.getElementById('scoresContainer'); 
    if(!container) return; 
    if(scoreHistory.length === 0) { 
        container.innerHTML = '<div class="empty-scores">⛔ Entäk netije ýok. Oýun oýnap başlaň!</div>'; 
        return; 
    } 
    container.innerHTML = scoreHistory.map(s => `<div class="score-item"><span class="score-date">📅 ${s.date}</span><span class="score-percent">${s.percent}%</span></div>`).join(''); 
}

function clearAllScores() { 
    if(confirm("Ähli netijeleri pozmak isleýärsiňizmi?")) { 
        scoreHistory = []; 
        saveScoresToStorage(); 
        renderScoresList(); 
        updateBestScoreDisplay(); 
        alert("Netijeler üstünlikli pozuldy."); 
    } 
}

function updateBestScoreDisplay() { 
    let best = localStorage.getItem('ict_best') || 0; 
    document.getElementById('best-score').innerText = `Iň ýokary netije: %${best}`; 
}

// UI Helpers
function showScreen(screenId) { 
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); 
    document.getElementById(screenId).classList.add('active'); 
    if(timerInterval) clearInterval(timerInterval); 
    if(screenId === 'menu-screen') updateBestScoreDisplay(); 
    if(screenId === 'results-screen') renderScoresList(); 
    if(screenId !== 'game-screen') { 
        let msgDiv = document.getElementById('correct-answer-message'); 
        if(msgDiv) msgDiv.innerHTML = ''; 
    } 
}

function triggerFlash(isCorrect) { 
    let flash = document.getElementById('flash-overlay'); 
    flash.style.backgroundColor = isCorrect ? 'rgba(16,185,129,0.5)' : 'rgba(239,68,68,0.5)'; 
    flash.style.opacity = '1'; 
    setTimeout(() => flash.style.opacity = '0', 280);
}

function showCorrectAnswerMessage(correctAnswerText) {
    let msgDiv = document.getElementById('correct-answer-message');
    if(msgDiv) {
        msgDiv.innerHTML = `<div class="correct-answer-toast">✨ Dogry jogap: ${correctAnswerText} ✨</div>`;
        setTimeout(() => { 
            if(msgDiv.innerHTML.includes(correctAnswerText)) msgDiv.innerHTML = ''; 
        }, 1300);
    }
}

// Game Logic
function finishGame() { 
    if(timerInterval) clearInterval(timerInterval); 
    let percent = Math.round((score / 25) * 100); 
    let best = localStorage.getItem('ict_best') || 0; 
    if(percent > best) localStorage.setItem('ict_best', percent); 
    addScoreRecord(percent); 
    alert(`Oýun tamam! ✅ Dogry: ${score}/25\nNetije: %${percent}`); 
    showScreen('menu-screen'); 
}

function handleResult(isCorrect) { 
    if(isWaiting) return; 
    isWaiting = true; 
    if(timerInterval) clearInterval(timerInterval); 
    if(!isCorrect) showCorrectAnswerMessage(correctAns);
    if(isCorrect) score++; 
    triggerFlash(isCorrect); 
    setTimeout(() => { 
        currentIdx++; 
        if(currentIdx < gameWords.length) { 
            loadQuestion(); 
            isWaiting = false; 
        } else { 
            finishGame(); 
            isWaiting = false; 
        } 
    }, isCorrect ? 700 : 1300);
}

function loadQuestion() { 
    if(timerInterval) clearInterval(timerInterval); 
    document.querySelectorAll('.option-btn').forEach(btn => btn.classList.remove('correct-btn', 'wrong-btn'));
    if(!gameWords[currentIdx]) return; 
    let cur = gameWords[currentIdx]; 
    let isEngToTurk = Math.random() > 0.5; 
    if(isEngToTurk) { 
        document.getElementById('q-word').innerText = cur.en; 
        document.getElementById('q-lang-label').innerText = "Turkmençesi näme?"; 
        correctAns = cur.tk; 
    } else { 
        document.getElementById('q-word').innerText = cur.tk; 
        document.getElementById('q-lang-label').innerText = "English meaning?"; 
        correctAns = cur.en; 
    } 
    document.getElementById('progress').innerText = `${currentIdx+1}/25`; 
    timeLeft = (gameMode === 'typing') ? 15 : 7; 
    document.getElementById('timer').innerText = timeLeft; 
    
    const timerFunction = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerFunction);
            if (!isWaiting) handleResult(false);
        } else {
            timeLeft--;
            document.getElementById('timer').innerText = timeLeft;
        }
    }, 1000);
    timerInterval = timerFunction;
    
    if(gameMode === 'options') { 
        document.getElementById('options-container').style.display = 'block'; 
        document.getElementById('typing-container').style.display = 'none'; 
        let allPossible = []; 
        for(let u in vocabulary) vocabulary[u].forEach(w => { allPossible.push(isEngToTurk ? w.tk : w.en); }); 
        let wrongs = []; 
        while(wrongs.length < 2){ 
            let r = allPossible[Math.floor(Math.random() * allPossible.length)]; 
            if(r !== correctAns && !wrongs.includes(r)) wrongs.push(r); 
        } 
        let opts = [correctAns, ...wrongs]; 
        opts.sort(() => Math.random() - 0.5); 
        for(let i = 0; i < 3; i++){ 
            let btn = document.getElementById(`opt${i}`); 
            if(btn) btn.innerText = opts[i]; 
        } 
    } else { 
        document.getElementById('options-container').style.display = 'none'; 
        document.getElementById('typing-container').style.display = 'block'; 
        let inp = document.getElementById('word-input'); 
        if(inp) inp.value = ""; 
        setTimeout(() => { 
            if(document.getElementById('game-screen').classList.contains('active')) inp?.focus(); 
        }, 100); 
    }
}

function startGame(unit, mode) { 
    selectedUnit = unit; 
    gameMode = mode; 
    let pool = (selectedUnit === 'all') ? [...vocabulary.unit1, ...vocabulary.unit2, ...vocabulary.unit3, ...vocabulary.unit4, ...vocabulary.unit5] : [...vocabulary[selectedUnit]]; 
    if(pool.length === 0) { 
        alert("Söz tapylmady!"); 
        showScreen('unit-screen'); 
        return; 
    } 
    let shuffled = [...pool]; 
    for(let i = shuffled.length-1; i > 0; i--){ 
        let j = Math.floor(Math.random() * (i+1)); 
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; 
    } 
    gameWords = shuffled.slice(0, 25); 
    if(gameWords.length < 25){ 
        while(gameWords.length < 25) gameWords.push(...pool); 
        gameWords = gameWords.slice(0, 25); 
    } 
    currentIdx = 0; 
    score = 0; 
    isWaiting = false; 
    showScreen('game-screen'); 
    loadQuestion(); 
}

function filterList(unit, btnElement) { 
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active')); 
    if(btnElement) btnElement.classList.add('active'); 
    let words = vocabulary[unit] || []; 
    document.getElementById('list-body').innerHTML = words.map((w, idx) => `<tr><td>${idx+1}</td><td>${w.tk}</td><td>${w.en}</td></tr>`).join(''); 
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    loadScoresFromStorage(); 
    updateBestScoreDisplay();
    
    document.getElementById('startGameBtn').onclick = () => showScreen('unit-screen');
    document.getElementById('showListBtn').onclick = () => { filterList('unit1', document.querySelector('#listTabs .tab-btn')); showScreen('list-screen'); };
    document.getElementById('showResultsBtn').onclick = () => { renderScoresList(); showScreen('results-screen'); };
    document.getElementById('clearAllScoresBtn').onclick = () => clearAllScores();
    document.getElementById('backToMenuFromResults').onclick = () => showScreen('menu-screen');
    document.getElementById('backToMenuFromInfo').onclick = () => showScreen('menu-screen');
    document.getElementById('infoButtonMenu').onclick = () => showScreen('info-screen');
    
    document.querySelectorAll('.unit-sel').forEach(btn => { 
        btn.onclick = () => { selectedUnit = btn.getAttribute('data-unit'); showScreen('mode-screen'); }; 
    });
    document.getElementById('mixAllBtn').onclick = () => { selectedUnit = 'all'; showScreen('mode-screen'); };
    document.getElementById('backToMenuFromUnit').onclick = () => showScreen('menu-screen');
    
    document.querySelectorAll('.mode-sel').forEach(btn => { 
        btn.onclick = () => { 
            if(selectedUnit) startGame(selectedUnit, btn.getAttribute('data-mode')); 
            else { showScreen('unit-screen'); alert("Ilki bölüm saýlaň!"); } 
        }; 
    });
    document.getElementById('backToMenuFromMode').onclick = () => showScreen('menu-screen');
    document.getElementById('exitGameBtn').onclick = () => { if(confirm("Oýundan çykmak isleýärsiňizmi?")) showScreen('menu-screen'); };
    
    document.getElementById('submitTypingBtn').onclick = () => { 
        if(gameMode === 'typing' && !isWaiting) { 
            let val = document.getElementById('word-input').value.trim().toLowerCase(); 
            let isCorrect = (val === correctAns.toLowerCase()); 
            if(!isCorrect) showCorrectAnswerMessage(correctAns); 
            handleResult(isCorrect); 
        } 
    };
    
    document.getElementById('word-input').addEventListener('keypress', (e) => { 
        if(e.key === 'Enter' && gameMode === 'typing' && !isWaiting) { 
            e.preventDefault(); 
            let val = e.target.value.trim().toLowerCase(); 
            let isCorrect = (val === correctAns.toLowerCase()); 
            if(!isCorrect) showCorrectAnswerMessage(correctAns); 
            handleResult(isCorrect); 
        } 
    });
    
    for(let i = 0; i < 3; i++){ 
        document.getElementById(`opt${i}`).onclick = function() { 
            if(gameMode === 'options' && !isWaiting) { 
                let isCorrect = (this.innerText === correctAns); 
                this.classList.add(isCorrect ? 'correct-btn' : 'wrong-btn'); 
                if(!isCorrect) showCorrectAnswerMessage(correctAns); 
                triggerFlash(isCorrect); 
                handleResult(isCorrect); 
            } 
        }; 
    }
    
    document.querySelectorAll('#listTabs .tab-btn').forEach(btn => { 
        btn.onclick = () => { filterList(btn.getAttribute('data-unit'), btn); }; 
    });
    document.getElementById('backToMenuFromList').onclick = () => showScreen('menu-screen');
    
    filterList('unit1', document.querySelector('#listTabs .tab-btn'));
});