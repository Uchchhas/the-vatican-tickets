document.addEventListener("DOMContentLoaded", function() {
    const navbarMainSection = document.querySelector(".navbar-main-section");
    const offset = navbarMainSection.offsetTop;
    const languageMeta = document.querySelector(".language-meta");

    window.addEventListener("scroll", function() {
        if (window.scrollY >= offset) {
            navbarMainSection.classList.add("fixed-top");
            languageMeta.classList.add("fixed-top");
        } else {
            navbarMainSection.classList.remove("fixed-top");
            languageMeta.classList.remove("fixed-top");
        }
    });
});