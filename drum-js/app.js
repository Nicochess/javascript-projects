function keyEvent(event){
    //Busca de acordo com a tecla apertada, o áudio correspondente
    const audioDrum = document.querySelector(`audio[data-key="${event.keyCode}"]`)

    //Buscando no DOM a classe correspondente com a tecla
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`) 

    //Adiciona o elemento "Key" a uma classe "play"
    key.classList.add('play')

    //Irá parar a função se não houver tecla identificada
    if(!audioDrum) return 

    //Permite repetir o som depois de "0 segundos"
    audioDrum.currentTime = 0 

    //Executará o áudio inserido no HTML
    audioDrum.play()
}

//Adicionando um EventListener em todo o DOM -> "window"
//Chamando o evento 'Keydown', identifica quando uma tecla é pressionada e retorna seu keyCode
window.addEventListener('keydown', keyEvent)

//Função criada para remover a classe que adiciona efeito nas teclas
function removeTransition(e){
    //Condição colocada para verificar qual transição finalizou
    if(e.propertyName !== 'transform') return //Saltar se não for 'transform'
    //Seleciona o elemento 'transform' e remove a classe 'play'
    this.classList.remove('play')
}

//Seleciona todas as teclas da bateria
const keys = document.querySelectorAll(`.key`)

//Usa o array metodo forEach para verificar quando a transição dos elementos foram finalizados
keys.forEach(key => key.addEventListener('transitionend', removeTransition))