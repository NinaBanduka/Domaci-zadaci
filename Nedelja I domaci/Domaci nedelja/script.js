
//na osnovu dana u nedelji, zadat brojem od 1 do 7, napisati da li je vikend. Ako se zada 6 ili 7 napisati true (subota i nedelja).  U suprotnom ispisati false.

{let dan= 4
if (dan==6 || dan==7) {console.log(`true`)}
else if(dan<1 || dan>7) {console.log(`neispravan unos`)}
else {console.log(`false`)}

}

//na osnovu kolicine i cene artikla ispisati ukupnu cenu, kolicina je u gramima, cena je po kilogramu

{
    let kolicina = 157522
    let cena = 56
    let ukupno = cena * kolicina/1000

    //dopuniti zadatak kolicinom novca i ispisati racun *(ako nema dovoljno novca, ispisati poruku)
let kolNovca = 14548

    if(kolNovca<ukupno) {console.log(`nemate dovoljno sredstava`)}
    else {console.log(`vas racun je ${ukupno}`)}

}

// Data su 4 stringa. let string1 = "neki prvi string" let string2 = "neki drugi string koji je i duzi string" let string3 = "neki treci string koji je dugacak" let string4 = "neki cetvrti"
//1. Proveriti koji je string najduzi i ispisati samo njega



let string1 = "neki prvi string"
let string2 = "neki drugi string koji je i duzi string"
let string3 = "neki treci string koji je dugacak"
let string4 = "neki cetvrti"
let d1 = string1.length
let d2 = string2.length
let d3 = string3.length
let d4 = string4.length

if(d1>d2 && d1>d3 && d1>d4) {console.log(`${string1}`)}
else if(d2>d1 && d2>d3 && d2>d4) {console.log(`${string2}`)}
else if(d3>d1 && d3>d2 && d3>d4) {console.log(`${string3}`)}
else {console.log(`${string4}`)}




//2. Ispisati najkraci string koji sadrzi rec "string"

    
console.log(string1.includes('string'))
console.log(string2.includes('string'))
console.log(string3.includes('string'))
console.log(string4.includes('string'))

