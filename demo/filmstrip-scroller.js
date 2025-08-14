
const strips = document.querySelectorAll('.filmstrip');

strips.forEach(item => {

    const carouselId = item.getAttribute('data-carousel-target');
    const links = item.querySelectorAll('.filmstrip-item-btn');

    links.forEach(link => {

        link.addEventListener('click', (e) => {
            links.forEach((i) => {
                i.classList.remove('filmstrip-item-btn--active')
            });
            link.classList.add('filmstrip-item-btn--active');
            // get position of link and scroll to start of containing element
            const stripRect = item.getBoundingClientRect();
            const linkRect = link.getBoundingClientRect();
            const scrollLeft = link.offsetLeft - item.offsetLeft;
            item.scrollTo({
                left: scrollLeft,
                behavior: 'smooth'
            });
            let slideTo = link.getAttribute('data-slide-to');
            $(carouselId).carousel(parseInt(slideTo));
        });
    });
});
