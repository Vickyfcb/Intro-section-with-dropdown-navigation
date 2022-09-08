/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
// const navLink = document.querySelectorAll('.nav__link')

// function linkAction(){
//     const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))
/*=================== FEATURES ======================*/

const featuresContent = document.getElementsByClassName('features__content'),
      featuresHeader = document.querySelectorAll('.features__header')

function toggleFeatures(){
    let itemClass = this.parentNode.className

    for(i = 0; i < featuresContent.length; i++){
        featuresContent[i].className = 'features__content features__close'
    }
    if (itemClass === 'features__content features__close') {
       this.parentNode.className = 'features__content features__open'
    }
}
  
featuresHeader.forEach((el) =>{
    el.addEventListener('click', toggleFeatures)
})
