const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
$("#year") && ($("#year").textContent=new Date().getFullYear());
const theme=localStorage.getItem("jh-theme");if(theme)document.documentElement.dataset.theme=theme;
$("#theme")?.addEventListener("click",()=>{let n=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=n;localStorage.setItem("jh-theme",n)});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target)}}),{threshold:.1});$$(".reveal").forEach(e=>io.observe(e));
const prog=$("#progress");addEventListener("scroll",()=>{let m=document.documentElement.scrollHeight-innerHeight;prog&&(prog.style.width=(m?scrollY/m*100:0)+"%")},{passive:true});
function clock(){let e=$("#clock");if(e)e.textContent=new Date().toLocaleTimeString([],{hour12:false})}clock();setInterval(clock,1000);
const cmd=$("#cmd");function openCmd(){cmd?.classList.add("open");setTimeout(()=>$("#cmdInput")?.focus(),10)}function closeCmd(){cmd?.classList.remove("open")}
$("#cmdBtn")?.addEventListener("click",openCmd);cmd?.addEventListener("click",e=>{if(e.target===cmd)closeCmd()});
addEventListener("keydown",e=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();openCmd()}if(e.key==="Escape"){closeCmd();$("#recruiterTour")?.classList.remove("open")}});
$("#cmdInput")?.addEventListener("input",e=>{let q=e.target.value.toLowerCase();$$(".cmditems a").forEach(a=>a.hidden=!a.textContent.toLowerCase().includes(q))});
$("#recruiterBtn")?.addEventListener("click",()=>$("#recruiterTour").classList.add("open"));$("#tourClose")?.addEventListener("click",()=>$("#recruiterTour").classList.remove("open"));