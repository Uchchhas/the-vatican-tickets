document.addEventListener('DOMContentLoaded', function () {
    const html = document.querySelector('html'),
        body = document.querySelector('body'),
        navbarTopSection = document.querySelector('.navbar-top-section'),
        navbarMainSection = document.querySelector('.navbar-main-section'),
        navbarMain = document.querySelector('.navbar-main-section .navbar-main'),
        offset = navbarMainSection.offsetTop,
        languageMeta = document.querySelector('.language-meta'),
        navbarMainSectionContainer = document.querySelector('.navbar-main-section > .container'),
        navbarMainSectionContainerRightPosition = navbarMainSectionContainer?.getBoundingClientRect().right,
        windowViewportWidth = window.innerWidth,
        gap = windowViewportWidth - navbarMainSectionContainerRightPosition,
        mobileMenuToggleButton = document.querySelector('.btn-mobile-menu-toggle'),
        serviceCardDetailsElements = document.querySelectorAll('.service-card .service-details');

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
        window.addEventListener('scroll', () => {
            if (window.scrollY >= offset) {
                navbarMainSection.classList.add('fixed-top');
                languageMeta.classList.add('fixed-top');
                languageMeta.style.right = `${gap - 12}px`
            } else {
                navbarMainSection.classList.remove('fixed-top');
                languageMeta.classList.remove('fixed-top');
            }
        });

        /* -- Add Show More/Less Content On Service Card Details -- */
        const checkCollapsibleContentHeight = (tabId = null) => {
            serviceCardDetailsElements.forEach(element => {
                if (element.scrollHeight > element.clientHeight) {
                    const activeTab = element.querySelector('.tab-pane.show.active');
                    activeTab?.classList.add('collapsible');
                    if (tabId) {
                        const selectedTab = document.querySelector(tabId);
                        selectedTab.classList.add('collapsible');
                    }
                }
            });
        }
        checkCollapsibleContentHeight();

        const tabElements = document.querySelectorAll('.service-details-tab button[data-bs-toggle="tab"]');
        tabElements.forEach(tabEl => {
            tabEl.addEventListener('shown.bs.tab', event => {
                checkCollapsibleContentHeight(event.target.getAttribute('data-bs-target'));
            });
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

/* -- Swiper Initialization -- */
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    height: 344,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});

// JQuery Code Starts
$(document).ready(function () {
    $('select').niceSelect();
});