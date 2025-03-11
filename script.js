const form = document.getElementById("orderForm")
form.addEventListener("submit", function (ev) {
    ev.preventDefault()
    const nome = document.querySelector("input[name='name']")
    console.log(nome.value)

})

function logTecnology(ev) {
    const section = document.getElementById("section2")
    const tecnology = document.createElement('label')
    tecnology.innerText = 'Adicionar'
    section.appendChild(tecnology)

}

function addContact() {
    const contactSection = document.getElementById('contact-list')

    const h3 = document.createElement('h3')
    h3.innerText = 'Contato'

    const ul = document.createElement('ul')

    const li = document.createElement('li')
    li.innerText = 'Nome: '

    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.name = 'fullname'

    li.appendChild(nameInput)
    ul.appendChild(li)

    const phoneLi = document.createElement('li')
    phoneLi.innerText = 'Telefone: '

    const phoneInput = document.createElement('input')
    phoneInput.type = 'text'
    phoneInput.name = 'phone'

    phoneLi.appendChild(phoneInput)
    ul.appendChild(phoneLi)

    const addressLi = document.createElement('li')
    addressLi.innerText = 'Endereço: '

    const addressInput = document.createElement('input')
    addressInput.type = 'text'
    addressInput.name = 'address'
    addressInput.id = 'address'

    addressLi.appendChild(addressInput)
    ul.appendChild(addressLi)

    contactSection.append(h3, ul)

}

function removeContact() {
    const contactSection = document.getElementById('contact-list')

    const titles = document.getElementsByName('h3')
    const contacts = document.getElementsByName('ul')

    contactSection.removeChild(titles[titles.length -1])
    contactSection.removeChild(contacts[contacts.length -1])
}











