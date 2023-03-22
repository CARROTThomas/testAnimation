//
/* ############ */
let titreSection = document.querySelector('.titreSection')

window.addEventListener('scroll', ()=>{
    let value = window.scrollY;
    let position = -500

    console.log(value)
})

const fadeIns = document.querySelectorAll('.carte');

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
        } else {
            entry.target.style.opacity = 0;
        }
    });
};

const observer = new IntersectionObserver(callback, options);

fadeIns.forEach(fadeIn => {
    observer.observe(fadeIn);
});
