const OneCountry = (country) =>{
    const divCountry = document.createElement('div')

    const img = document.createElement('img')
    img.src = country.flag
    img.alt = `Flag of ${country.name}`
    
    const p1 = document.createElement('p')
    p1.textContent = country.name

    const p2 = document.createElement('p')
    p2.textContent = country.nativeName

    const p3 = document.createElement('p')
    p3.textContent = country.population

    const p4 = document.createElement('p')
    p4.textContent = country.capital

    const p5 = document.createElement('p')
    p5.textContent = country.topLevelDomain


    divCountry.append(img,p1,p2,p3,p4,p5, document.createElement('hr'))

    return divCountry
}

export default OneCountry
