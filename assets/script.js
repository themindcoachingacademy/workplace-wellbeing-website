document.addEventListener('DOMContentLoaded',()=>{
  const style=document.createElement('style');
  style.textContent=`
  .menu-toggle{display:none;width:46px;height:46px;border:1px solid rgba(255,255,255,.2);border-radius:50%;background:transparent;padding:11px;cursor:pointer}
  .menu-toggle span{display:block;height:2px;background:#fff;margin:5px 0;transition:.2s}
  @media(max-width:1040px){
    .menu-toggle{display:block;margin-left:auto;flex:0 0 auto}.nav-wrap,body>header nav{position:relative;min-height:76px}.brand{width:min(250px,68vw)}.brand img{height:54px}
    .nav-links,.links{display:none!important;position:absolute;left:0;right:0;top:100%;z-index:60;background:#081019;border-top:1px solid rgba(255,255,255,.08);padding:18px 4%;box-shadow:0 22px 50px rgba(0,0,0,.28);flex-direction:column;align-items:stretch;gap:0}
    .nav-open .nav-links,.nav-open .links{display:flex!important}.nav-links a,.links a{padding:14px 4px;border-bottom:1px solid rgba(255,255,255,.08)}.nav-links .btn,.links .btn{margin-top:12px;border-bottom:0}
    .nav-open .menu-toggle span:nth-child(1){transform:translateY(7px) rotate(45deg)}.nav-open .menu-toggle span:nth-child(2){opacity:0}.nav-open .menu-toggle span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
    .hero-grid,.pagehero-visual,.split,.photo-grid,.editorial-grid,.cta-panel{grid-template-columns:1fr!important}.hero-visual{min-height:500px}.hero-photo{inset:0 0 54px 0}.floating-card{width:min(390px,90%)}.cards-3,.grid3,.decision-table{grid-template-columns:repeat(2,1fr)!important}.stats-grid,.trust-grid,.credential-rail .container{grid-template-columns:repeat(2,1fr)!important}.footer-grid{grid-template-columns:1fr 1fr!important}
  }
  @media(max-width:680px){
    .topbar-inner,.top .container{display:none}.container{width:min(92%,620px)}.hero-home,.pagehero{padding:58px 0 64px}.hero-grid,.pagehero-visual,.split{gap:38px}.hero h1,.pagehero h1{font-size:clamp(2.65rem,13vw,4rem);line-height:1}.hero-lead,.lead,.dark-lead{font-size:1rem}.hero-visual{min-height:410px}.hero-photo{inset:0 0 44px 0;border-radius:20px}.floating-card{padding:18px 20px;left:12px;right:12px;width:auto}.section,main>section:not(.hero):not(.pagehero):not(.trust-strip):not(.credential-rail):not(.stats-band):not(.darksec):not(.alt),.section-dark,.darksec,.alt{padding:68px 0}.section-heading{margin-bottom:32px}.cards-3,.grid3,.grid2,.decision-table,.stats-grid,.trust-grid,.credential-rail .container,.proof-band,.footer-grid{grid-template-columns:1fr!important}.credential-rail span{border-right:0;border-bottom:1px solid var(--line)}.actions{align-items:stretch}.actions .btn{width:100%}.cta-panel,.cta{padding:34px 26px;border-radius:18px}.cta-panel .btn{width:100%}.image-feature,.pagehero-image{min-height:360px}.editorial-panel{padding:34px 26px}.service-card,.highlight-card,.card{padding:28px}.stats-intro{display:block}.stats-source{margin-top:18px}.footer-logo{width:min(280px,90%)}
  }`;
  document.head.appendChild(style);
  const nav=document.querySelector('.nav-wrap, body>header nav');
  const links=document.querySelector('.nav-links, .links');
  if(!nav||!links)return;
  const btn=document.createElement('button');
  btn.className='menu-toggle';btn.type='button';btn.setAttribute('aria-label','Open navigation');btn.setAttribute('aria-expanded','false');btn.innerHTML='<span></span><span></span><span></span>';nav.insertBefore(btn,links);
  btn.addEventListener('click',()=>{const open=nav.classList.toggle('nav-open');btn.setAttribute('aria-expanded',String(open));btn.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('nav-open');btn.setAttribute('aria-expanded','false')}));
});