//Selecionando os ponteiros no DOM
const transitionPointer = document.querySelector('.ponteiro')
const ponteiroSegundos = document.querySelector(`.ponteiro__sec`)
const ponteiroMinutos = document.querySelector(`.ponteiro__min`)
const ponteiroHoras = document.querySelector(`.ponteiro__hora`)

function setDate(){
//Chamar um objeto com a data atual
    const now = new Date()
//Pegar os segundos atuais
    const sec = now.getSeconds()
//Operação para dividir os 60 segundos dentro do circulo igualmente
    const secGraus = ((sec / 60) * 360)
    //Este if se refere as ultimas e primeiras vezes que o ponteiro move
    if(secGraus >= 355 || secGraus <= 10){
        //Esta parte serve para evitar o bug de rotação do relógio causado pelo "transition"
        ponteiroSegundos.style.transition = 'none'
        ponteiroSegundos.style.transitionTimingFunction = 'unset'
        ponteiroSegundos.style.transform = `rotate(${secGraus + 90}deg)`
    } else if(secGraus < 350 || secGraus > 10){
        //Efeito Tic-Tac do relógio
        ponteiroSegundos.style.transition = '0.6s all'
        ponteiroSegundos.style.transitionTimingFunction = 'cubic-bezier(0, 2.1, 0.25, 1)'
        //O número "90", está somando para compensar o inicio dos ponteiros na posição horizontal
        ponteiroSegundos.style.transform = `rotate(${secGraus + 90}deg)`
    }
        
    

//Pegar os minutos atuais
    const min = now.getMinutes()
//Operação para dividir os 60 minutos dentro do circulo igualmente
    const minGraus = ((min / 60) * 360)
//O número "90", está somando para compensar o inicio dos ponteiros na posição horizontal
    ponteiroMinutos.style.transform = `rotate(${minGraus + 90}deg)`

//Pegar as horas atuais
    const hora = now.getHours()
//Divide as horas no formato padrão de relógios, 12 horas
    const horaGraus = ((hora / 12) * 360)
    ponteiroHoras.style.transform = `rotate(${horaGraus + 90}deg)`
}

//"setInterval" define a função que deve permanecer em loop
//No segundo parametro, indica o tempo em milissegundos
setInterval(setDate, 1000)