function showTime(){
    const data = new Date();
    const hours = data.getHours();
    const min = data.getMinutes();
    const sec = data.getSeconds();
    
    let currentTime = `${hours} : ${min} : ${sec}`

    document.getElementById('clock').innerHTML = currentTime;
}

setInterval(showTime, 1000);