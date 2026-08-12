document.addEventListener('DOMContentLoaded',()=>{
  const style=document.createElement('style');
  style.textContent=`
  .menu-toggle{display:none;width:44px;height:44px;border:1px solid rgba(255,255,255,.22);border-radius:50%;background:transparent;padding:10px;cursor:pointer}
  .menu-toggle span{display:block;height:2px;background:#fff;margin:5px 0;transition:.2s}
  .hero-trust{display:none!important}.contact-direct{max-width:760px}.contact-direct .phone-alt{margin-top:16px;font-size:1rem;color:#52606b}.contact-direct .phone-alt a{font-weight:800;color:#765214;text-decoration:none}
  .change-method{background:#f8f5ef}.change-method .method-intro{max-width:850px;margin-bottom:38px}.method-note{margin-top:26px;font-size:.86rem;color:#6b7680;max-width:900px}
  @media(max-width:1040px){
    .menu-toggle{display:block;margin-left:auto;flex:0 0 auto}.nav-wrap,body>header nav{position:relative;min-height:74px}.brand{width:min(225px,62vw)}.brand img{height:50px}
    .nav-links,.links{display:none!important;position:absolute;left:-4%;right:-4%;top:100%;z-index:60;background:#081019;border-top:1px solid rgba(255,255,255,.08);padding:10px 5% 20px;box-shadow:0 22px 50px rgba(0,0,0,.28);flex-direction:column;align-items:stretch;gap:0}
    .nav-open .nav-links,.nav-open .links{display:flex!important}.nav-links a,.links a{padding:15px 4px;border-bottom:1px solid rgba(255,255,255,.08);font-size:.95rem!important}.nav-links .btn,.links .btn{margin-top:14px;border-bottom:0;min-height:48px}
    .nav-open .menu-toggle span:nth-child(1){transform:translateY(7px) rotate(45deg)}.nav-open .menu-toggle span:nth-child(2){opacity:0}.nav-open .menu-toggle span:nth-child(3){transform:translateY(-7px) rotate(-45deg)}
    .hero-grid,.pagehero-visual,.split,.photo-grid,.editorial-grid,.cta-panel{grid-template-columns:1fr!important}.hero-visual{min-height:500px}.hero-photo{inset:0 0 54px 0}.floating-card{width:min(390px,90%)}.cards-3,.grid3,.decision-table{grid-template-columns:repeat(2,1fr)!important}.stats-grid,.trust-grid,.credential-rail .container{grid-template-columns:repeat(2,1fr)!important}.footer-grid{grid-template-columns:1fr 1fr!important}
  }
  @media(max-width:680px){
    .topbar-inner,.top .container{display:none}.container{width:min(91%,620px)}.nav-wrap,body>header nav{min-height:68px}.brand{width:min(180px,56vw)}.brand img{height:44px}.menu-toggle{width:42px;height:42px}
    .hero-home,.pagehero{padding:46px 0 52px}.hero-grid,.pagehero-visual,.split{gap:30px}.hero h1,.pagehero h1{font-size:clamp(2.45rem,12vw,3.6rem);line-height:1.01}.hero-lead,.lead,.dark-lead{font-size:.98rem;line-height:1.7}.hero-visual{min-height:360px}.hero-photo{inset:0 0 38px 0;border-radius:18px}.floating-card{padding:16px 18px;left:10px;right:10px;width:auto}.floating-card strong{font-size:.98rem}.floating-card p{font-size:.82rem}
    .section,main>section:not(.hero):not(.pagehero):not(.trust-strip):not(.credential-rail):not(.stats-band):not(.darksec):not(.alt),.section-dark,.darksec,.alt{padding:54px 0}.stats-band{padding:46px 0}.section-heading{margin-bottom:28px}.cards-3,.grid3,.grid2,.decision-table,.stats-grid,.trust-grid,.credential-rail .container,.proof-band,.footer-grid{grid-template-columns:1fr!important}.credential-rail span{border-right:0;border-bottom:1px solid var(--line);padding:14px 16px}.actions{display:grid;align-items:stretch;gap:10px}.actions .btn{width:100%}.cta-panel,.cta{padding:28px 22px;border-radius:16px}.cta-panel .btn{width:100%}.image-feature,.pagehero-image{min-height:310px}.visual-note{left:14px;right:14px;bottom:14px;padding:14px 15px}.editorial-panel{padding:28px 22px}.service-card,.highlight-card,.card{padding:24px}.decision-table>div{padding:24px}.stat-card{padding:22px}.process-card{padding:8px 20px}.process-card>div{padding:17px 0}.employer-lens,.service-difference{padding:28px 22px}.outcome-item{padding:17px 18px}.stats-intro{display:block}.stats-source{margin-top:16px;text-align:left}.footer-logo{width:min(230px,82%)}h2{font-size:2.2rem}.stat-number{font-size:2.35rem}
  }`;
  document.head.appendChild(style);

  const page=(location.pathname.split('/').pop()||'index.html').toLowerCase();
  const isHome=page==='index.html'||page==='';
  const links=document.querySelector('.nav-links, .links');
  if(links){links.innerHTML=`<a href="organisations.html">Why It Matters</a><a href="${isHome?'#support-options':'index.html#support-options'}">Support Options</a><a href="about.html">About</a><a class="btn btn-gold" href="contact.html">Contact Steven</a>`;}

  const supportTable=document.querySelector('.decision-table');
  if(supportTable){const section=supportTable.closest('section');if(section)section.id='support-options';}

  document.querySelectorAll('.process-card>div').forEach(row=>{
    const number=row.querySelector('span');
    const text=row.querySelector('p');
    if(number&&number.textContent.trim()==='0'){
      number.textContent='4';
      if(text&&/routine disclosure/i.test(text.textContent)){
        text.innerHTML='<strong>Confidentiality boundary</strong><br>No routine disclosure of private session content. Individual conversations remain confidential within defined safeguarding, serious-risk and legal exceptions.';
      }
    }
  });

  const createMethodSection=(detailed=false)=>{
    const section=document.createElement('section');
    section.className='section change-method';
    section.innerHTML=detailed?`<div class="container"><div class="method-intro"><div class="eyebrow">How 1:1 support creates change</div><h2>We work on the pattern driving the problem — not only the conversation about it.</h2><p class="lead">Depending on the employee and the issue, Steven draws on NLP coaching and related change techniques to help the person understand what is happening internally, interrupt unhelpful automatic responses and practise more useful alternatives for real workplace situations.</p></div><div class="benefit-grid"><div class="benefit-card"><div class="benefit-icon">01</div><h3>Map the thought-response pattern</h3><p>Identify the trigger, internal thoughts, emotional response and behaviour that keep repeating, so the employee can see where change is possible.</p></div><div class="benefit-card"><div class="benefit-icon">02</div><h3>Change limiting beliefs</h3><p>Challenge rigid conclusions such as “I cannot cope”, “I always get this wrong” or “I am not confident enough” when they are shaping behaviour and performance.</p></div><div class="benefit-card"><div class="benefit-icon">03</div><h3>Use anchoring and resource states</h3><p>Help the employee deliberately reconnect with calmer, more confident or focused internal states when they need them under pressure.</p></div><div class="benefit-card"><div class="benefit-icon">04</div><h3>Work with triggers</h3><p>Where appropriate, reduce the intensity of automatic emotional reactions linked to particular situations, conversations or memories.</p></div><div class="benefit-card"><div class="benefit-icon">05</div><h3>Reframe meaning</h3><p>Explore alternative interpretations and perspectives when the meaning attached to an event is driving anxiety, overwhelm or unhelpful behaviour.</p></div><div class="benefit-card"><div class="benefit-icon">06</div><h3>Future-rehearse the new response</h3><p>Mentally and practically rehearse handling meetings, deadlines, difficult conversations or other known pressure points in a more useful way.</p></div></div><p class="method-note">The approach is personalised rather than protocol-led. It is coaching and therapeutic change work within professional scope, and does not replace medical, psychiatric or other clinical care where that is indicated.</p></div>`:`<div class="container"><div class="section-heading"><div class="eyebrow">What happens inside 1:1 support</div><h2>More than talking: identify the pattern, change the response, rehearse what works better.</h2><p class="lead">The work can include changing limiting beliefs, reframing unhelpful meanings, anchoring calmer or more confident resource states, working with emotional triggers and building new thought-response patterns for situations the employee actually faces at work.</p></div><div class="cards-3"><article class="service-card"><div class="card-number">01</div><h3>Identify the pattern</h3><p>Map what triggers the difficulty and how thoughts, emotions and automatic responses interact.</p></article><article class="service-card"><div class="card-number">02</div><h3>Change the response</h3><p>Use tailored NLP coaching techniques to challenge limiting beliefs, reframe meaning and create more useful internal states.</p></article><article class="service-card"><div class="card-number">03</div><h3>Apply it at work</h3><p>Future-rehearse the new response so the employee can use it in the situations that previously triggered the problem.</p></article></div><p style="margin-top:26px"><a class="text-link" href="employee-support.html">See how 1:1 change work is delivered →</a></p></div>`;
    return section;
  };

  if(isHome){
    const heroActions=document.querySelector('.hero-home .actions');
    if(heroActions)heroActions.innerHTML='<a class="btn btn-gold" href="#support-options">See How We Help</a>';
    const standardsBtn=document.querySelector('.section-dark .btn[href="standards.html"]');
    if(standardsBtn){standardsBtn.className='text-link';standardsBtn.textContent='Professional standards →';}
    const nhsBtn=document.querySelector('#nhs-evidence .btn');
    if(nhsBtn){nhsBtn.className='text-link';nhsBtn.textContent='See the full employer evidence →';}
    if(supportTable){const supportSection=supportTable.closest('section');if(supportSection&&!document.querySelector('.change-method'))supportSection.insertAdjacentElement('afterend',createMethodSection(false));}
  }

  if(page==='employee-support.html'){
    const darkAccess=[...document.querySelectorAll('main section')].find(s=>/How access works/i.test(s.textContent));
    if(darkAccess&&!document.querySelector('.change-method'))darkAccess.insertAdjacentElement('beforebegin',createMethodSection(true));
  }

  if(page==='organisations.html'){
    const heroActions=document.querySelector('.pagehero .actions');
    if(heroActions)heroActions.innerHTML='<a class="btn btn-gold" href="#business-impact">See the Employer Impact</a>';
  }

  if(page==='contact.html'){
    const heroActions=document.querySelector('.pagehero .actions');
    if(heroActions)heroActions.innerHTML='<a class="btn btn-gold" href="#contact-steven">Contact Steven</a>';
    const firstSection=document.querySelector('main .section');
    if(firstSection){
      firstSection.id='contact-steven';
      const heading=firstSection.querySelector('.section-heading');
      if(heading)heading.innerHTML='<div class="eyebrow">Contact Steven directly</div><h2>Start with a short email.</h2><p class="lead">You do not need a formal specification. A few lines about the workforce problem, approximate size and what you want to improve are enough to begin.</p>';
      const grid=firstSection.querySelector('.grid2');
      if(grid){grid.className='contact-direct';grid.innerHTML='<article class="service-card"><div class="card-number">01</div><h3>Email Steven</h3><p>Send a short outline to <strong>the.mind.coaching.academy@gmail.com</strong>. I can then come back to you with the most useful next step.</p><a class="btn btn-gold" href="mailto:the.mind.coaching.academy@gmail.com?subject=Workplace%20Wellbeing%20Employer%20Enquiry">Start an Employer Enquiry</a><p class="phone-alt">Prefer to speak? Call <a href="tel:+447368348793">07368 348793</a>.</p></article>';}
    }
    const finalActions=document.querySelector('.cta-panel .actions');
    if(finalActions)finalActions.innerHTML='<a class="btn btn-gold" href="mailto:the.mind.coaching.academy@gmail.com?subject=Workplace%20Wellbeing%20Employer%20Enquiry">Start an Employer Enquiry</a>';
  }

  const footerEmployer=document.querySelector('.footer-grid>div:nth-child(3)');
  if(footerEmployer)footerEmployer.innerHTML='<strong>Start Here</strong><a href="organisations.html">Why It Matters</a><a href="index.html#support-options">Support Options</a><a href="contact.html">Contact Steven</a>';

  const nav=document.querySelector('.nav-wrap, body>header nav');
  if(!nav||!links)return;
  const btn=document.createElement('button');
  btn.className='menu-toggle';btn.type='button';btn.setAttribute('aria-label','Open navigation');btn.setAttribute('aria-expanded','false');btn.innerHTML='<span></span><span></span><span></span>';nav.insertBefore(btn,links);
  btn.addEventListener('click',()=>{const open=nav.classList.toggle('nav-open');btn.setAttribute('aria-expanded',String(open));btn.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('nav-open');btn.setAttribute('aria-expanded','false')}));
});