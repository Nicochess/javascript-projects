import { showSlide } from './showSlide.js'
import { apiResponse } from './apiResponse.js'

const dataCard = apiResponse()

const Slider = {
    count: 0,
    prevElement: document.querySelector('.slider__previous'),
    nextElement: document.querySelector('.slider__next'),
    next: function () {
        slideCount += 1
    
        if(slideCount >= dataCard.length){
            this.count = 0
            showSlide(this.count)
            return 
        }

        showSlide(this.count)
        return this.count
    },
    previous: function () {
        this.count -= 1

        if(this.count < 0){
            slideCount = dataCard.length - 1
            showSlide(this.count)
            return 
        }

        showSlide(this.count)
        return this.count
    }
}

nextElement.addEventListener('click', nextSlide)
previousElement.addEventListener('click', previousSlide)

//auto-slide 3 seconds
setInterval(nextSlide, 3000)





