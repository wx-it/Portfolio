window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    for (let i = 0; i < reveals.length; i++) {
        let windowsHeight= window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint= 100;

        if (revealTop < windowsHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
        
    }
}


