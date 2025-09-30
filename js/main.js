(function(){
  // Mobile nav toggle
  const toggles = document.querySelectorAll('.nav-toggle');
  toggles.forEach(btn=>{
    btn.addEventListener('click', ()=>{
      const nav = btn.nextElementSibling;
      if(!nav) return;
      nav.style.display = (nav.style.display==='block') ? '': 'block';
    });
  });

  // Simple contact form validation + fake submit
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const out = document.getElementById('formMessage');
      if(!name || !email || !message){
        out.textContent = 'Please complete all fields before sending.';
        out.style.color = 'crimson';
        return;
      }
      // basic email pattern
      const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
      if(!emailRe.test(email)){
        out.textContent = 'Please provide a valid email address.';
        out.style.color = 'crimson';
        return;
      }
      // mimic sending
      out.style.color = 'var(--accent)';
      out.textContent = 'Thanks! Your message has been received. We will be in touch soon.';
      form.reset();
    });
  }

  // small accessible reveal-on-scroll animation
  const reveal = function(){
    const items = document.querySelectorAll('.card, .product-card, .member');
    items.forEach(el=>{
      const rect = el.getBoundingClientRect();
      if(rect.top < window.innerHeight - 60){
        el.style.opacity = 1;
        el.style.transform = 'none';
      }
    });
  }
  document.addEventListener('scroll', reveal);
  document.addEventListener('DOMContentLoaded', ()=>{
    // set initial hidden state
    document.querySelectorAll('.card, .product-card, .member').forEach(el=>{
      el.style.opacity = 0; el.style.transform = 'translateY(10px)'; el.style.transition = 'all .6s ease';
    });
    reveal();
  });
})();
