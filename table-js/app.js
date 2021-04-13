const envButton = document.querySelector('.notes-submit')
const table = document.querySelector('.table-notes')

function createRow(){
    const tr = document.createElement('tr')
    const note1 = document.createElement('td')
    const note2 = document.createElement('td')
    const note3 = document.createElement('td')

    const mat = document.querySelector('#mat')
    const cie = document.querySelector('#cie')
    const pt = document.querySelector('#pt')

    note1.textContent = `${mat.value}`
    note2.textContent = `${cie.value}`
    note3.textContent = `${pt.value}`

    tr.appendChild(note1)
    tr.appendChild(note2)
    tr.appendChild(note3)

    table.appendChild(tr)

    mat.value = ``
    cie.value = ``
    pt.value = ``
    pt.focus()
}

envButton.addEventListener('click', createRow)

