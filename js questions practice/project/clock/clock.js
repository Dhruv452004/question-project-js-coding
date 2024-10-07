

const digitalClock = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    const pMaM = hours >=12 ? 'PM' : 'Am';

    hours = hours % 12;
    hours = hours ? hours : 12; 

    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    const time = `${hours}:${minutes}:${seconds}`;

    const clock = document.querySelector('#clock').innerHTML = time;
}


setInterval(digitalClock, 1000);
digitalClock();
