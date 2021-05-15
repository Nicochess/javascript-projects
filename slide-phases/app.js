import { showSlide } from './showSlide.js'
import { apiResponse } from './apiResponse.js'

const dataCard = apiResponse()

let slideCount = 0

const nextElement = document.querySelector('.slider__next')
nextElement.addEventListener('click', nextSlide)

const previousElement = document.querySelector('.slider__previous')
previousElement.addEventListener('click', previousSlide)

function nextSlide(){

    slideCount += 1
    
    if(slideCount >= dataCard.length){
        slideCount = 0
        showSlide(slideCount)
        return 
    }
    showSlide(slideCount)
    return slideCount
}

function previousSlide(){
    slideCount -= 1

    if(slideCount < 0){
        slideCount = dataCard.length - 1
        showSlide(slideCount)
        return 
    }
    showSlide(slideCount)
    return slideCount
}

//auto-slide 3 seconds
setInterval(nextSlide, 3000)





