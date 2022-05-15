const clock = {
    hour: document.querySelector('.hours'),
    min: document.querySelector('.minutes'),
    sec: document.querySelector('.seconds')
}

function setClock(){
    const dateNow = new Date()
    const hour = dateNow.getHours()
    const minutes = dateNow.getMinutes()
    const seconds = dateNow.getSeconds()

    seconds + 1 <= 10 ? clock.sec.textContent = '0' + seconds : clock.sec.textContent = seconds
    minutes + 1 <= 10 ? clock.min.textContent = '0' + minutes : clock.min.textContent = minutes
    hour + 1 <= 10 ? clock.hour.textContent = '0' + hour : clock.hour.textContent = hour
}

setInterval(setClock, 1000)