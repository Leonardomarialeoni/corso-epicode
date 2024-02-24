const init = () => {
    const navBar = document.getElementById('navBar');
    const sezioneUno = document.getElementById("uno");
    const button = document.getElementById('started');
    let sezioneUnoHeight = sezioneUno.offsetHeight;
    
    if (window.scrollY > sezioneUnoHeight) {
        if (navBar.classList.contains('yellowBackground')) {
            navBar.classList.remove('yellowBackground')
        }
        navBar.classList.add('whiteBackground')
        if (button.classList.contains('blackBackground')) {
            button.classList.remove('blackBackground')
        }
        button.classList.add('greenBackground')
    }
    else {
        if (navBar.classList.contains('whiteBackground')) {
            navBar.classList.remove('whiteBackground')
        }
        navBar.classList.add('yellowBackground')
        if (button.classList.contains('greenBackground')) {
            button.classList.remove('greenBackground')
        }
        button.classList.add('blackBackground')
    }

};

window.addEventListener("scroll", init);
