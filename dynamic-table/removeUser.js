const tdX = document.querySelector('.table')

tdX.addEventListener('click', event =>{
    if(event.target.className == 'info-remove'){
    const clicked = event.target.parentNode
    const objClicked = clicked.childNodes
    const newArr = []

    objClicked.forEach(element => {
        newArr.push(element.innerText)
    })

    const newObj = {
        site: newArr[0],
        email: newArr[1],
        senha: newArr[2]
    }
    
    const dad = JSON.parse(localStorage.getItem('tasks'))
    const index = dad.findIndex((x)=> x.site == `${newObj.site}`)
    dad.splice(index, 1)

    const newDad = JSON.stringify(dad)
    
    localStorage.setItem('tasks', newDad)
    
    

    
        event.target.parentNode.classList.add('removeTransition')

        setTimeout(()=>{
            event.target.parentNode.remove()
        },300)
    }

})