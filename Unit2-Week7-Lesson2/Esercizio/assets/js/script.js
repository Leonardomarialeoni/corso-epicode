let timePassed = sessionStorage.getItem('count') ? parseInt(sessionStorage.getItem('count')) : 0;

const conta = () => {
    timePassed++;
    document.getElementById('timer').innerText = timePassed + ' secondi di sessione aperta';
    sessionStorage.setItem('count', timePassed);
}

setInterval(conta, 1000);