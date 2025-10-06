<div style="max-width: 600px; margin: 0 auto; font-family: 'Poppins', sans-serif; padding: 20px; background: #f9fafb; border-radius: 16px; box-shadow: 0 4px 10px rgba(0,0,0,0.05);">
  <h2 style="text-align: center; color: #111827;">🚀 Start Your Project</h2>
  <p style="text-align: center; color: #6b7280;">Tell us a bit about your idea so we can prepare your quote.</p>

  <form id="projectForm" style="margin-top: 20px;">
    
    <!-- Full Name -->
    <label style="display:block; margin-bottom:6px; font-weight:600;">Full Name</label>
    <input type="text" name="name" placeholder="e.g. Thabo Mokoena" required style="width:100%; padding:10px; border-radius:8px; border:1px solid #d1d5db; margin-bottom:15px;">

    <!-- Email -->
    <label style="display:block; margin-bottom:6px; font-weight:600;">Email Address</label>
    <input type="email" name="email" placeholder="e.g. thabo@email.com" required style="width:100%; padding:10px; border-radius:8px; border:1px solid #d1d5db; margin-bottom:15px;">

    <!-- WhatsApp Number -->
    <label style="display:block; margin-bottom:6px; font-weight:600;">WhatsApp Number</label>
    <input type="text" name="phone" placeholder="e.g. +27 82 123 4567" required style="width:100%; padding:10px; border-radius:8px; border:1px solid #d1d5db; margin-bottom:15px;">

    <!-- Project Type -->
    <label style="display:block; margin-bottom:6px; font-weight:600;">What are you building?</label>
    <select name="project_type" required style="width:100%; padding:10px; border-radius:8px; border:1px solid #d1d5db; margin-bottom:15px; background:white;">
      <option value="">Select project type</option>
      <option>Website</option>
      <option>Web App</option>
      <option>Mobile App</option>
      <option>AI Chatbot</option>
      <option>Conversational Bot</option>
      <option>No-code MVP</option>
      <option>Prototype</option>
      <option>Other</option>
    </select>

    <!-- Budget -->
    <label style="display:block; margin-bottom:6px; font-weight:600;">Estimated Budget (ZAR)</label>
    <select name="budget" required style="width:100%; padding:10px; border-radius:8px; border:1px solid #d1d5db; margin-bottom:15px; background:white;">
      <option value="">Select budget range</option>
      <option>Below R5,000</option>
      <option>R5,000 – R10,000</option>
      <option>R10,000 – R20,000</option>
      <option>R20,000 – R50,000</option>
      <option>R50,000+</option>
    </select>

    <!-- Timeline -->
    <label style="display:block; margin-bottom:6px; font-weight:600;">When do you want to start?</label>
    <select name="timeline" required style="width:100%; padding:10px; border-radius:8px; border:1px solid #d1d5db; margin-bottom:15px; background:white;">
      <option value="">Select timeline</option>
      <option>Immediately</option>
      <option>Within 2 weeks</option>
      <option>Within a month</option>
      <option>In 2–3 months</option>
      <option>Just exploring</option>
    </select>

    <!-- Goal -->
    <label style="display:block; margin-bottom:6px; font-weight:600;">What's your main goal?</label>
    <select name="goal" style="width:100%; padding:10px; border-radius:8px; border:1px solid #d1d5db; margin-bottom:15px; background:white;">
      <option value="">Select goal</option>
      <option>Launch a new business</option>
      <option>Automate my business</option>
      <option>Test an idea (MVP)</option>
      <option>Upgrade existing system</option>
      <option>Other</option>
    </select>

    <!-- Description -->
    <label style="display:block; margin-bottom:6px; font-weight:600;">Tell us about your project</label>
    <textarea name="description" placeholder="Describe your idea, features, or any links..." rows="4" style="width:100%; padding:10px; border-radius:8px; border:1px solid #d1d5db; margin-bottom:15px;"></textarea>

    <!-- Submit -->
    <button type="submit" style="width:100%; padding:12px; background:#111827; color:white; border:none; border-radius:8px; font-weight:600; cursor:pointer;">
      Submit Project
    </button>
  </form>

  <p id="formMessage" style="text-align:center; margin-top:15px; color:#10b981; display:none;">✅ Thanks! We’ve received your project details. We’ll contact you shortly.</p>
</div>

<script>
  document.getElementById("projectForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("formMessage").style.display = "block";
    this.reset();
  });
</script>
