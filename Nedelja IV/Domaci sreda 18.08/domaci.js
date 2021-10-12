//1. Napisati funkciju koja ispisuje sve elemente datog niza koji su deljivi sa 5

let niz1 = [2, 4, 5, 8, 15, 46, 55, 67]
function deljivi(niz) {

    let novi = []
    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 5 == 0) {
            novi.push(niz[i])
        }

    }
    return novi

}

console.log(deljivi(niz1))


//2. Napraviti objekat pokemon koji sadrži sledeće informacije: (Napravite makar 4 različita pokemona)
// * Ime 
// * Vrsta 
// * Sposobnosti (niz sposobnosti pokemona) 
// * Karakteristike (objekat sa informacijama : napad (broj), odbrana (broj), brzina (broj))

//(Napraviti niz od ovih objekata)

let prvi = {
    ime: 'pokemon1',
    vrsta: 'napadac',
    sposobnost: ['trcanje', 'vatra', 'skok'],
    karakteristike: { napad: 8, odbrana: 5, brzina: 4 }
}

let drugi = {
    ime: 'pokemon2',
    vrsta: 'napadac',
    sposobnost: ['trcanje', 'skok'],
    karakteristike: { napad: 9, odbrana: 6, brzina: 7 }
}

let treci = {
    ime: 'pokemon3',
    vrsta: 'odbrana',
    sposobnost: ['skok'],
    karakteristike: { napad: 4, odbrana: 9, brzina: 5 }
}

let cetvrti = {
    ime: 'pokemon4',
    vrsta: 'odbrana',
    sposobnost: ['vatra', 'skok'],
    karakteristike: { napad: 8, odbrana: 10, brzina: 2 }
}

let svi = [prvi, drugi, treci, cetvrti]


//3. Napraviti funkciju koja prima niz gore napravljenih objekata i vraća jedan niz sposobnosti svih pokemona

function sposobnosti(niz) {
    let sveSpos = []
    for (let i = 0; i < niz.length; i++) {
       
        sveSpos.push(niz[i].sposobnost)

    }
  
    return sveSpos

}
console.log(sposobnosti(svi))

//4. Sortirati pokemone po brzini, rastuće.
let brzine=[]
for (let i=0; i<svi.length; i++)
{
    temp = svi[i]
    temp1 = temp.karakteristike.brzina
    
    brzine.push(temp1)
    
}
console.log(brzine.sort())


//5. Napraviti funkciju koja prima niz pokemona, poredi pokemone po jačini i vraća kao pobednika onog koji ima najveću jačinu napada.

function jacina (niz) {
if(prvi.karakteristike.napad>drugi.karakteristike.napad&&prvi.karakteristike.napad>treci.karakteristike.napad&&prvi.karakteristike.napad>cetvrti.karakteristike.napad) {
    return prvi
}
else if (drugi.karakteristike.napad>prvi.karakteristike.napad&&drugi.karakteristike.napad>treci.karakteristike.napad&&drugi.karakteristike.napad>cetvrti.karakteristike.napad)
{return drugi}

else if (treci.karakteristike.napad>prvi.karakteristike.napad&&treci.karakteristike.napad>drugi.karakteristike.napad&&treci.karakteristike.napad>cetvrti.karakteristike.napad)
{return treci}
else (cetvrti.karakteristike.napad>prvi.karakteristike.napad&&cetvrti.karakteristike.napad>drugi.karakteristike.napad&&cetvrti.karakteristike.napad>treci.karakteristike.napad)
{return cetvrti}

}
console.log(jacina(svi))






//domaci sreda

let div1 = document.createElement('div')
div1.classList.add('glavniDiv')
let buttonBiraj1 = document.createElement('button')
let buttonBiraj2 = document.createElement('button')
buttonBiraj1.textContent('Pokemoni')
buttonBiraj2.textContent('Pokemoni')
buttonBiraj1.classList.add ('dugme')
buttonBiraj2.classList.add ('dugme')

div1.append(buttonBiraj1, buttonBiraj2)
document.body.append(div1)

buttonBiraj1.addEventListener('click',()=>{
    for (let i=0; i<svi.length; i++)
    {
let pok = document.createElement('button')
pok.textContent(svi[i].ime)
pok.classList.add('pokemon')

    }

    pok.addEventListener('click',() => {
for(let i =0; i<svi.length; i++)
        console.log(svi[i])

    })

})
