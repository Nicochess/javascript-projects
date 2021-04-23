const tdX = document.querySelector('.table')

tdX.addEventListener('click', event =>{

    const clicked = event.target
    if(clicked.className == 'info-remove'){
        clicked.parentNode.classList.add('removeTransition')
        
        setTimeout(()=>{
            clicked.parentNode.remove()
        },500)
    }

})