import { getAllCountries } from "../src/sevice"
import Countries from "./Countries"

const OneCountry = (country) =>{

    let main = document.querySelector('#main')
    main.innerHTML = ''
    const divCountry = document.createElement('div')

    const img = document.createElement('img')
    img.src = country.flag
    img.alt = `Flag of ${country.name}`
    
    const p1 = document.createElement('p')
    p1.textContent = country.name
    
    const p2 = document.createElement('p')
    p2.textContent = 'Capital: ' + country.capital

    const p3 = document.createElement('p')
    p3.textContent = 'Languages: '
    country.languages.forEach(language => {
        let name = language.name
        p3.textContent += name + '; '
    });

    const p4 = document.createElement('p')
    p4.textContent = 'Timezone: ' + country.timezones

    const p5 = document.createElement('p')
    p5.textContent = 'Population: ' + country.population

    let btnNext = document.createElement('button')
    btnNext.textContent = 'Next Country'
    
    let btnPrev = document.createElement('button')
    btnPrev.textContent = 'Previous Country'
    
    let btnBack = document.createElement('button')
    btnBack.textContent = 'BACK'

    
    btnBack.addEventListener('click', () =>{
        getAllCountries().then(res =>
            {
        
                const countries = res.data
                const mix = [...countries].sort(() => 0.5 - Math.random()).slice(0, 15)
                
                console.log(mix)
                   main.innerHTML = ''
                    main.append(...Countries(mix))
        
            })
    })


let br = document.createElement('br')

    main.append(btnNext, btnPrev, btnBack, br, img,p1,p2,p3,p4,p5, document.createElement('hr'))

    return divCountry
}

export default OneCountry