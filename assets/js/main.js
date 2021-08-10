

/*=== === Mostrar/Ocultar el menu === ===*/
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    // Validar si las variables existen
    if( toggle && nav ){

        // agregar/remover la clase que muestra el menu
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('show-menu');
        })
    }
}
showMenu('nav-toggle', 'nav-menu');


/*=== === Ocultar el menu al dar click a un enlace === ===*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu');
    // remover la clase 'show-menu' del menu al dar click al enlace
    navMenu.classList.remove('show-menu');
}
navLink.forEach( link =>{
    link.addEventListener( 'click', linkAction );
});


/*=== === Mostrar el enlace activo === ===*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = ()=>{
    const scrollY = window.pageYOffset;
    
    sections.forEach( section =>{
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 50;
        sectionId = section.getAttribute('id');

        if( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');

        }
    });
}
window.addEventListener('scroll', scrollActive);


/* === === Cambiar la apariencia del Header al hacer scroll === === */
const scrollHeader = ()=>{
    const nav = document.getElementById('header');
    if( this.scrollY >= 200 ){
        nav.classList.add('scroll-header');
    }else{
        nav.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);


/* === === Mostrar/Ocultar boton para volver arriba === === */
const showScrollTop = ()=>{
    const scrollTop = document.getElementById('scroll-top');

    if( scrollY >= 560 ){
        scrollTop.classList.add('show-scrollTop');
    }else{
        scrollTop.classList.remove('show-scrollTop');
    }
}
window.addEventListener('scroll', showScrollTop);


/* === === Dark Theme - Persistir en el Local Storage === === */
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

// Leemos los valores de local storage
selectedTheme = localStorage.getItem('selected-theme');
selectedIcon = localStorage.getItem('selected-icon');

// Comprobamos si exite algun tema guardado y defimos uno inicial
if(selectedTheme){
    document.body.classList[ selectedTheme === 'dark' ? 'add' : 'remove' ](darkTheme);
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
}

// Obtener el thema actual
getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light';
getCurrentIcon =()=> themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';


// Cambiamo el tema al dar click y guardamos los cambios
themeButton.addEventListener('click', ()=>{
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());

});



/* === === Dark Theme === === */
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1500,
    reset: false
});

sr.reveal(`.home__data, .home__img,
            .about__data, .about__img,
            .services__content, .menu__content,
            .app__data, .app__img,
            .contact__data, .contact__button,
            .footer__content`,{
    interval: 200
});