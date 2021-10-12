/**
 ## Апликација за приказ информација о државама

https://restcountries.eu/

1. Приказују се све државе (основне информације)
    - Застава
    - Име државе
2. Постоји Select за бирање региона
3. Постоји Input за претрагу држава
4. Ако је на страници само једна држава, приказати додатне информације о њој
    - Застава
    - Име државе
    - Име државе на матерњем језику
    - Популација
    - Главни град
    - Интернет домен

Додатно:
5. На страници се приказује највише 7 држава
    - За остале се праве додатне странице (испод приказа)

6. Направити функционалност да се државе сортирају у зависности од одабране опције 
по главном граду, имену, и региону
 */

// import { LibManifestPlugin } from "webpack";
import Countries from "./components/Countries";
import Select from "./components/Select";
import { getAllCountries } from "./service";


let main = document.querySelector('main')
let divSel = document.querySelector('#select')
let divSelSort = document.querySelector('#select-sort')
let inputSearch = document.querySelector('#input-search')

let countries = []

const addSelect = (nizDrzava) => {
    let options = new Set(nizDrzava.map(drzava => drzava.region ? drzava.region : 'Other'))
    divSel.textContent = ''
    let select = Select(options, 'Izaberite region')

    select.addEventListener('change', () => {
        let tmp = nizDrzava.filter(drzava => drzava.region == select.value)
        main.innerHTML = ''
        main.append(...Countries(tmp))
        sortRegions(tmp)
    })

    divSel.append(select)
    
}

const addSort = (nizDrzava) => {
    divSelSort.textContent = ''
    let options = ['Glavnom Gradu', 'Imenu', 'Regionu']

    let sortBy = Select(options, 'Sortiranje prema:')
    // defOpt.textContent = 'Sortiraj prema:'

    sortBy.addEventListener('change', () => {

        if (sortBy.value == 'Glavnom Gradu') {

            let gradSort = nizDrzava.sort(function(a,b) {return a.capital > b.capital ? 1: -1})
            console.log(gradSort)
            main.innerHTML = ''
            main.append(...Countries(gradSort))
        }

        else if (sortBy.value == 'Imenu') {

            let drzSor = nizDrzava.sort(function (a,b) {return a.name > b.name ? 1:-1})
            console.log(drzSor)
            main.innerHTML = ''
            main.append(...Countries(drzSor))
        }
        else if (sortBy.value == 'Regionu') {

            let regSort = nizDrzava.sort(function (a,b) {return a.region > b.region ? 1:-1})
            console.log(regSort);
            main.innerHTML = ''
            main.append(...Countries(regSort))
        }
        else {
            main.innerHTML = ''
            main.append(...Countries(countries))
        }
    })

    divSelSort.append(sortBy)
}

const sortRegions = (nizDrzava) => {
    divSelSort.textContent = ''
    let options = ['Glavnom Gradu', 'Imenu']

    let sortReg = Select(options, 'Sortiranje prema:')
    // defOpt.textContent = 'Sortiraj prema:'

    sortReg.addEventListener('change', () => {

        if (sortReg.value == 'Glavnom Gradu') {

            let gradSort = nizDrzava.sort(function(a,b) {return a.capital > b.capital ? 1: -1})
            console.log(gradSort)
            main.innerHTML = ''
            main.append(...Countries(gradSort))
        }

        else if (sortReg.value == 'Imenu') {

            let drzSor = nizDrzava.sort(function (a,b) {return a.name > b.name ? 1:-1})
            console.log(drzSor)
            main.innerHTML = ''
            main.append(...Countries(drzSor))
        }
       
        else {
            main.innerHTML = ''
            main.append(...Countries(countries))
        }
    })

    divSelSort.append(sortReg)
}



getAllCountries().then(res => {
    countries = res.data
    main.append(...Countries(countries))
    addSelect(countries)
    addSort(countries)
})

inputSearch.addEventListener('input', () => {
    main.innerHTML = ''
            let tmp2 = countries.filter(country => country.name.toLowerCase().startsWith(inputSearch.value.toLowerCase()))
            main.append(...Countries(tmp2))
    addSelect(tmp2)
        addSort(tmp2)
        })