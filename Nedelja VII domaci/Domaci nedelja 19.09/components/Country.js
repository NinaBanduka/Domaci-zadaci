import OneCountry from "./OneCountry"

const Country = (country)=>{
    const divCountry = document.createElement('div')

    const img = document.createElement('img')
    img.src = country.flag
    img.alt = `Flag of ${country.name}`
    img.id = "flag"

    const p = document.createElement('p')
    p.textContent = country.name

    const p2 = document.createElement('p')
    p2.textContent = country.capital



img.addEventListener('click', () =>{
OneCountry(country)

})


    divCountry.append(img, p, p2 ,document.createElement('hr'))

    return divCountry
}

export default Country