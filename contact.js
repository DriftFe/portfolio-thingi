document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');
    if (!form || !successMsg) return;
    successMsg.style.display = 'none';
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
      successMsg.style.display = 'none';
      successMsg.textContent = '';
      const formData = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          successMsg.style.color = '#4ade80'; 
          successMsg.textContent = 'Thank you! Your message has been sent.';
          successMsg.style.display = 'block';
          form.reset();
        } else {
          throw new Error('Network response was not ok.');
        }
      } catch (error) {
        successMsg.style.color = '#f87171';
        successMsg.textContent = 'Oops! Something went wrong. Please try again later.';
        successMsg.style.display = 'block';
      }
    });
  });
  