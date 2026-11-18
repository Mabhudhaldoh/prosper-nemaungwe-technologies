import './style.css';

const icon = (name, cls='') => `<i data-lucide="${name}" class="${cls}"></i>`;

const services = [
  {icon:'globe', title:'Website Development', text:'Professional business websites, portfolios, school websites and online stores designed to help your organisation stand out.'},
  {icon:'smartphone', title:'Software & Mobile Apps', text:'Practical custom software and Android applications, including Flutter-based mobile solutions.'},
  {icon:'chart-no-axes-combined', title:'Business Management Systems', text:'Tailored tools for stock, sales, invoicing, quotations, customers and business reporting.'},
  {icon:'network', title:'IT Support & Networking', text:'Computer troubleshooting, maintenance, network setup, server support and reliable technical assistance.'},
  {icon:'file-spreadsheet', title:'Data & Office Solutions', text:'Excel data cleaning, spreadsheet automation, dashboards, document formatting and data processing.'},
  {icon:'palette', title:'Graphic Design & Branding', text:'Clean business profiles, flyers, posters, presentation layouts and digital brand materials.'}
];

const projects = [
  {tag:'Web platform', title:'School Results Portal', text:'A school-focused results platform concept for managing and presenting learner results through dedicated user experiences.', stack:'Web development · Database integration'},
  {tag:'Android application', title:'Invoice & Quotation App', text:'A completed Flutter application concept with invoice creation, quotations, PDF output, customer records and document history.', stack:'Flutter · Android · PDF'},
  {tag:'Business software', title:'PRFsupport Business Manager', text:'A business management solution concept focused on helping small businesses organise everyday sales and operations.', stack:'Business workflows · Software design'}
];

