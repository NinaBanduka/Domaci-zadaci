/*
1. Puz se penje uz drvo odredjenom brzinom (recimo da predje 3cm da dan). Drvo svaki dan poraste za 1 cm.

Za zadatu brzinu puza (u centrimetrima po danu) i zadatu pocetnu visinu drveta (u centimetrima),izracunati koliko je dana potrebno puzu da se popne na drvo
pomocu WHILE petlje.
Napraviti presek svakog dana, dakle program treba da izbaci sledece poruke (za brzinu puza 3 i visinu drveta 100) :
Dan 1: Puz je presao 3cm, visina drveta 100cm
Dan 2: Puz je presao 6cm, visina drveta 101cm
...
Na kraju treba da se ispise poruka na primer: Puz se popeo na drvo za 8 dana
Smatrati da drvo svakog dana raste fiksno 1cm.*/


let rastDr = 1
let visinaDr = 100
let predjeniPut = 0
let brDana = 0
while (visinaDr>=predjeniPut) {
    console.log(`puz je presao ${predjeniPut}cm, visina drveta je ${visinaDr}`)
    predjeniPut+=3
    visinaDr++
    brDana++
}
console.log(`puzu je trebao ${brDana} dan da se popne`)




/*2. Treba izracunati poptust U DINARIMA koji ostvaruje kupac.

Pravila za ostvarivanje popusta su sledeca:
Zaposlena lica ostvaruju popust od 5% za iznos koji je veci od 5000 din.
Studenti ostvaruju popust 20% za isnose koji su veci od 3000 din.
Penzioneri ostvaruju popust od 30% za iznose koji su veci od 2000 din.
Firme ostvaruju popust od 10% za iznose koji su veci od 10000 din.
Svi ostali ne ostaruju nikakav popust.
Ako kupovina pada za vikend (subota ili nedelja)
odnosno ako je TEKUCI DAN U NEDELJI kada se izvrsava program subota ili nedelja,
onda je u toku vikend akcija gde svi ostvaruju dodatni popust od 5%,
osnova za dodatni popust je iznos umanjen za prethodni popust na osnovu tipa kupca na primer:
Iznos je 10000 din, na osnovu tipa kupac je ostvario popust od 2000 din,
osnova za vikend akciju je 10000 - 2000 = 8000 din,
dakle racuna se 5% od 8000 din a ne od pocetnog iznosa
i dobije se dodatni popust od 400.
Tako da je na kraju ukupan popust 2000 + 400 = 2400 dinara*/

let kupac = `firma`
let popust 
let cena = 11000
let dan = `nedelja`
let cenaPopust 

 switch(kupac){
     case 'zaposleni':
         if(cena>5000 && dan==`subota`||dan==`nedelja`) {
             popust=cena*0.05
             cenaPopust = cena * 0.95
             vikendPopust= popust + cenaPopust*0.05
             console.log(vikendPopust)}
           else if(cena>5000)
           {
            popust=cena*0.05
            cenaPopust = cena * 0.95
            console.log(popust)
           }
           else {console.log(`nemate popust`)}
             break
         
         case 'student':
            if(cena>3000 && dan==`subota`||dan==`nedelja`) {
                popust=cena*0.2
                cenaPopust = cena * 0.8
                vikendPopust= popust + cenaPopust*0.05
                console.log(vikendPopust)}
              else if(cena>3000)
              {
               popust=cena*0.2
               cenaPopust = cena * 0.8
               console.log(popust)
              }
              else {console.log(`nemate popust`)}
                break

         case'penzioner':
            if(cena>2000 && dan==`subota`||dan==`nedelja`) {
                popust=cena*0.3
                cenaPopust = cena * 0.7
                vikendPopust= popust + cenaPopust*0.05
                console.log(vikendPopust)}
              else if(cena>2000)
              {
               popust=cena*0.3
               cenaPopust = cena * 0.7
               console.log(popust)
              }
              else {console.log(`nemate popust`)}
                break
         
         case 'firma':
            if(cena>10000 && dan==`subota`||dan==`nedelja`) {
                popust=cena*0.1
                cenaPopust = cena * 0.9
                vikendPopust= popust + cenaPopust*0.05
                console.log(vikendPopust)}
              else if(cena>10000)
              {
               popust=cena*0.1
               cenaPopust = cena * 0.9
               console.log(popust)
              }
              else {console.log(`nemate popust`)}
                break
        
            default: console.log(`nemate popust`)
         }