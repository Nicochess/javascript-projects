const clockHour = document.querySelector('.hours')
const clockMin = document.querySelector('.minutes')
const clockSec = document.querySelector('.seconds')

function setClock(){
    const dateNow = new Date()
    const hour = dateNow.getHours()
    const minutes = dateNow.getMinutes()
    const seconds = dateNow.getSeconds()

    clockSec.textContent = seconds
    clockMin.textContent = minutes
    clockHour.textContent = hour
}

setInterval(setClock, 1000)