document.querySelector('#root').innerHTML = `
<header class="header">
  <div class="container nav-wrap">
    <a class="brand" href="#home" aria-label="Prosper Nemaungwe Technologies home">
      <span class="brand-mark">PN</span><span class="brand-name">PROSPER NEMAUNGWE <b>TECHNOLOGIES</b></span>
    </a>
    <button class="menu-toggle" aria-label="Toggle navigation" aria-expanded="false">${icon('menu')}</button>
    <nav class="nav">
      <a href="#home">Home</a><a href="#services">Services</a><a href="#work">Our Work</a><a href="#about">About</a><a href="#contact" class="nav-cta">Let's Talk ${icon('arrow-up-right')}</a>
    </nav>
  </div>
</header>

<main>
  <section class="hero" id="home">
    <div class="hero-glow"></div>
    <div class="container hero-grid">
      <div class="hero-copy">
        <div class="eyebrow"><span class="eyebrow-dot"></span> OPEN TO PROJECTS & COLLABORATIONS · ZIMBABWE</div>
        <h1>I design and build<br><span>useful digital products.</span></h1>
        <p class="hero-lead">I’m Prosper Nemaungwe, an IT professional and independent developer building websites, business software, mobile apps and practical technology solutions.</p>
        <div class="hero-actions">
          <a class="btn btn-gold" href="#contact">Work with me ${icon('arrow-up-right')}</a>
          <a class="btn btn-outline" href="#work">Selected work ${icon('arrow-down')}</a>
        </div>
        <div class="hero-proof"><span class="proof-icon">${icon('badge-check')}</span><span>One point of contact, from the first conversation to delivery.</span></div>
      </div>
      <div class="hero-visual">
        <div class="visual-orbit orbit-one"></div><div class="visual-orbit orbit-two"></div>
        <div class="visual-card main-card">
          <div class="window-top"><span></span><span></span><span></span><small>YOUR NEXT DIGITAL PROJECT</small></div>
          <div class="screen-content">
            <div class="screen-label">BUILD · IMPROVE · GROW</div>
            <div class="screen-title">Your ideas,<br><em>made useful.</em></div>
            <div class="screen-lines"><i></i><i></i><i></i></div>
            <div class="screen-bottom"><span>WEB</span><span>SOFTWARE</span><span>IT</span></div>
          </div>
        </div>
        <div class="float-chip chip-one">${icon('code-2')} <span>Custom development</span></div>
        <div class="float-chip chip-two">${icon('shield-check')} <span>Dependable support</span></div>
        <div class="visual-star star-one">✳</div><div class="visual-star star-two">✦</div>
      </div>
    </div>
    <div class="container hero-bottom"><span>01 / SELECTED WORK</span><div></div><span>A selection of things I have built and the services I offer</span></div>
  </section>

  <section class="section services-section" id="services">
    <div class="container">
      <div class="section-heading">
        <div><div class="eyebrow dark-eyebrow">OUR SERVICES</div><h2>One partner for your<br><span>technology needs.</span></h2></div>
        <p>From a first business website to a custom management system, we turn practical requirements into useful digital tools.</p>
      </div>
      <div class="services-grid">${services.map((s,i)=>`<article class="service-card"><div class="service-top"><span class="service-icon">${icon(s.icon)}</span><span class="service-number">0${i+1}</span></div><h3>${s.title}</h3><p>${s.text}</p><a href="#contact" class="text-link">Discuss this service ${icon('arrow-up-right')}</a></article>`).join('')}</div>
    </div>
  </section>

  <section class="section work-section" id="work">
    <div class="container">
      <div class="section-heading">
        <div><div class="eyebrow dark-eyebrow">SELECTED WORK</div><h2>Ideas turned into<br><span>digital experiences.</span></h2></div>
        <p>A selection of software and digital projects that demonstrate the types of problems we enjoy solving.</p>
      </div>
      <div class="projects-grid">${projects.map((p,i)=>`<article class="project-card"><div class="project-art art-${i+1}"><div class="mock-window"><div class="mock-bar"><i></i><i></i><i></i></div><div class="mock-body"><div class="mock-side"></div><div class="mock-main"><b></b><b></b><div class="mock-tiles"><i></i><i></i><i></i></div><div class="mock-chart"></div></div></div></div><span class="project-index">0${i+1}</span></div><div class="project-info"><span class="project-tag">${p.tag}</span><h3>${p.title}</h3><p>${p.text}</p><div class="project-stack">${p.stack}</div></div></article>`).join('')}</div>
      <p class="work-note">Project descriptions are summaries for portfolio presentation. Ask us for a walkthrough or further details.</p>
    </div>
  </section>

  <section class="about-section" id="about">
    <div class="container about-grid">
      <div class="about-visual"><div class="about-monogram">PN<span>.</span></div><div class="about-caption"><span>PERSONAL SERVICE</span><b>Technology with purpose.</b></div></div>
      <div class="about-copy"><div class="eyebrow">ABOUT THE BUSINESS</div><h2>Built around your<br><span>real-world goals.</span></h2><p>Prosper Nemaungwe Technologies is an independent digital solutions brand led by Prosper Nemaungwe, an IT professional with experience across software development, IT support, networking and digital productivity tools.</p><p>We believe technology should solve a clear problem, be straightforward to use and create lasting value for the people who rely on it.</p><div class="about-points"><div>${icon('check-circle-2')} Solutions shaped around your needs</div><div>${icon('check-circle-2')} Clear communication from start to finish</div><div>${icon('check-circle-2')} Support that considers the bigger picture</div></div><a class="text-link light-link" href="#contact">Work with us ${icon('arrow-up-right')}</a></div>
    </div>
  </section>

  <section class="process-section section">
    <div class="container">
      <div class="section-heading centered"><div><div class="eyebrow dark-eyebrow">HOW WE WORK</div><h2>A clear path from <span>idea to delivery.</span></h2></div><p>Good results start with understanding what you need and agreeing on what success looks like.</p></div>
      <div class="process-grid">
        <div class="process-step"><span>01</span><h3>Understand</h3><p>We discuss your goals, users, requirements and budget.</p></div>
        <div class="process-step"><span>02</span><h3>Plan</h3><p>We propose a practical scope, approach and timeline.</p></div>
        <div class="process-step"><span>03</span><h3>Build</h3><p>We develop, review and refine the agreed solution.</p></div>
        <div class="process-step"><span>04</span><h3>Deliver</h3><p>We hand over the work and discuss any ongoing support.</p></div>
      </div>
    </div>
  </section>

  <section class="contact-section" id="contact">
    <div class="container contact-grid">
      <div><div class="eyebrow">LET'S BUILD SOMETHING</div><h2>Have a project<br>in <span>mind?</span></h2><p>Tell us what you are trying to achieve. We'll get back to you to discuss the next steps.</p><div class="contact-detail">${icon('map-pin')} Harare, Zimbabwe · Working with clients remotely</div><div class="contact-detail">${icon('mail')} Email: <a href="mailto:hello@yourdomain.co.zw">Add your business email</a></div></div>
      <form class="contact-form" id="contact-form">
        <div class="form-heading"><b>Tell us about your project</b><span>Fields marked * are required.</span></div>
        <label>Your name *<input name="name" required placeholder="e.g. Tendai Moyo"></label>
        <label>Email address *<input name="email" type="email" required placeholder="you@example.com"></label>
        <label>Service you need<select name="service" required><option value="">Choose a service</option>${services.map(s=>`<option>${s.title}</option>`).join('')}<option>Something else</option></select></label>
        <label>Project details *<textarea name="message" rows="4" required placeholder="Briefly describe what you need..."></textarea></label>
        <button class="btn btn-gold submit-btn" type="submit">Prepare enquiry ${icon('arrow-up-right')}</button>
        <p class="form-hint" id="form-hint">Your email app will open with your enquiry ready to send. No information is stored on this website.</p>
      </form>
    </div>
  </section>
</main>
<footer class="footer"><div class="container footer-top"><a class="brand footer-brand" href="#home"><span class="brand-mark">PN</span><span class="brand-name">PROSPER NEMAUNGWE <b>TECHNOLOGIES</b></span></a><span>Technology that moves you forward.</span><a href="#home" class="back-top">Back to top ↑</a></div><div class="container footer-bottom"><span>© ${new Date().getFullYear()} Prosper Nemaungwe Technologies. All rights reserved.</span><span>Designed with purpose in Zimbabwe.</span></div></footer>
`;


