import { toggleDone } from './app.js'

const list = document.querySelector('[data-list]')

list.addEventListener('click', event =>{
    if(event.target.classList.contains('js-check') || event.target.classList.contains(`todo-button`)){
        const itemKey = event.target.parentElement.dataset.key
        console.log(itemKey)
        toggleDone(itemKey)
    }
})


