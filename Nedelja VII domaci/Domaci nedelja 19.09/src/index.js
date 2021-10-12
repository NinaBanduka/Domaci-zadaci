/**
 * Za domaci kreirati api za drzave koji smo radili na casu
 * ispisati sliku, naziv i glavni grad
 * 
 *  prikazati 15 RANDOM drzava
 * 
 * na klik na zastavu treba da se ukloni prikaz drzava i da se na ekranu izlistaju samo informacije o jednoj dzavi
 * slika, naziv, glavni grad, SVI JEZICI, opis, timezone, populacija
 * 
 * pored informacija o drzavi kreirati i 3 dugmeta (next, back, preview)
 * klik na next ispisuje informacije o narednoj drzavi iz niza
 * klik na preview ispisuje informacije o predhodnoj drzavi iz niza
 * klik na back vraca na punu listu sa umanjenim informacijama
 */

import Countries from "../components/Countries";
import { getAllCountries } from "./sevice";



getAllCountries().then(res =>
    {

        const countries = res.data
        const mix = [...countries].sort(() => 0.5 - Math.random()).slice(0, 15)
        
        console.log(mix)
            document.querySelector('#main').append(...Countries(mix))

    })



   

