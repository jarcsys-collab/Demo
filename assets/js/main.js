// Edit company identity here. No external services or credentials are required.
const siteConfig = { companyName: 'MEDITECH' };
document.querySelectorAll('[data-brand]').forEach(el => el.textContent = siteConfig.companyName);
document.title = `${siteConfig.companyName} | Technology for better care`;
document.querySelector('#year').textContent = new Date().getFullYear();
const solutions = [
 ['✚','Medical Equipment','Purposeful equipment for everyday clinical practice.','Explore equipment needs, intended applications and the support your team requires. Our sample range illustrates potential categories; individual specifications must be confirmed.'],
 ['⌕','Diagnostic Solutions','Support a clearer picture at every step of diagnosis.','Discuss diagnostic workflows, equipment compatibility and training requirements with your future product team.'],
 ['♡','Patient Care','Thoughtful tools that keep the patient at the center.','Explore bedside essentials and monitoring categories with a focus on usability and the needs of care teams.'],
 ['▦','Hospital Solutions','Bring people, equipment and operations together.','Plan equipment deployment and coordinated workflows around your organization’s priorities.'],
 ['⌁','Healthcare Technology','Connect clinical workflows with practical innovation.','Explore monitoring, integration and information workflows. Compatibility and implementation are assessed per project.'],
 ['⊕','Medical Supplies','The everyday essentials behind exceptional care.','Discuss clinical supplies, accessory requirements and purchasing needs. Product availability is not represented by this demonstration.']
];
const dialog = document.querySelector('#details');
function showDetails(title, copy, contact = true) { document.querySelector('#dialog-title').textContent=title; document.querySelector('#dialog-copy').textContent=copy; document.querySelector('#dialog-contact').hidden=!contact; dialog.showModal(); }
document.querySelector('#solution-grid').innerHTML=solutions.map((s,i)=>`<article class="solution"><span class="icon" aria-hidden="true">${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p><button class="learn" data-solution="${i}">Learn more <span aria-hidden="true">↗</span></button></article>`).join('');
const illustrations = {
 monitor:'<rect x="22" y="20" width="112" height="78" rx="7"/><path d="M33 61h18l10-17 15 36 13-25 9 6h24M68 99v17m20-17v17m-38 3h58"/><circle cx="125" cy="89" r="2"/>',
 scope:'<path d="M40 20v42a30 30 0 0 0 60 0V20M40 20h10m50 0H90M70 93v10a24 24 0 0 0 48 0V84"/><circle cx="118" cy="72" r="14"/><circle cx="118" cy="72" r="7"/>',
 supplies:'<rect x="34" y="47" width="43" height="69" rx="7"/><path d="M42 47V33h27v14M34 73h43M47 90h17m-9-8v16"/><rect x="94" y="39" width="21" height="64" rx="3"/><path d="M104 19v20m-16 0h32m-16 64v22M99 53h10m-10 13h10m-10 13h10"/>',
 device:'<rect x="38" y="26" width="81" height="96" rx="12"/><rect x="50" y="39" width="57" height="34" rx="3"/><path d="M57 57h11l5-9 8 17 7-8h12"/><circle cx="79" cy="96" r="9"/>',
 accessory:'<path d="M45 72V53a34 34 0 0 1 68 0v19"/><rect x="33" y="66" width="23" height="42" rx="8"/><rect x="102" y="66" width="23" height="42" rx="8"/><path d="M114 109v5H85"/><rect x="71" y="109" width="18" height="10" rx="5"/>',
 pharma:'<rect x="36" y="41" width="53" height="79" rx="8"/><path d="M43 41V28h39v13M36 69h53M51 87h23m-12-12v24"/><path d="M112 72a12 12 0 0 1 17 17l-23 23a12 12 0 0 1-17-17zM101 84l17 17"/>'
};
// Replace this array with API data later; renderProducts remains the presentation layer.
const products = [
 {name:'Clinical stethoscope',category:'diagnostics',label:'DIAGNOSTIC EQUIPMENT',art:'scope',description:'An everyday examination essential.'},
 {name:'Patient monitoring system',category:'monitoring',label:'PATIENT MONITORING',art:'monitor',description:'A connected view of bedside observations.'},
 {name:'Clinical supply essentials',category:'essentials',label:'CLINICAL SUPPLIES',art:'supplies',description:'Supplies for everyday care environments.'},
 {name:'Portable diagnostic device',category:'diagnostics',label:'MEDICAL DEVICES',art:'device',description:'Explore tools for flexible clinical workflows.'},
 {name:'Healthcare accessories',category:'essentials',label:'HEALTHCARE ACCESSORIES',art:'accessory',description:'Supporting the equipment your team uses.'},
 {name:'Pharmaceutical solutions',category:'essentials',label:'PHARMACEUTICAL SOLUTIONS',art:'pharma',description:'Explore storage and supply requirements.'}
];
function renderProducts(filter='all'){document.querySelector('#product-grid').innerHTML=products.map((p,i)=>({...p,id:i})).filter(p=>filter==='all'||p.category===filter).map(p=>`<article class="product"><div class="product-art"><small>${p.label}</small><svg viewBox="0 0 160 145" aria-hidden="true">${illustrations[p.art]}</svg></div><div class="product-body"><h3>${p.name}</h3><p>${p.description}</p><button class="learn" data-product="${p.id}">Explore product <span aria-hidden="true">↗</span></button></div></article>`).join('');}
renderProducts();
const benefits=[['✓','Reliable medical solutions','A practical focus on fit, usability and day-to-day needs.'],['◇','Quality standards','Evaluate products and documentation against your requirements.'],['⌁','Modern healthcare technology','Explore tools that work with evolving care environments.'],['☏','Professional support','Plan training and technical assistance around your team.'],['↗','Efficient delivery','Coordinate supply and deployment with your project schedule.'],['♡','Customer-focused service','Start with your needs and build the solution around them.']];
document.querySelector('#benefit-grid').innerHTML=benefits.map(b=>`<article><span class="icon" aria-hidden="true">${b[0]}</span><h3>${b[1]}</h3><p>${b[2]}</p></article>`).join('');
const services=[['✚','Medical Equipment Supply','Match equipment categories to clinical requirements.'],['↗','Installation & Deployment','Plan a considered transition from delivery to use.'],['☏','Technical Support','Get the right questions to the right specialists.'],['⚙','Maintenance','Plan ongoing care for your equipment.'],['♡','Healthcare Consultation','Define requirements around your organization.'],['⌁','Technology Integration','Bring systems and workflows closer together.']];
document.querySelector('#service-grid').innerHTML=services.map(s=>`<article><span class="icon" aria-hidden="true">${s[0]}</span><div><h3>${s[1]}</h3><p>${s[2]}</p></div></article>`).join('');
const information={careers:['Careers','There are no vacancies listed on this concept website. Recruitment information can be added when the company is ready.'],news:['Company news','This concept has no published company announcements. This area is ready for future updates.'],documentation:['Product documentation','The products shown are illustrative. Verified product manuals and specifications should be added before commercial use.'],privacy:['Privacy notice','This demonstration does not send or store form entries and uses no analytics or tracking cookies. A hosting provider may retain routine access logs. Update this notice to reflect actual company practices before launch.'],terms:['Terms of use','This website is a frontend demonstration. Products, services and company content are illustrative, not an offer for sale or medical advice. Confirm specifications, availability and applicable terms before purchase or use.'],social:['Social channels','Official social profiles have not been provided. Add verified company profile links before launch.']};
document.addEventListener('click',event=>{const s=event.target.closest('[data-solution]');if(s){const item=solutions[Number(s.dataset.solution)];showDetails(item[1],item[3]);}const p=event.target.closest('[data-product]');if(p){const item=products[Number(p.dataset.product)];showDetails(item.name,`${item.description} This is an illustrative product, not a verified listing. Contact your supplier to confirm specifications, certifications, compatibility and availability.`);}const info=event.target.closest('[data-info]');if(info)showDetails(...information[info.dataset.info],false);});
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});renderProducts(button.dataset.filter);}));
document.querySelector('.close').addEventListener('click',()=>dialog.close());
document.querySelector('#dialog-contact').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');}
menu.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();menu.focus();}});
window.addEventListener('resize',()=>{if(window.innerWidth>900)closeMenu();});
window.addEventListener('scroll',()=>document.querySelector('header').classList.toggle('scrolled',window.scrollY>20),{passive:true});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){nav.querySelectorAll('a').forEach(a=>{const active=a.hash===`#${entry.target.id}`;a.classList.toggle('active',active);if(active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}});},{rootMargin:'-15% 0px -55% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>observer.observe(s));
const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('reveal');reveal.unobserve(e.target);}}),{threshold:.12});
document.querySelectorAll('.solution,.product,.tech-grid article').forEach(el=>reveal.observe(el));
async function submitContactForm(data){ // Connect a public HTTPS form endpoint here; never place private keys in this file.
 return {delivered:false,message:'This demonstration form requires a backend or form service before messages can be delivered. Your message has not been sent or saved.'};
}
document.querySelector('#contact-form').addEventListener('submit',async event=>{event.preventDefault();const form=event.currentTarget;if(!form.reportValidity())return;const data=Object.fromEntries(new FormData(form));if(!data.name.trim()||!data.message.trim()){document.querySelector('#form-status').textContent='Please enter your name and a message containing more than spaces.';return;}const result=await submitContactForm(data);document.querySelector('#form-status').textContent=result.message;});
