document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.nav-wrap, body>header nav');
  const links=document.querySelector('.nav-links, .links');
  if(nav&&links){
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
  }
});