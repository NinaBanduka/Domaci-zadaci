//## Prodavnica

// 1. Korisnik unosi username i password i na klik Login dugmeta se kreira objekat klase Kupac.
// Klasa kupac sadrzi ime ,sifru i korpu .
// Div korpa se prikazuje tek kada se korisnik ulogovao.

// 2. Na stranici su sve vreme izlistani svi dostupni proizvodi iz niza proizvoda kreiranih klasom Proizvod

// jedan proizvod treba da sadrzi naziv , cenu , dostupnu kolicinu 

// proizvod moze biti prehrambeni ili bela tehnika

// ako je bela tehnika ima i garanciju

// ako je prehrambeni ima rok trajanja

// 3. Korisnik moze da doda proizvod u korpu , ako unese kolicinu vecu od dostupne kolicine ispisati poruku o gresci 
// Proizvod iz korpe moze da se obrise klikom na dugme Obrisi iz korpe

// DODATNO , NE MORA:
// 4. Ako je korisnik admin moze da doda nov proizvod
let proizvodiIspis = document.querySelector('.proizvodi')
let korpa = document.querySelector('.korpa')
let registrovani= [
{
ime: 'Milan',
lozinka: 'lozinka1',
korpa: []

},
{
    ime: 'Jelena',
    lozinka: 'lozinka2',
    korpa: []
    
    },
    {
        ime: 'Zoran',
        lozinka: 'loz3',
        korpa: []
        
        }


]


class Proizvod {
constructor (naziv,cena)
{
    this.naziv = naziv
    this.cena = cena
}
}

class PrehrambeniProizvod extends Proizvod {
constructor (naziv, cena, rokTrajanja){
super (naziv, cena)
this.rokTrajanja = rokTrajanja


}
}

class TehnikaProizvod extends Proizvod{
constructor (naziv, cena, garancija){
super (naziv, cena)
this.garancija = garancija

}
}


let inputIme = document.querySelector('#username')
let inputLozinka = document.querySelector('#password')
let forma = document.querySelector('#forma')

forma.addEventListener('submit', (event) =>
{
event.preventDefault()

let noviKori = new Korisnik (inputIme, inputLozinka)

if (registrovani.includes(noviKori)){
   
korpa.append(this.korpa)

}

})



class Korisnik {
    constructor (ime, lozinka){
    this.ime = ime
    this.lozinka = lozinka
    this.korpa = []
    }
 
    }
    
    
    // class Kupac extends Korisnik {
    //     constructor (ime, lozinka, korpa)
    //         {
    //         super(ime,lozinka)
    // this.korpa = []
    // }}
    
    // class Admin extends Korisnik {
    //     constructor (ime,lozinka)
    //     {
    // super(ime,lozinka)
    
    //     }
       
    // }



let proizvodi = []

let p1 = new PrehrambeniProizvod ('Mleko', '100 RSD', '20.02.2021.')
let p2 = new PrehrambeniProizvod ('Jaja', '200 RSD', '15.04.2022.')
let p3 = new TehnikaProizvod ('Masina za ves', '20000 RSD', '2 godine')
 proizvodi.push(p1,p2,p3)


 