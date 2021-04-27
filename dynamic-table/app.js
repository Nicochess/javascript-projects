import {loadTask} from './loadTasks.js'

const buttonSave = document.querySelector('#save-datas')

loadTask()

buttonSave.addEventListener('click',event=>{
    event.preventDefault()
    
    const form = document.querySelector('#form-datas')
    const formObj = addObj(form)
    
    const erros = validationForm(formObj)

    

    if(erros.length > 0){
        showErro(erros)
        return
    }
    
    putDatas(formObj)
    
    const tasks = JSON.parse(localStorage.getItem('tasks')) || []
    const newTasks = [...tasks, formObj]
    localStorage.setItem('tasks', JSON.stringify(newTasks))

    
    
    const ul = document.querySelector('.erros')
    ul.innerHTML = ''

    form.reset()

    const foco = document.querySelector('#site')
    foco.focus()
})


export function addObj(form){
    const obj = {
        site: form.site.value,
        email: form.email.value,
        senha: form.senha.value
    }

    return obj
}

export function putDatas(obj){
    const table = document.querySelector('#data-table')

    const tr = document.createElement('tr')
    tr.classList.add('dados')

    tr.appendChild(createTD(obj.site, 'info-site'))
    tr.appendChild(createTD(obj.email, 'info-email'))
    tr.appendChild(createTD(obj.senha, 'info-senha'))
    tr.appendChild(createTD('x', 'info-remove'))

    return table.appendChild(tr)
}

function createTD(data, classe){
    const td = document.createElement('td')
    td.textContent = data
    td.classList.add(classe)

    return td
}

function validationForm(datas){
    const erro = []

    if(datas.site == ''){
        erro.push('Você não inseriu o site desejado.')
    }

    if(datas.email == ''){
        erro.push('Esqueceu de salvar seu email?')
    }

    if(datas.senha == ''){
        erro.push('Não esqueça de salvar sua senha!')
    }

    return erro
}  

function showErro(erro){
    const ul = document.querySelector('.erros')
    ul.innerHTML = ''
    
    erro.forEach(erro => {
        const li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    });
}