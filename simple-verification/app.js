const buttonLogin = document.querySelector('#button-send')

buttonLogin.addEventListener('click', event =>{
    event.preventDefault()
    
    //Form retorna um objeto com os campos dentro
    //Cada campo pode ser acessado a partir do 'name'
    const formAdd = document.querySelector('#login')
    const formObj = getDados(formAdd)
    console.log(formObj)


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