const buttons = document.querySelectorAll('.toggle-list__button')

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        const taskList = button.nextElementSibling

        button.childNodes[1].classList.remove('fa-sort-down')
        /* button.childNodes[1].classList.add('fa-sort-up') */
    
        taskList.classList.toggle('toggle-list__task--active')

        if(taskList.classList.contains("toggle-list__task--active")){
            taskList.style.maxHeight = taskList.scrollHeight + 'px'
            taskList.style.overflow = 'visible'
            button.childNodes[1].classList.remove('fa-sort-up')
            button.childNodes[1].classList.add('fa-sort-up')
        } else {
            taskList.style.overflow = 'hidden'
            taskList.style.maxHeight = 0
            button.childNodes[1].classList.add('fa-sort-down')
            button.childNodes[1].classList.remove('fa-sort-up')
        }
    })
})