/* 1. Napisati funkciju koja na klik dodaje jedan red u tabeli. HTML kreirati proizvoljno.*/

document.querySelectorAll

let lista = document.getElementById('tab')
let dugme = document.getElementById('dodaj')


dugme.addEventListener('click', ()=> 
{
let noviRed = document.createElement('tr')
noviRed.textContent ='novi red'
lista.append(noviRed)
console.log(lista)
}

)


/* 2. Napisati funkciju koja na klik dugmeta vrsi sabiranje 2 broja iz input polja i zbir ispisati na ekranu. HTML kreirati proizvoljno.*/

let submit = document.getElementById('submit')
let br1 = document.getElementById('1')
let br2 = document.getElementById('2')

submit.addEventListener('submit', 
{
    function () {
        console.log(br1 + br2)
        document.write(br1 + br2)}
   
})


 /*3. Nadovezivanje na predhodni zadatak. Dodati checkbox polje koje kada je selektovano prikazuje se kalkulator a obrnuto se skloni sa ekrana.*/
