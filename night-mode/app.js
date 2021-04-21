const checkbox = document.querySelector('#container-button')

checkbox.addEventListener('change', function(){
    if(this.checked){
        trans()
        document.documentElement.setAttribute('data-theme','night')
    } else {
        trans()
        document.documentElement.setAttribute('data-theme','light')
    }
})

let trans = () =>{
    document.documentElement.classList.add('transitioner')
    window.setTimeout(()=>{
        document.documentElement.classList.remove('transitioner')
    }, 1000)
}