//smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// wavebaar scroll effect

window.addEventListener('scroll', ()=>{
    const wave = document.querySelector('.navbar');
    window.scrollY > 50 ? 
    navbar.style.backgroundColor = 'rgba(19)' :
}