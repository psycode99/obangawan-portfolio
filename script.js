    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100
    });

    // Sticky navbar scroll effect
    window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    // Smooth scroll for navbar links
    document.querySelectorAll('.navbar-nav a').forEach(link => {
      link.addEventListener('click', function(e) {
        const collapse = document.querySelector('.navbar-collapse');
        if (collapse && collapse.classList.contains('show')) {
          document.querySelector('.navbar-toggler').click();
        }
      });
    });

    // Dark Mode Toggle
    const darkModeToggleMobile = document.getElementById('darkModeToggle');
    const darkModeToggleDesktop = document.getElementById('darkModeToggleDesktop');
    const body = document.body;

    // Check if user has a saved preference
    if (localStorage.getItem('darkMode') === 'enabled') {
      body.classList.add('dark-mode');
      updateDarkModeIcon();
    }

    // Mobile button click handler
    darkModeToggleMobile.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      
      // Save preference
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
      
      updateDarkModeIcon();
    });

    // Desktop button click handler
    darkModeToggleDesktop.addEventListener('click', function() {
      body.classList.toggle('dark-mode');
      
      // Save preference
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
      } else {
        localStorage.setItem('darkMode', 'disabled');
      }
      
      updateDarkModeIcon();
    });

    function updateDarkModeIcon() {
      const iconMobile = darkModeToggleMobile.querySelector('i');
      const iconDesktop = darkModeToggleDesktop.querySelector('i');
      
      if (body.classList.contains('dark-mode')) {
        iconMobile.className = 'bi bi-sun';
        iconDesktop.className = 'bi bi-sun';
        darkModeToggleMobile.title = 'Switch to light mode';
        darkModeToggleDesktop.title = 'Switch to light mode';
      } else {
        iconMobile.className = 'bi bi-moon-stars';
        iconDesktop.className = 'bi bi-moon-stars';
        darkModeToggleMobile.title = 'Switch to dark mode';
        darkModeToggleDesktop.title = 'Switch to dark mode';
      }
    }