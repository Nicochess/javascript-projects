const buttonNight = document.querySelector('#night-mode')

buttonNight.addEventListener('change', function(){
    if(this.checked){
        transit()
        document.documentElement.setAttribute('data-theme','dark')
    } else {
        transit()
        document.documentElement.setAttribute('data-theme','light')
    }
})

let transit = () =>{
    document.documentElement.classList.add('transit')
    window.setTimeout(()=>{
        document.documentElement.classList.remove('transit')
    }, 1000)
}