// Portfolio-first information architecture, following the reference's editorial rhythm.
const main = document.querySelector('main');
const work = document.querySelector('#work');
const servicesSection = document.querySelector('#services');
const about = document.querySelector('#about');
const process = document.querySelector('.process-section');
const contact = document.querySelector('#contact');
main.insertBefore(work, servicesSection);
main.insertBefore(about, servicesSection);
main.insertBefore(process, servicesSection);
servicesSection.querySelector('.section-heading .eyebrow').textContent = '05 / SERVICES';
servicesSection.querySelector('h2').innerHTML = 'What I can help you <span>build.</span>';
servicesSection.querySelector('.section-heading > p').textContent = 'A practical range of development, technology and digital support services for businesses, schools and individuals.';
work.querySelector('.section-heading .eyebrow').textContent = '01 / SELECTED WORK';
work.querySelector('h2').innerHTML = 'A few things I have <span>made.</span>';
work.querySelector('.section-heading > p').textContent = 'Selected software and digital projects, presented with the technologies and thinking behind them.';
about.querySelector('.eyebrow').textContent = '03 / A LITTLE ABOUT ME';
about.querySelector('h2').innerHTML = 'One person. A broad <span>IT toolkit.</span>';
about.querySelectorAll('p')[0].textContent = 'I’m Prosper Nemaungwe, an IT professional with a background in information technology and hands-on experience spanning software development, IT support, networking and digital productivity tools.';
about.querySelectorAll('p')[1].textContent = 'I enjoy taking a problem from its first conversation through interface design, development, testing and deployment — with a focus on useful, maintainable solutions.';
process.querySelector('.eyebrow').textContent = '04 / THE METHOD';
process.querySelector('h2').innerHTML = 'From a blank page to a <span>working solution.</span>';
const toolbox = document.createElement('section');
toolbox.className = 'toolbox-section section';
toolbox.innerHTML = `<div class="container"><div class="section-heading"><div><div class="eyebrow dark-eyebrow">06 / TOOLBOX</div><h2>What I <span>work with.</span></h2></div><p>Tools and technologies I use across development, infrastructure and business productivity projects.</p></div><div class="toolbox-grid"><div><b>01 · Web & software</b><p>HTML · CSS · JavaScript · React · Node.js · REST APIs · Vercel</p></div><div><b>02 · Mobile</b><p>Flutter · Dart · Android · PDF generation · Local data</p></div><div><b>03 · Data & productivity</b><p>Microsoft Excel · Power BI · Data cleaning · Reporting</p></div><div><b>04 · IT & infrastructure</b><p>Networking · Windows · Linux · Servers · Troubleshooting</p></div><div><b>05 · Databases</b><p>MongoDB · SQL · SQLite · Data modelling</p></div><div><b>06 · Delivery</b><p>Git · GitHub · Testing · Deployment · Technical documentation</p></div></div></div>`;
main.insertBefore(toolbox, contact);

const menu = document.querySelector('.menu-toggle');
menu.addEventListener('click', () => {
  const nav = document.querySelector('.nav');
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.innerHTML = open ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
  if (window.lucide) window.lucide.createIcons();
});
document.querySelectorAll('.nav a').forEach(a => a.addEventListener('click', () => {
  document.querySelector('.nav').classList.remove('open');
  menu.setAttribute('aria-expanded','false');
  menu.innerHTML = '<i data-lucide="menu"></i>';
  if (window.lucide) window.lucide.createIcons();
}));
document.querySelector('#contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(e.currentTarget);
  const subject = encodeURIComponent(`Project enquiry: ${d.get('service')}`);
  const body = encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nService: ${d.get('service')}\n\nProject details:\n${d.get('message')}`);
  window.location.href = `mailto:hello@yourdomain.co.zw?subject=${subject}&body=${body}`;
  document.querySelector('#form-hint').textContent = 'Your email app should open now. Replace hello@yourdomain.co.zw with your real business email before publishing.';
});
import('lucide').then(({createIcons}) => createIcons());
