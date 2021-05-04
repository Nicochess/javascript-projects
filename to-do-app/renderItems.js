export function renderItems(todo){
    const list = document.querySelector('[data-list]')
    const task = document.querySelector(`[data-key='${todo.id}']`)


    const checked = todo.checked ? 'done': ''

    const li = document.createElement('li')
    li.setAttribute('class', `todo-item ${checked}`)
    li.setAttribute('data-key', todo.id)

    li.innerHTML = `
    <input id=${todo.id} type="checkbox" class="todo-button">
    <label for="${todo.id}" class="check js-check">${todo.text}</label>
    <button>
    <i class="fas fa-trash"></i>
    </button>
    `

    if(task){
        list.replaceChild(li, task)
    } else {
        list.append(li)
    }
}

