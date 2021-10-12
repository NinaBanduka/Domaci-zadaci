function addStr (transakcija) {
    let prihodiIspis = document.querySelector('.prihodiIspis')
    let rashodiIspis = document.querySelector('.rashodiIspis')
if (select[select.selectedIndex].text == 'Приход') {
    
    nijeOdabran.textContent = ``
    nijeVal.textContent = ``

    let itemDiv = document.createElement('div')
itemDiv.classList.add('items')
    prihodiIspis.append(itemDiv)

  let jedanPrihod = document.createElement('div')
  jedanPrihod.classList.add('jedanPrihod')
  jedanPrihod.innerHTML = `
        <p> ${transakcija.opis} </p>
        <span> + ${transakcija.iznos} </span>  
    `

    // jedanPrihod.id = countprihod++
    // console.log(jedanPrihod.id)

    let btnDel = document.createElement('button')
    btnDel.classList.add('btnDel')
btnDel.textContent = `X`

let hr = document.createElement('hr')
let br = document.createElement('br')
itemDiv.append(jedanPrihod, btnDel, br, hr)
// itemDiv.append(jedanPrihod, btnDel)
// prihodiIspis.append(itemDiv, br, hr)


// prihodi.forEach((prihod) => {
//     for (i=0; i=prihodi.length, i++;) {
//     prihod.id == i+1}
//   console.log(prihod.id)
// })

btnDel.addEventListener('click', () => 
{
itemDiv.remove()
let index = prihodi.findIndex(prihod=> prihod.id == transakcija.id)
prihodi.splice(index,1)
console.log(prihodi)
}  


)




prihodCount += Number(inputIznos.value)
spanUkPrihod.textContent = ` + ${prihodCount}`


// let spanUkPrihod = document.createElement('span')
// spanUkPrihod.textContent = `${prihodCount}`
// ukupanPrihod.append(spanUkPrihod)


prihodi.push(transakcija)
console.log(prihodi)



}

else if (select[select.selectedIndex].text == 'Расход') {

    let itemDiv = document.createElement('div')
itemDiv.classList.add('items')
    rashodiIspis.append(itemDiv)

    let jedanRashod = document.createElement('div')
    jedanRashod.classList.add('jedanRashod')
    nijeOdabran.textContent = ``
    nijeVal.textContent = ``
    
    
    if(prihodCount>0){
    jedanRashod.innerHTML = `
          <p> ${transakcija.opis} </p>
          <span> - ${transakcija.iznos} 
          <span id = "proc"> ${Math.round(Number(inputIznos.value) * 100 / Number(prihodCount))} % </span>
          
          </span>  
      `
    
      
    
    }
      else {
        jedanRashod.innerHTML = `
        <p> ${transakcija.opis} </p>
        <span> - ${transakcija.iznos} 
        </span>  
    `
  
      }
  
      let btnDel = document.createElement('button')
      btnDel.classList.add('btnDel')
  btnDel.textContent = `X`
  

  let hr = document.createElement('hr')
  let br = document.createElement('br')
  itemDiv.append(jedanRashod, btnDel, br, hr)

  

  if(prihodCount>0)
  {
  rashodCount += Number(inputIznos.value)
  spanUkRashod.innerHTML = ` - ${rashodCount} <span id="procUk"> ${Math.round(Number(rashodCount) * 100 / Number(prihodCount))} % </span> `
  


}
else {
    rashodCount += Number(inputIznos.value)
    spanUkRashod.innerHTML = ` - ${rashodCount} `
 
  
}

btnDel.addEventListener('click', () => 
{
itemDiv.remove()
let index = rashodi.findIndex(rashod=> rashod.id == transakcija.id)
rashodi.splice(index,1)
console.log(rashodi)
}  )

rashodi.push(transakcija)
console.log(rashodi)

}

else { 
// nijeOdabran = document.createElement('p')
// nijeOdabran.classList.add("nijeOd")
nijeOdabran.textContent = `""`
nijeOdabran.textContent = `Odaberite vrstu transakcije!`

// div2.append(nijeOdabran)}
}
}

export {addStr}