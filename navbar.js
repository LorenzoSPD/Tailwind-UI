const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');
  
    const toggleMenu = () => {
      const isHidden = mobileMenu.classList.contains('hidden');
  
      if (isHidden) {
        // OPEN animation
        mobileMenu.classList.remove('hidden', 'scale-y-0', 'animate-close-menu');
        void mobileMenu.offsetWidth;
        mobileMenu.classList.add('animate-open-menu');

        hamburgerIcon.classList.add('hidden');
        closeIcon.classList.remove('hidden');
      } else {
        // CLOSE animation
        mobileMenu.classList.remove('animate-open-menu');
        mobileMenu.classList.add('animate-close-menu');
  
        setTimeout(() => {
          mobileMenu.classList.add('hidden', 'scale-y-0');
          mobileMenu.classList.remove('animate-close-menu');
        }, 100); // match duration of your 'close-menu' animation
      
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
    };
  
    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
  };
  
  document.addEventListener('DOMContentLoaded', initApp);
  
