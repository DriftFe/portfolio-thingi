document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('fade-in');
      document.querySelectorAll('.project-card').forEach((card, i) => {
      setTimeout(() => card.classList.add('visible'), 150 + i * 120);
    });
      document.querySelectorAll('a.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        if (this.href && this.href !== window.location.href) {
          e.preventDefault();
          document.body.classList.remove('fade-in');
          document.body.classList.add('fade-out');
          setTimeout(() => {
            window.location = this.href;
          }, 600);
        }
      });
    });
  });
  