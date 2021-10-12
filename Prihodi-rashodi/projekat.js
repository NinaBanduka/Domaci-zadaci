let div2 = document.querySelector('.drugi')
let inputiDiv = document.querySelector('.inputi')

let inputOpis = document.querySelector('#opis')
let inputIznos = document.querySelector('#iznos')
let select = document.querySelector('#odabir')
// let selectPr = document.querySelector('#jedan')
// let selectRas = document.querySelector('#dva')

let balansPrihoda = document.querySelector('.balans')

// let ukupanPrihod = 0
let btnUnesi = document.querySelector('#unesi')

let prihodi = []
let rashodi = []

let prihodCount = 0
let rashodCount = 0

let countprihod = 0
let countrashod = 0
// let balans = 0

// if (prihodCount>rashodCount) {
    
// balans = document.createElement('p')
// balans.classList.add('bls')
// balans.textContent = `+ ${prihodCount-rashodCount}`
//     balansPrihoda.append(bls)
        

// }





let ukupanPrihod = document.querySelector('.prihod')
let ukupanRashod = document.querySelector('.rashod')


let spanUkPrihod = document.createElement('span')
// spanUkPrihod.textContent = `${prihodCount}`
ukupanPrihod.append(spanUkPrihod)

let spanUkRashod = document.createElement('span')
// spanUkPrihod.textContent = `${prihodCount}`
ukupanRashod.append(spanUkRashod)

let nijeVal = document.createElement('p')
div2.append(nijeVal)

let nijeOdabran = document.createElement('p')
nijeOdabran.classList.add("nijeOd")
div2.append(nijeOdabran)

// let nijeVal= document.createElement('p')

// let rashod = {
// opis: inputOpis.Value.trim(),
// iznos: Number(inputIznos.Value.trim())
// }

// let validna = transakcija =>
//     transakcija.opis != '' &&
// transakcija.iznos > 0
// let nijeVal
// let nijeOdabran
function validna (transakcija)
{
if (transakcija.opis == "") {
    // nijeVal = document.createElement('p')
    
    nijeVal.textContent = `Унесите опис трансакције`
    // div2.append(nijeVal)
}

else if (transakcija.iznos <= 0) {
    // nijeVal = document.createElement('p')
    
    nijeVal.textContent = `Износ мора бити већи од нуле!`
    // div2.append(nijeVal)}
}

else {return true}


}




// {return true}
// else {
//     let nijeVal = document.createElement('p')
//     nijeVal.textContent = `Nije validan unos`
// div2.append(nijeVal)}

// }

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


btnUnesi.addEventListener('click', () => {
   
  
   
   
    let transakcija = {
        id: countprihod++,
        opis: inputOpis.value.trim(),
        iznos: Number(inputIznos.value.trim())
        }


    if (validna(transakcija))
    {
       
addStr(transakcija)

if (prihodCount>rashodCount) {balansPrihoda.textContent = ` + ${Number(prihodCount) - Number(rashodCount)}`}
else {balansPrihoda.textContent = ` - ${Number(rashodCount) - Number(prihodCount)}`}
    }


    else {
        console.log(`neispravan unos`)
    }

    inputIznos.value = ''
    inputOpis.value = ''
    document.getElementById('odabir').value = 0
    // nijeVal.textContent = ''
    // nijeOdabran.textContent = ''



})



// inputOpis.addEventListener ('change', () => {
//     let nijeOdabran = document.querySelector('.nijeOd')
    
//     nijeOdabran.remove()
// })
// inputIznos.addEventListener
// select.addEventListener




