const inputs = document.querySelectorAll('.controles input')

function atualizar(){
    const suffix = this.dataset.sizing || ""
    console.log(this.name)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change',atualizar))
inputs.forEach(input => input.addEventListener('mousemove',atualizar))