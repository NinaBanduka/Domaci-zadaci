// Aplikacija TO-DO lista
// Zavrsiti sa casa (26.08.2021) zapocetu aplikaziju za to-do listu koja treba da poseduje sledece funkcionalnosti:
// 1. Podaci iz niza se prikazuju na stranici (lista to-do itema)
// 2. Ima formu/input za unos novih podataka (to-do itema) u niz (automatski se azurira i prikaz na stranici)
// 3. Svaki item sadrzi sledece :
//      - id
//      - opis (desc)
//      - iformaciju da li je uradjen ili ne (done)
// 4. Na stranici za svaki item se prikazuje text - opis i checkbox polje koje menja stanje itema (uradjeno-neuradjeno), 
// kao i dugme za brisanje itema. Kada je item uradjen (done == true) tekst (desc) itema se precrta (ili se na neki drugi 
// nacin naznaci da je item uradjen).

const data = [
    {
        id: 1,
        desc: '12324',
        done: true
    },
    {
        id: 2,
        desc: 'dsjfh443',
        done: false
    },
    {
        id: 3,
        desc: 'nesto rjsdhf 2343',
        done: false
    },
    {
        id: 4,
        desc: 'dxjfhfdhfkdhjfkhdfhjdkf',
        done: true
    }
]


let inputTD = document.querySelector('#todo')
let btnAdd = document.querySelector('#add')
let lista = document.querySelector('#todos')


let todos = []

const addToDom = (data) => {

    lista.textContent = ""

    data.forEach(element => {

        let divItem = document.createElement('div')

        let txt = document.createElement('p')
        txt.textContent = `${element.desc}`
       

        let donecheck = document.createElement('input')
        donecheck.type = "checkbox"
        donecheck.id = "check"

        let btnDel = document.createElement('button')
        btnDel.textContent = "Delete"

        btnDel.addEventListener('click', () => {
            btnDel.parentElement.remove()

            deleteById(element.id)

            console.log(data)
        })

        divItem.append(txt, donecheck, btnDel)
        lista.append(divItem)

        donecheck.addEventListener('click', () => {

            element.done = true
            console.log(element)

            txt.id = "txt"
        })

    });
}

addToDom(data)

btnAdd.addEventListener('click', () => {


    let jedanTD = {
        desc: inputTD.value,
        done: false

    }

    add(jedanTD)
    console.log(data)

    addToDom(data)

    inputTD.value = ''
})




let count = 5



const add = (item) => { //Napomena: objekat item sadrzi samo desc i done,  {desc, done}
    //item.id = count++
    data.push({ id: count++, ...item })
    return count - 1
}

const deleteById = (id) => {
    let index = data.findIndex(item => item.id == id)
    data.splice(index, 1)
}

const changeById = (id, noviItem) => {
    let index = data.findIndex(item => item.id == id)
    data.splice(index, 1, noviItem)
}