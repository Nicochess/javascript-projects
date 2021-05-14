import { apiResponse } from './apiResponse.js'

export function showSlide(index){
    const dataCard = apiResponse()
    const item = dataCard[index]
    
    const card = document.querySelector('.card')
    card.innerHTML = ''
    card.setAttribute('data-id', `${item.id}`)
        card.classList.add('card')
        card.innerHTML = `
            <h2 class="card__title">${item.nome}</h2>
            <p class="card__desc">${item.desc}</p>
        `
}