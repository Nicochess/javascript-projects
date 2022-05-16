import { showSlide } from './showSlide.js'
import { apiResponse } from './apiResponse.js'

const dataCard = apiResponse()

const Slider = {
    count: 0,
    prevElement: document.querySelector('.slider__previous'),
    nextElement: document.querySelector('.slider__next'),
    next: function () {
        Slider.count += 1
    
        if(Slider.count >= dataCard.length){
            Slider.count = 0
            showSlide(Slider.count)
            return 
        }

        showSlide(Slider.count)
        return Slider.count
    },
    previous: function () {
        Slider.count -= 1

        if(Slider.count < 0){
            Slider.count = dataCard.length - 1
            showSlide(Slider.count)
            return 
        }

        showSlide(Slider.count)
        return Slider.count
    }
}

Slider.nextElement.addEventListener('click', Slider.next)
Slider.prevElement.addEventListener('click', Slider.previous)

//auto-slide 3 seconds
setInterval(Slider.next, 3000)





