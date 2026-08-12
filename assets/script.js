document.addEventListener('DOMContentLoaded',()=>{
  const style=document.createElement('style');
  style.textContent=`.menu-toggle{display:none;width:46px;height:46px;border:1px solid rgba(255,255,255,.2);border-radius:50%;background:transparent;padding:11px;cursor:pointer}.menu-toggle span{display:block;height:2px;background:#fff;margin:5px 0;transition:.2s}@media(max-width:1040px){.menu-toggle{display:block;margin-left:auto}.nav-wrap,body>header nav{position:relative}.nav-links,.links{display:none!important;position:absolute;left:0;right:0;top:100%;z-index:60;background:#081019;border-top:1px solid rgba(255,255,255,.08);padding:18px 4%;box-shadow:0 22px 50px rgba(0,0,0,.28);flex-direction:column;align-items:stretch;gap:0}.nav-open .nav-links,.nav-open .links{display:flex!important}.nav-links a,.links a{padding:14px 4px;border-bottom:1px solid rgba(255,255,255,.08)}.nav-links .btn,.links .btn{margin-top:12px;border-bottom:0}.nav-open .menu-toggle span:nth-child(1){transform:translateY(7px) rotate(45deg)}.nav-open .menu-toggle span:nth-child(2){opacity:0}.nav-open .menu-toggle span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}}`;
  document.head.appendChild(style);
  const nav=document.querySelector('.nav-wrap, body>header nav');
  const links=document.querySelector('.nav-links, .links');
  if(!nav||!links)return;
  const btn=document.createElement('button');
  btn.className='menu-toggle';
  btn.type='button';
  btn.setAttribute('aria-label','Open navigation');
  btn.setAttribute('aria-expanded','false');
  btn.innerHTML='<span></span><span></span><span></span>';
  nav.insertBefore(btn,links);
  btn.addEventListener('click',()=>{
    const open=nav.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded',String(open));
    btn.setAttribute('aria-label',open?'Close navigation':'Open navigation');
  });
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
    nav.classList.remove('nav-open');
    btn.setAttribute('aria-expanded','false');
  }));
});