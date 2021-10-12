// # Mini kalkulator

// * Napraviti komponentu kalkulator  koja sadrzi sledece:
//     - input polje samo za prikaz trenutnog rezultata
//     - input number polje za unos broja
//     - dugmice za operacije (+-*/) 
//     - dugme za resetovanje rezultata na 0 (clear)

// * Prikazati komponentu u aplikaciji
// * Korisnik moze da unosi broj i bira operaciju koja se izvrsava nad starim (prethodnim rezultatom)
//  i novim brojem klikom na dugme operacije.
// * Ispod se prikazuje paragraf sa tekstom koji prikazuje korake kojima se doslo do rezultata 
// (uraditi bez zagrada,sa zagradama je komplikovanije), tekst se takodje resetuje na prazan string kada se
//  i rezutat resetuje (klikom na clear).

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
