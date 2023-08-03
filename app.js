const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo');

const mobileMenu = () =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}
menu.addEventListener('click',mobileMenu);

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars) {
      menu.classList.toggle('is-active');
      menuLinks.classList.remove('active');
    }
  };
  
  menuLinks.addEventListener('click', hideMobileMenu);
  navLogo.addEventListener('click', hideMobileMenu);

  const highlightMenu = () => {
    const hl = document.querySelector('.highlight');
    const me_nav = document.querySelector('#me_nav');
    const edu_nav = document.querySelector('#education_nav');
    const exp_nav = document.querySelector('#experience_nav');
    const proj_nav = document.querySelector('#project_nav');
    const hob_nav = document.querySelector('#hobbies_nav');
    const contact_nav = document.querySelector('#contact_nav');
    let scrollPos = window.scrollY;
    //console.log(scrollPos);
  
    // adds 'highlight' class to my menu items
    
    if (window.innerWidth > 960 && scrollPos < 458) {
      me_nav.classList.add('highlight');
      edu_nav.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 1002) {
      edu_nav.classList.add('highlight');
      me_nav.classList.remove('highlight');
      exp_nav.classList.remove('highlight');
      return;
    } else if (window.innerWidth > 960 && scrollPos < 1531) {
      exp_nav.classList.add('highlight');
      edu_nav.classList.remove('highlight');
      proj_nav.classList.remove('highlight');
      return;
    }
    else if (window.innerWidth > 960 && scrollPos < 2372) {
      proj_nav.classList.add('highlight');
      exp_nav.classList.remove('highlight');
      hob_nav.classList.remove('highlight');
      return;
    }
    else if (window.innerWidth > 960 && scrollPos < 3676) {
      hob_nav.classList.add('highlight');
      proj_nav.classList.remove('highlight');
      contact_nav.classList.remove('highlight');
      return;
    }
    else if (window.innerWidth > 960 && scrollPos >= 3676) {
      contact_nav.classList.add('highlight');
      hob_nav.classList.remove('highlight');
      return;
    }
  };
  
  window.addEventListener('scroll', highlightMenu);
  window.addEventListener('click', highlightMenu);
  