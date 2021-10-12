// Napisati validaciju za formu koja sadrzi polja: 
// input-text(name, surname, password, passwordConfirm) 
// checkbox(courses)
// select(city)
// radiobutton(gender)
// Za polje name => obavezno, minimum 5 karaktera, maksimum 15
// Za polje surname => obavezno, minimum 5 karaktera, maksimum 20
// Za polje password => obavezno, minimum 8 karaktera, da sadrzi broj i veliko slovo
// Za polje passwordConfirm => da je isto kao i password
// Za polje course => obavezno

//klikom na register ako validacija ne prodje ispisati greske ispod polja (za svako polje ponaosob)
//ako validacija prodje, kreirati objekat user ubaciti ga u niz users i ispisati ga na ekranu (ispisati ceo niz)
//kada se kreira user: 1. ime i prezime mora biti trimovano i setovati samo prvo slovo kao veliko a sva ostala da budu mala
//nakon svakog unosa potrebno je ispisati novog user-a i obrisati sve inpute (staviti ih na pocetne vrednosti)

//HTML I CSS po sopstvenom izboru!!!!!!!!!!!!!!!


let isValidate = true
let btnSubmit = document.querySelector('.btnsubmit')
let formaCont = document.querySelector('.container')
let ispis = document.querySelector('.ispis')

let fName = document.querySelector('#name')
let lastName = document.querySelector('#surname')
let password = document.querySelector('#pass')
let course = document.querySelector('#course')
let gender = document.querySelector('#gender')


let fNameError = document.querySelector('.name-error')
let lastNameError = document.querySelector('.surname-error')
let passwordError = document.querySelector('.password-error')
let confirmError = document.querySelector('.confirm-error')
let courseError = document.querySelector('.course-error')


function stringHasNumber(str) {
    number = /\d/
    return number.test(str)
}

function stringHasUpperCase(str) {
    chars = /[A-Z]/
    return chars.test(str)
}

btnSubmit.addEventListener('click', (event) => {
    event.preventDefault()

    if (fName.value == "") {
        fNameError.textContent = ""
        fNameError.textContent = "This field is required"
        isValidate = false
    } else if (fName.value.length <= 5) {
        fNameError.textContent = ""
        fNameError.textContent = "Minimum 5 characters is required"
        isValidate = false
    } else if (fName.value.length >= 15) {
        fNameError.textContent = ""
        fNameError.textContent = "Maximum 15 characters"
        isValidate = false
    }

    if (lastName.value == "") {
        lastNameError.textContent = ""
        lastNameError.textContent = "This field is required"
        isValidate = false
    } else if (lastName.value.length <= 5) {
        lastNameError.textContent = ""
        lastNameError.textContent = "Minimum 5 characters"
        isValidate = false
    } else if (lastName.value.length >= 20) {
        lastNameError.textContent = ""
        lastNameError.textContent = "Maximum 20 characters"
        isValidate = false
    }

    if (password.value == "") {
        passwordError.textContent = ""
        passwordError.textContent = "This field is requierd"
        isValidate = false
    } else if (password.value.length <= 8) {
        passwordError.textContent = ""
        passwordError.textContent = "Minimum 8 characters"
        isValidate = false
    } else if (!stringHasNumber(password.value)) {
        passwordError.textContent = ""
        passwordError.textContent = "Must include at least one number"
        isValidate = false
    } else if (!stringHasUpperCase(password.value)) {
        passwordError.textContent = ""
        passwordError.textContent = "Must include at least one capital letter"
        isValidate = false
    }

    if (confirm.value !== password.value) {
        confirm.textContent = ""
        confirm.textContent = "This field must be same as password"
    }

    if (!(course.value == "HTML" || course.value == "CSS" || course.value == "JS" || course.value == "PHP")) {
        courseError.textContent = ""
        courseError.textContent = "You need to choose option"
        isValidate = false
    }


    let users = []

    if (isValidate) {
        let user = {
            first_name: fName.value.trim(),
            last_name: lastName.value.trim(),
            usr_password: password.value,
            usr_course: course.value,
            usr_gender: gender.value
        }

        users.push(user)
        ispis.append(users)

        fName.value = ""
        lastName.value = ""
        password.value = ""
        confirm.value = ""
        course.value = ""
        gender.value = ""



        ispis.textContent += "Name: " + user.first_name + " "
        ispis.textContent += "Surname: " + user.last_name + " "
        ispis.textContent += "Course: " + user.usr_course + " "
        ispis.textContent += "Gender: " + user.usr_gender
    }
})