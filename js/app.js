document.addEventListener('DOMContentLoaded', function () {
    const html = document.querySelector('html');
    const body = document.querySelector('body');
    const navbarTopSection = document.querySelector('.navbar-top-section');
    const navbarMainSection = document.querySelector('.navbar-main-section');
    const navbarMain = document.querySelector('.navbar-main-section .navbar-main');
    const offset = navbarMainSection.offsetTop;
    const languageMeta = document.querySelector('.language-meta');
    const navbarMainSectionContainer = document.querySelector('.navbar-main-section > .container');
    const navbarMainSectionContainerRightPosition = navbarMainSectionContainer?.getBoundingClientRect().right;
    const windowViewportWidth = window.innerWidth;
    const gap = windowViewportWidth - navbarMainSectionContainerRightPosition;
    const mobileMenuToggleButton = document.querySelector('.btn-mobile-menu-toggle');

    let viewportWidth = '',
        viewportHeight = '';

    /* --- Calculate Viewport Width --- */
    const viewport = () => {
        let e = window, a = 'inner'
        if (!('innerWidth' in window)) {
            a = 'client'
            e = document.documentElement || document.body
        }

        viewportWidth = e[a + 'Width']
        viewportHeight = e[a + 'Height']
    }
    viewport();
    window.addEventListener('resize', viewport);

    if (viewportWidth >= 768) { // Scripts Run Only For Desktop

        /* -- Fixed Navbar on Scroll Only For Desktop -- */
        window.addEventListener('scroll', function () {
            if (window.scrollY >= offset) {
                navbarMainSection.classList.add('fixed-top');
                languageMeta.classList.add('fixed-top');
                languageMeta.style.right = `${gap - 12}px`
            } else {
                navbarMainSection.classList.remove('fixed-top');
                languageMeta.classList.remove('fixed-top');
            }
        });
    } else { // Scripts Run Only For Mobile

        window.addEventListener('scroll', function () {
            if (window.scrollY > 0) {
                navbarTopSection.classList.add('navbar-fixed-top');
            } else {
                navbarTopSection.classList.remove('navbar-fixed-top');
            }
        });

        /* -- Toggle Navbar On Mobile -- */
        mobileMenuToggleButton.addEventListener('click', () => {
            mobileMenuToggleButton.classList.toggle('active');
            mobileMenuToggleButton.classList.toggle('not-active');
            navbarMain.classList.toggle('active');
            html.classList.toggle('overflow-hidden');
            body.classList.toggle('overflow-hidden');
            body.classList.toggle('mobile-menu-opened');
        });
    }
});

// JQuery Code Starts
$(document).ready(function () {
    $('select').niceSelect();
});