const a = document.querySelector('.about');
a.addEventListener('click', (e) => {
    const about = document.querySelector('.about-reveal');
    if (about.style.display === "block") {
        about.style.display = "none";
    } else {
        about.style.display = "block";
    }
});