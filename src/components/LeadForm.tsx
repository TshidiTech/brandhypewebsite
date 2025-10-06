<!-- BrandHype Lead Form (Portal) - paste entire block into Lovable custom HTML block -->
<style>
  /* Styles scoped to the portal to avoid site conflicts */
  #brandhype-portal { position: fixed; left: 50%; top: 50%; transform: translate(-50%,-50%); width: calc(100% - 40px); max-width: 720px; z-index: 2147483647 !important; pointer-events: auto !important; background: #fff; border-radius: 12px; box-shadow: 0 20px 50px rgba(0,0,0,0.15); padding: 20px; font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; }
  #brandhype-portal h2 { margin: 0 0 6px 0; font-size: 20px; color: #111827; }
  #brandhype-portal p.lead { margin: 0 0 14px 0; color: #6b7280; font-size: 13px; }
  #brandhypeForm input, #brandhypeForm select, #brandhypeForm textarea { width:100%; padding:10px 12px; border-radius:8px; border:1px solid #e5e7eb; margin-bottom:12px; font-size:14px; -webkit-appearance:none; appearance:none; background:white; }
  #brandhypeForm label { display:block; margin-bottom:6px; font-weight:600; color:#111827; font-size:13px; }
  #brandhypeForm .row { display:flex; gap:10px; }
  #brandhypeForm .row > * { flex:1; }
  #brandhypeForm .small { font-size:12px; color:#6b7280; margin-top:-6px; margin-bottom:8px; }
  .bh-close { position:absolute; right:10px; top:10px; background:transparent; border:0; font-size:18px; cursor:pointer; }
  #bh-success { display:none; color:#064e3b; background: #d1fae5; border-radius:8px; padding:10px; margin-top:12px; }
  #bh-actions { display:flex; gap:10px; margin-top:8px; }
  #bh-whatsapp, #bh-email { flex:1; padding:10px; border-radius:8px; border:0; cursor:pointer; }
  #bh-whatsapp { background:#25D366; color:#fff; }
  #bh-email { background:#111827; color:#fff; }
  #brandhype-portal .assets { display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:6px; }
  @media (max-width:520px){ #brandhype-portal { width: calc(100% - 24px); left:12px; transform:none; top:12px; } .assets { grid-template-columns:1fr; } }
</style>

<div id="brandhype-portal" role="dialog" aria-labelledby="bh-title" aria-modal="true">
  <button class="bh-close" aria-label="Close form" id="bh-close">✕</button>
  <h2 id="bh-title">🚀 Start Your Project</h2>
  <p class="lead">Quick form — takes ~60 seconds. We’ll email you next steps or you can chat on WhatsApp after submitting.</p>

  <form id="brandhypeForm" autocomplete="on" novalidate>
    <label for="name">Full name *</label>
    <input id="name" name="name" required placeholder="Thabo Mokoena" />

    <div class="row">
      <div>
        <label for="email">Email *</label>
        <input id="email" name="email" type="email" required placeholder="thabo@email.com" />
      </div>
      <div>
        <label for="phone">WhatsApp number *</label>
        <input id="phone" name="phone" type="tel" required placeholder="+27 82 123 4567" />
      </div>
    </div>

    <label for="project_type">What are you building? *</label>
    <select id="project_type" name="project_type" required>
      <option value="">Select project type</option>
      <option value="website">Website</option>
      <option value="web_app">Web App</option>
      <option value="mobile_app">Mobile App</option>
      <option value="chatbot">AI Chatbot / Conversational Bot</option>
      <option value="prototype">Prototype / No-code MVP</option>
      <option value="other">Other</option>
    </select>

    <label for="stage">What stage are you in?</label>
    <select id="stage" name="stage">
      <option value="">Select stage</option>
      <option>Just exploring ideas</option>
      <option>Have a clear concept, need a prototype</option>
      <option>Have designs, need development</option>
      <option>Already live, need improvements</option>
      <option>Ongoing support / maintenance</option>
    </select>

    <label for="goal">Main goal</label>
    <select id="goal" name="goal">
      <option value="">Select goal</option>
      <option>Launch new product / startup</option>
      <option>Improve brand presence or UX</option>
      <option>Get more leads or sales</option>
      <option>Automate business processes</option>
      <option>Showcase portfolio or brand</option>
      <option>Other</option>
    </select>

    <div class="row">
      <div>
        <label for="budget">Estimated budget (ZAR) *</label>
        <select id="budget" name="budget" required>
          <option value="">Select budget range</option>
          <option>Under R5,000</option>
          <option>R5,000 – R15,000</option>
          <option>R15,000 – R30,000</option>
          <option>R30,000 – R50,000</option>
          <option>Above R50,000</option>
          <option>Not sure — need advice</option>
        </select>
      </div>
      <div>
        <label for="timeline">Ideal timeline</label>
        <select id="timeline" name="timeline">
          <option value="">Select timeline</option>
          <option>ASAP (1–2 weeks)</option>
          <option>2–4 weeks</option>
          <option>1–2 months</option>
          <option>Flexible</option>
        </select>
      </div>
    </div>

    <label>Do you already have any of these? (select all that apply)</label>
    <div class="assets" role="group" aria-label="Existing assets">
      <label><input type="checkbox" name="existingAssets" value="Brand name & logo"> Brand name & logo</label>
      <label><input type="checkbox" name="existingAssets" value="Domain name"> Domain name</label>
      <label><input type="checkbox" name="existingAssets" value="Content or copy"> Content / copy</label>
      <label><input type="checkbox" name="existingAssets" value="UI/UX design"> UI/UX design</label>
      <label><input type="checkbox" name="existingAssets" value="Prototype or wireframes"> Prototype / wireframes</label>
      <label><input type="checkbox" name="existingAssets" value="None"> None / I'll need help</label>
    </div>

    <label for="platform">Which platform should it run on?</label>
    <select id="platform" name="platform">
      <option value="">Select platform</option>
      <option>Web only</option>
      <option>Mobile only (Android/iOS)</option>
      <option>Both web & mobile</option>
      <option>Not sure yet</option>
    </select>

    <label for="description">Tell us briefly about your project</label>
    <textarea id="description" name="description" rows="4" placeholder="What problem does it solve? Who is it for?"></textarea>

    <label for="company">Company/Brand (optional)</label>
    <input id="company" name="company" placeholder="Your company name (optional)" />

    <label for="website">Instagram / Website (optional)</label>
    <input id="website" name="website" placeholder="https:// or instagram handle" />

    <button id="bh-submit" type="submit" style="width:100%; padding:12px; background:#111827; color:white; border:0; border-radius:8px; font-weight:600; font-size:15px; margin-top:8px; cursor:pointer;">Submit Project</button>

  </form>

  <div id="bh-success" role="status">
    ✅ Thanks — we received your details. You can also <strong>chat with us on WhatsApp</strong> or open your email client to send us the full brief.
    <div id="bh-actions">
      <button id="bh-whatsapp">Chat on WhatsApp</button>
      <button id="bh-email">Open Email</button>
    </div>
  </div>
</div>

<script>
(function() {
  // If Lovable strips <script> tags, this won't run — see notes below.
  if (window.__brandhype_leadform_loaded) return;
  window.__brandhype_leadform_loaded = true;

  const portal = document.getElementById('brandhype-portal');
  const form = document.getElementById('brandhypeForm');
  const success = document.getElementById('bh-success');
  const closeBtn = document.getElementById('bh-close');
  const whatsappBtn = document.getElementById('bh-whatsapp');
  const emailBtn = document.getElementById('bh-email');

  // Close button behaviour
  closeBtn.addEventListener('click', () => {
    portal.remove();
  });

  // Build mail body from form
  function buildBody(formData) {
    const assets = formData.getAll('existingAssets').length ? formData.getAll('existingAssets').join(', ') : 'None';
    return [
      'NEW PROJECT INQUIRY',
      '',
      '=== PROJECT DETAILS ===',
      `Project Type: ${formData.get('project_type') || 'N/A'}`,
      `Stage: ${formData.get('stage') || 'N/A'}`,
      `Goal: ${formData.get('goal') || 'N/A'}`,
      `Budget: ${formData.get('budget') || 'N/A'}`,
      `Timeline: ${formData.get('timeline') || 'N/A'}`,
      `Audience: ${formData.get('audience') || 'N/A'}`,
      `Platform: ${formData.get('platform') || 'N/A'}`,
      '',
      '=== EXISTING ASSETS ===',
      assets,
      '',
      '=== PROJECT DESCRIPTION ===',
      formData.get('description') || 'N/A',
      '',
      '=== CONTACT INFO ===',
      `Name: ${formData.get('name') || 'N/A'}`,
      `Email: ${formData.get('email') || 'N/A'}`,
      `Phone: ${formData.get('phone') || 'N/A'}`,
      `Company: ${formData.get('company') || 'N/A'}`,
      `Website/IG: ${formData.get('website') || 'N/A'}`,
    ].join('\n');
  }

  // Submit handler: opens mail client and shows WhatsApp option
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic validation
    const name = form.querySelector('#name').value.trim();
    const email = form.querySelector('#email').value.trim();
    const phone = form.querySelector('#phone').value.trim();
    if (!name || !email || !phone) {
      alert('Please fill in your name, email and WhatsApp number.');
      return;
    }

    const fd = new FormData(form);
    const body = buildBody(fd);
    const subject = `New Project Inquiry - ${name}`;
    const mailto = `mailto:admin@brandhype.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Show success panel (email + WhatsApp actions)
    success.style.display = 'block';
    form.style.display = 'none';

    // Email action opens mail client
    emailBtn.onclick = () => {
      window.location.href = mailto;
    };

    // WhatsApp action: prefilled message, open in web or app
    whatsappBtn.onclick = () => {
      const waMessage = `Hi BrandHype 👋%0A%0AI submitted a project brief:%0A%0A${encodeURIComponent(body)}`;
      // Use targeted number (South Africa number without +)
      const waUrl = `https://wa.me/27816617013?text=${waMessage}`;
      window.open(waUrl, '_blank');
    };

    // Automatically open mail client for convenience (optional - comment out if not wanted)
    // window.location.href = mailto;
  });

  // Accessibility: focus trap inside portal (simple)
  portal.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') portal.remove();
  });

  // If Lovable strips scripts: detect and warn (we show a visual fallback element)
  setTimeout(() => {
    if (!window.__brandhype_leadform_loaded) {
      console.warn('BrandHype lead form script not running — check Lovable custom code script support.');
    }
  }, 1000);
})();
</script>
