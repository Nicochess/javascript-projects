const buttonLogin = document.querySelector('#button-send')

buttonLogin.addEventListener('click', event =>{
    event.preventDefault()
    
    //Form retorna um objeto com os campos dentro
    //Cada campo pode ser acessado a partir do 'name'
    const form = document.querySelector('#login')
    const formObj = getDados(form)
    console.log(formObj)

    const erro = getErrors(formObj)

    //Se possuir algum erro no preenchimento, ele executa a função de exibir estes erros e corta
    //o fluxo do código com o 'return'
    if(erro.length > 0){
        showErrors(erro)
        return
    }

    const ul = document.querySelector('#erros')

    //Limpa a lista de erros antes de dar "reset" na página e começar um novo preenchimento
    ul.innerHTML = ""
    form.reset()

    const sectionIntro = document.querySelector('.form-intro')
    const sectionEnd = document.querySelector('.form-end')

    finalizarForm(sectionIntro, sectionEnd)
})

//Função criada para gerar um objeto com os dados do formulário
function getDados(form){
    const dados ={
        user: form.user.value,
        senha: form.senha.value,
        confirm: form.confirm.value
    }

    return dados
}

//Essa função irá verificar varias condições e armazenar cada erro em um array usando o metodo 'push'
function getErrors(info){
    const errors = []

    if(info.user.length < 8){
        errors.push('Usuário não pode conter menos de 8 caracteres.')
    }

    if(info.user.length == 0){
        errors.push('Campo usuário está vazio.')
    }
    
    if(info.senha.length == 0){
        errors.push('Campo senha está vazio.')
    }

    if(info.senha.length < 8){
        errors.push('Senha não pode conter menos de 8 caracteres.')
    }

    if(info.confirm.length == 0){
        errors.push('Campo de confirmação de senha está vazio.')
    }
    
    if(info.senha !== info.confirm){
        errors.push('A senhas são diferentes, favor confirmar corretamente.')
    }

    return errors
}


//Essa função pega o array de mensagens com erros e adiciona elas em uma lista que será exibida na página
function showErrors(erro){
    const ul = document.querySelector('#erros')
    //Limpa a lista para buscar novos erros
    ul.innerHTML = ""
    

    erro.forEach(erro => {
        const li = document.createElement('li')
        li.textContent = erro
        ul.appendChild(li)
    })
}

//Essa função exibe a mensagem de conclusão do cadastro
//Adiciona animação no fim do formulário
function finalizarForm(intro ,message){
    intro.classList.add('hide')
    message.classList.remove('hide')
    message.classList.add('animated')
    message.classList.add('tada')
}