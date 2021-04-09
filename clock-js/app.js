const ponteiroSegundos = document.querySelector(`.ponteiro__sec`)
const ponteiroMinutos = document.querySelector(`.ponteiro__min`)
const ponteiroHoras = document.querySelector(`.ponteiro__hora`)

console.log(ponteiroMinutos)
function setDate(){
    const now = new Date()
    const sec = now.getSeconds()
    const secGraus = ((sec / 60) * 360 )
    ponteiroSegundos.style.transform = `rotate(${secGraus + 90}deg)`

    const min = now.getMinutes()
    const minGraus = ((min / 60) * 360)
    ponteiroMinutos.style.transform = `rotate(${minGraus + 90}deg)`

    const hora = now.getHours()
    const horaGraus = ((hora / 12) * 360)
    ponteiroHoras.style.transform = `rotate(${horaGraus + 90}deg)`
}

//"setInterval" define a função que deve permanecer em loop
//No segundo parametro, indica o tempo em milissegundos
setInterval(setDate, 1000)