const inputs = document.querySelectorAll('.controles input')

function atualizar(){
    console.log(this.value)
}

inputs.forEach(input => input.addEventListener('change',atualizar))
inputs.forEach(input => input.addEventListener('mousemove',atualizar))