const clockHour = document.querySelector('.hours')
const clockMin = document.querySelector('.minutes')
const clockSec = document.querySelector('.seconds')

function setClock(){
    const dateNow = new Date()
    const hour = dateNow.getHours()
    const minutes = dateNow.getMinutes()
    const seconds = dateNow.getSeconds()

    seconds + 1 <= 10 ? clockSec.textContent = '0' + seconds : clockSec.textContent = seconds
    minutes + 1 <= 10 ? clockMin.textContent = '0' + minutes : clockMin.textContent = minutes
    hour + 1 <= 10 ? clockHour.textContent = '0' + hour : clockHour.textContent = hour
}

setInterval(setClock, 1000)