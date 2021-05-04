import { renderItems } from './renderItems.js'

const form = document.querySelector('[data-form]')

let toDoList = []

function addTask(text){
    const toDo = {
        text: text,
        checked: false,
        id: Date.now()
    }

    toDoList.push(toDo)
    console.log(toDoList)
    renderItems(toDo)
}

form.addEventListener('submit', (event)=>{
    event.preventDefault()

    const input = document.querySelector('.form__input')
    const text = input.value.trim()

    if(text !== ''){
        addTask(text)
        input.value = ''
        input.focus()
    }
})




export function toggleDone(key){
    const index = toDoList.findIndex(item => item.id == key)
    console.log(index)
    toDoList[index].checked = !toDoList[index].checked
    renderItems(toDoList[index])
}

