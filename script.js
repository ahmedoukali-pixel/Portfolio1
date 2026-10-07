@property --a{syntax:"<angle>";inherits:false;initial-value:0deg}
:root{--bg:#060b09;--panel:#0c1613;--line:rgb(214 180 110/.2);--text:#f0ece2;--mute:#a4b3a9;--gold:#d6b46e;--gold2:#f3e0ae;--trace:#6fe0ae;--dry:#c98a3c;--wet:#46a8cf;color-scheme:dark}
*{box-sizing:border-box;margin:0}
html{scroll-behavior:smooth;scroll-padding-top:80px}
body{background:var(--bg);color:var(--text);font:400 1.03rem/1.7 "IBM Plex Sans",system-ui,sans-serif;overflow-x:hidden}
body::before{content:"";position:fixed;inset:0;z-index:-1;background:radial-gradient(900px 500px at 90% -5%,rgb(111 224 174/.1),transparent 60%),radial-gradient(700px 500px at 0 40%,rgb(214 180 110/.07),transparent 60%)}
.orb{position:fixed;z-index:-1;border-radius:50%;filter:blur(90px);opacity:.25;animation:fl 18s ease-in-out infinite alternate}
.o1{width:380px;height:380px;background:var(--gold);top:20%;left:-120px}.o2{width:320px;height:320px;background:var(--trace);bottom:5%;right:-100px;animation-delay:-8s}
@keyframes fl{to{transform:translate(60px,-80px)}}
h1,h2,h3,.brand{font-family:"Bricolage Grotesque",system-ui,sans-serif;line-height:1.08;text-wrap:balance}
p{text-wrap:pretty}a{color:var(--trace)}
:focus-visible{outline:2px solid var(--gold);outline-offset:3px}
.wrap{max-width:1120px;margin:0 auto;padding:110px 24px 0;position:relative}
h2{font-size:clamp(1.8rem,3.8vw,2.7rem);font-weight:800;margin-bottom:34px;letter-spacing:-.02em}
h2::after{content:"";display:block;width:72px;height:2px;margin-top:16px;background:linear-gradient(90deg,var(--gold),transparent)}
h3{font-size:1.15rem;font-weight:700}
p+p{margin-top:14px}
.progress{position:fixed;inset:0 0 auto;height:2px;z-index:10;background:linear-gradient(90deg,var(--gold),var(--trace));transform-origin:0 50%;transform:scaleX(0)}
@supports(animation-timeline:scroll()){.progress{animation:grow linear both;animation-timeline:scroll(root)}@keyframes grow{to{transform:scaleX(1)}}}
.top{position:fixed;inset:0 0 auto;z-index:9;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px 24px;background:rgb(6 11 9/.72);backdrop-filter:blur(16px) saturate(1.4);border-bottom:1px solid var(--line)}
.brand{display:flex;align-items:center;gap:10px;color:var(--text);text-decoration:none;font-weight:800}
.brand img{border-radius:5px;width:auto}
nav{display:flex;gap:22px}nav a{color:var(--mute);text-decoration:none;font-size:.93rem;transition:color .2s}nav a:hover{color:var(--gold2)}
.menu{display:none;background:none;border:1px solid var(--line);color:var(--text);padding:6px 14px;border-radius:99px;font:inherit}
.hero{display:grid;grid-template-columns:1.15fr .85fr;gap:56px;align-items:center;min-height:100svh;padding-top:120px}
.traces{position:absolute;inset:0;width:100%;height:100%;z-index:-1;fill:none;stroke:var(--gold);stroke-width:1.2;opacity:.3}
.traces path{stroke-dasharray:1;stroke-dashoffset:1;animation:draw 2.8s .2s cubic-bezier(.6,0,.2,1) forwards}
.traces circle{fill:var(--gold);stroke:none;opacity:0;animation:pop .4s 2.6s forwards}
@keyframes draw{to{stroke-dashoffset:0}}@keyframes pop{to{opacity:1}}
.kicker{display:flex;align-items:center;gap:14px;color:var(--gold);font-weight:500;margin-bottom:20px}
.av{width:48px;height:48px;border-radius:50%;object-fit:cover;border:1.5px solid var(--gold);padding:2px}
h1{font-size:clamp(2.5rem,5.8vw,4.5rem);font-weight:800;letter-spacing:-.03em;background:linear-gradient(180deg,#fff 20%,var(--gold2));-webkit-background-clip:text;background-clip:text;color:transparent}
.lead{color:var(--mute);margin:24px 0 30px;max-width:56ch;font-size:1.08rem}
.cta{display:flex;flex-wrap:wrap;gap:12px}
.btn{display:inline-block;padding:13px 26px;border-radius:99px;background:linear-gradient(135deg,var(--gold2),var(--gold));color:#150f03;font-weight:500;text-decoration:none;transition:transform .25s,box-shadow .25s}
.btn:hover{transform:translateY(-2px);box-shadow:0 10px 30px rgb(214 180 110/.3)}
.btn.ghost{background:none;color:var(--text);border:1px solid var(--line)}.btn.ghost:hover{border-color:var(--gold);box-shadow:none}
.social{display:flex;gap:12px;margin-top:30px}
.social a,.cgrid a[data-i]::before{--s:1}
.social a{width:44px;height:44px;border-radius:50%;border:1px solid var(--line);display:grid;place-items:center;transition:border-color .2s,transform .2s,background .2s}
.social a:hover{border-color:var(--gold);transform:translateY(-3px);background:rgb(214 180 110/.08)}
.social img{width:20px;height:20px}
.ico{width:1.05em;height:1.05em;filter:invert(1);opacity:.85;flex:none}
.tilt{transform:perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg));transition:transform .25s ease-out}
.probe{background:linear-gradient(160deg,rgb(214 180 110/.08),transparent 40%),rgb(12 22 19/.8);backdrop-filter:blur(8px);border:1px solid var(--line);border-radius:22px;padding:24px;box-shadow:0 40px 80px rgb(0 0 0/.5),inset 0 1px 0 rgb(255 255 255/.06)}
.layers{display:grid;gap:8px}
.layer{display:grid;grid-template-columns:54px 1fr 46px;align-items:center;gap:10px;font-size:.85rem;color:var(--mute)}
.bar{height:26px;border-radius:6px;background:#050a08;overflow:hidden;border:1px solid var(--line)}
.bar i{display:block;height:100%;width:50%;background:linear-gradient(90deg,var(--dry),var(--wet));transition:width 1.4s cubic-bezier(.3,.7,.2,1)}
.layer.root .bar{border-color:var(--gold)}.layer b{color:var(--text);text-align:right;font-weight:500}
.probe figcaption{margin-top:18px;font:800 1.08rem "Bricolage Grotesque",sans-serif;color:var(--trace);min-height:2.4em}
.probe small{display:block;margin-top:6px;color:var(--mute);font-size:.78rem}
.marquee{overflow:hidden;margin-top:70px;border-block:1px solid var(--line);mask:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.marquee>div{display:flex;gap:44px;width:max-content;padding:16px 0;animation:mq 60s linear infinite}
.marquee span{display:flex;align-items:center;gap:10px;font:700 1.05rem "Bricolage Grotesque",sans-serif;color:var(--mute);white-space:nowrap}
@keyframes mq{to{transform:translateX(-50%)}}
.split{display:grid;grid-template-columns:1.25fr .75fr;gap:52px;align-items:start}
.me{width:100%;height:auto;border-radius:6px 56px 6px 56px;border:1px solid var(--gold);box-shadow:-16px 16px 0 -2px var(--bg),-16px 16px 0 -1px var(--gold)}
.pills{display:flex;flex-wrap:wrap;gap:8px;margin-top:34px}
.facts{list-style:none;padding:0;margin-top:26px;display:grid;gap:12px}
.facts li{border-left:2px solid var(--gold);padding:2px 0 2px 16px;color:var(--mute)}
.facts b{color:var(--gold2);font:800 1.5rem "Bricolage Grotesque",sans-serif;margin-right:8px}
.meta{display:grid;grid-template-columns:auto 1fr;gap:6px 20px;margin-top:26px;color:var(--mute);font-size:.95rem}.meta dt{color:var(--gold)}.meta dd{margin:0}
.chipset{display:flex;flex-wrap:wrap;gap:8px;margin-top:6px}
.chipset span,.pills span{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--line);background:rgb(255 255 255/.03);border-radius:99px;padding:6px 14px;font-size:.88rem;color:var(--text);transition:border-color .2s,transform .2s,background .2s}
.chipset span:hover,.pills span:hover{border-color:var(--gold);transform:translateY(-2px);background:rgb(214 180 110/.08)}
.feature{display:grid;grid-template-columns:1.3fr .7fr;gap:40px;border-radius:22px;padding:38px;border:1.5px solid transparent;background:linear-gradient(var(--panel),var(--panel)) padding-box,conic-gradient(from var(--a),var(--line),var(--gold),var(--trace),var(--line)) border-box;animation:spin 10s linear infinite}
@keyframes spin{to{--a:360deg}}
.ticks{list-style:none;padding:0;margin:16px 0}.ticks li{position:relative;padding:7px 0 7px 28px}
.ticks li::before{content:"";position:absolute;left:0;top:18px;width:14px;height:2px;background:var(--gold)}
.note{color:var(--mute);font-size:.9rem;margin-top:12px}
.flow{list-style:none;padding:0;counter-reset:s;align-content:start}
.flow li{position:relative;padding:10px 0 10px 38px;counter-increment:s}
.flow li::before{content:counter(s);position:absolute;left:0;top:8px;width:26px;height:26px;border-radius:50%;background:var(--bg);border:1px solid var(--trace);color:var(--trace);font-size:.75rem;display:grid;place-items:center;z-index:1}
.flow li:not(:last-child)::after{content:"";position:absolute;left:12.5px;top:36px;bottom:-10px;width:1px;background:var(--line)}
.road{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:20px}
.road>div{border:1px solid var(--line);border-radius:18px;padding:24px;background:var(--panel)}
.road p{color:var(--mute);margin:8px 0 16px}.road>div:first-child p{margin-bottom:0}
.plat{background:linear-gradient(135deg,rgb(214 180 110/.12),var(--panel))!important}
.btn[aria-disabled=true]{opacity:.55;pointer-events:none;filter:grayscale(.5)}
.brandrow{display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin:-10px 0 26px}.brandrow p{color:var(--mute)}
.lg{background:#fff;border-radius:8px;padding:4px 8px;object-fit:contain;width:auto}
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.card{--x:50%;--y:0%;background:radial-gradient(280px circle at var(--x) var(--y),rgb(214 180 110/.14),transparent 70%),var(--panel);border:1px solid var(--line);border-radius:8px 26px 8px 26px;padding:26px;display:flex;flex-direction:column;gap:12px;transition:border-color .25s,transform .25s}
.card:hover{border-color:var(--gold);transform:translateY(-4px)}
.card>p{color:var(--mute);margin:0}.card a{margin-top:auto;font-weight:500;color:var(--gold2)}.card.wide{grid-column:1/-1}
.shots{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:8px}
.shots button{padding:0;border:1px solid var(--line);border-radius:10px;background:none;cursor:zoom-in;overflow:hidden}
.shots img{display:block;width:100%;transition:transform .5s}.shots button:hover img{transform:scale(1.04)}
dialog{border:1px solid var(--gold);border-radius:14px;background:var(--panel);padding:12px;max-width:min(1000px,94vw);color:var(--text)}
dialog::backdrop{background:rgb(0 0 0/.8);backdrop-filter:blur(5px)}dialog img{display:block;max-width:100%;max-height:78vh;margin:auto}
dialog button{margin-top:10px;background:none;border:1px solid var(--line);color:var(--text);padding:6px 16px;border-radius:99px;font:inherit;cursor:pointer}
.time{list-style:none;padding:0 0 0 24px;border-left:1px solid var(--line)}
.time li{position:relative;padding:0 0 30px 24px}
.time li::before{content:"";position:absolute;left:-30px;top:7px;width:11px;height:11px;border-radius:50%;background:var(--bg);border:2px solid var(--gold)}
.time li:first-child::before{background:var(--gold);animation:ping 2.4s infinite}
@keyframes ping{0%{box-shadow:0 0 0 0 var(--gold)}70%,100%{box-shadow:0 0 0 12px transparent}}
time{font-size:.85rem;color:var(--gold)}.time h3{display:flex;align-items:center;gap:8px;margin-top:2px}.time p{color:var(--mute);margin-top:4px}
.comp{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.comp article{border-top:2px solid var(--gold);background:linear-gradient(var(--panel),transparent);padding:20px 20px 24px;border-radius:0 0 16px 16px}
.comp p{color:var(--mute);margin:6px 0 10px}.comp ul{padding-left:18px;color:var(--mute);font-size:.93rem}.comp li::marker{color:var(--trace)}
.skills{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.skills>div{border:1px solid var(--line);border-radius:18px;padding:22px;background:var(--panel)}
.skills h3{margin-bottom:10px;color:var(--gold2)}
.sub{margin:56px 0 18px;font-size:1.5rem}
.certs{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
.certs div{border:1px solid var(--line);border-radius:6px 18px 6px 18px;padding:18px 20px;transition:border-color .25s,transform .25s}
.certs div:hover{border-color:var(--gold);transform:translateY(-3px)}
.certs h3{font-size:1rem;margin-bottom:4px}.certs p{color:var(--mute);font-size:.88rem}
.contact{padding-bottom:40px}.contact>p{color:var(--mute);max-width:56ch;margin-bottom:26px}
.cgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
.cgrid a{display:grid;grid-template-columns:auto 1fr;column-gap:12px;align-items:center;border:1px solid var(--line);border-radius:14px;padding:16px;color:var(--text);text-decoration:none;overflow-wrap:anywhere;background:var(--panel);transition:border-color .2s,transform .2s}
.cgrid a:hover{border-color:var(--gold);transform:translateY(-3px)}
.cgrid .ico{grid-row:span 2;width:22px;height:22px}.cgrid small{color:var(--gold);font-size:.8rem}
footer{padding-top:70px;padding-bottom:40px;color:var(--mute);font-size:.88rem}
.rv{opacity:0;transform:translateY(14px);transition:opacity .6s,transform .6s}.rv.in{opacity:1;transform:none}
@media(max-width:900px){.hero,.split,.feature,.road{grid-template-columns:1fr}.hero{min-height:0}.grid,.skills,.comp,.certs,.cgrid{grid-template-columns:1fr 1fr}.menu{display:block}.me{max-width:320px}
nav{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;gap:0;background:var(--bg);border-bottom:1px solid var(--line)}nav.open{display:flex}nav a{padding:14px 24px}}
@media(max-width:600px){.grid,.skills,.comp,.certs,.cgrid,.shots{grid-template-columns:1fr}.feature{padding:24px}}
@media(prefers-reduced-motion:reduce){*,*::before{animation:none!important;transition:none!important;scroll-behavior:auto!important}.traces path{stroke-dashoffset:0}.traces circle,.rv{opacity:1;transform:none}}
