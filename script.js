const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-link');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.2}s`;
            }
        });
        burger.classList.toggle('toggle');
    });
}

const setProperScrollMargin = () => {
    const navHeight = document.querySelector('nav').offsetHeight;
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style = `scroll-margin-top: ${navHeight}px;`
    });
}

const adjustToResize = () => {
    window.addEventListener('resize', () => {
        setProperScrollMargin();
    });
}

const app = () => {
    setProperScrollMargin();
    navSlide();
    adjustToResize();
}

app();