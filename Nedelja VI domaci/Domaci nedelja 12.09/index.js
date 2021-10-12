// /**
// Zadatak
// Treba implementirati simulaciju kupovine.

// U kupovini najpre postoje grupe proizvoda (ProductGroup), svaka grupa ima sledeca polja:
//     - title (naziv grupe, string koji nije prazan)
//     - vat (Value Added Tax ili na srpskom PDV, decimalni broj veci od nule manji od 100
//         predstavlja visinu PDV-a izrazenog u procentima koju ima svaki proizvod koji pripada grupi)

// Tu su i proizvodi (Product), svaki proizvod karakterise sledece:
//     - barCode (Bar kod proizvoda, celobrojna vrednost koja je veca od nule)
//     - title (naziv proizvoda, string koji nije prazan)
//     - price (decimalna vrednost veca od nule, predstavlja cenu proizvoda BEZ PDV-a!!!!!!)
//     - group (polje koje ukazuje na grupu kojoj proizvod pripada)

// Prilikom kupovine kreira se korpa (ShoppingCart) koja sadrzi stavke (ShoppingCartItem).
// Svaka korpa (ShoppingCart)  u sebi moze da ima vise stavki (ShoppingCartItem - a) i cuva ih u atributu "items".

// Svaka stavka korpe (ShoppingCartItem) sadrzi sledece:
//     - product (polje koje ukazuje na proizvod)
//     - quantity (decimalna vrednost veca od nule, koja ukazuje na kolicinu proizvoda u korpi)

// Svaka korpa (ShoppingCart) treba da ima sledecu funkcionalnost:
//     - addProduct(product, quantity = 1) - metoda kojom se neki proizvod (product)
//         dodaje u korpu za odredjenu kolicinu (quantity). Prilikom dodavanja u korpu, ukoliko proizvod
//         nije ranije bio dodat kreira se nova stavka korpe (ShoppingCartItem) i upisuje se kolicina koja se dodaje.
//         Ukoliko je proizvod ranije vec dodat u korpu, u stavci na kojoj se nalazi proizvod uvecava se postojeca kolicina za onu koju dodajemo.

// Na kraju kupovine odlazi se na kasu (Checkout).
// Kasa (Checkout) ima mogucnost da stampa fiskalni racun za korpu kroz sledecu funkcionalnost:
//     - printCheck(shoppingCart)
// Fiskalni racun se stampa u HTML tabeli koja ima sledeci format (data vam je html struktura sa tabelom samo sa hederom):

// *********************************************************************************************
// Prod Group	        Product	                Price	        Quantity	    VAT	    Subtotal
// Mlecni proizvodi	Mleko	                100	            2	            20	    200
// Mlecni proizvodi	Pavlaka	                50	            2	            10	    100
// Bezalkoholno pice	Sok od pomorandze 1l	120	            6	            40  	720
// Sveze meso	        Juneci but kg	        800	            0.5	            30	    400
// Konditori	        Cokolada Milka 300g	    280	            3	            100	    840

// VAT/TOTAL	200/2260
// *********************************************************************************************

// Jedan red u tabeli predstavlja jednu stavku iz korpe.
// U koloni "Prod. Group" se upisuje naziv grupe proizvoda.
// U koloni "Product" se upisuje naziv proizvoda.
// U koloni "Price" upisuje se cena po komadu SA PDV-om!!!
// U koloni "Quantity" upisuje se kolicina proizvoda u korpi tj stavci korpe.
// U koloni "VAT" upisuje se ukupan porez za unetu kolicinu proizvoda
// U kolonu "Subtotal" upisuje se ukupan iznos za unetu kolicinu proizvoda.

// Nakon ispisa stavki tabele u tfoot-u tabele ispisuje se ukupan porez i ukupnan iznos za celu korpu, u poslednje dve kolone.


// Kreirati dve grupe proizvoda i 4 proizvoda.
// Kreirati jednu korpu.
// Dodati svaki proizvod u korpu vise puta.
// Kreirati kasu i prikazati fiskalni racun.
//  */

// // let obj = {
// //     name: "Danilo",
// //     lastName: "strahinovic",
// //     group: {    //group instanceof ProductGroup

// //     }
// // }

// // let group = new ProductGroup('Title', 20)

// // let proizvod = new Product("title", 500, 101001, group)



class ProductGroup {
    title
    VAT
    constructor(title, VAT) {
        this.title = title
        this.VAT = VAT
    }
    get ProductGroup() {
        return this.ProductGroup
    }

}

class Product {
    barcode
    title
    price
    group

    constructor(barcode, title, price, group) {
        this.barcode = barcode
        this.title = title
        this.price = price
        this.group = group
    }

}



let Mlecni_Proizvodi = new ProductGroup('MlecniProizvod', 20)
let Voce = new ProductGroup('Voce', 15)

let Mleko = new Product(1245, 'Mleko', 200, Mlecni_Proizvodi)
let Jogurt = new Product(3245, 'Jogurt', 300, Mlecni_Proizvodi)
let Jabuke = new Product(4566, 'Jabuke', 100, Voce)
let Kupine = new Product(6578, 'Kupine', 400, Voce)


class ShoppingCart {
   static CartItems = []

    constructor() { }

    get CartItems() {
        return this.CartItems
    }

   static addProduct(product, quantity) {

let postoji = this.CartItems.forEach(item => (item.product.Barkod == product.Barkod))
    
if (!postoji) {
        let item1 = new CartItem(product, quantity)
            this.CartItems.push(item1)
            console.log(this.CartItems)
     }
                else { 
                this.CartItems.map(item => { if (item.product.title == product.title) item.quantity += quantity })
                   console.log('-----------------------------');
                    console.log(this.CartItems)
                }

};
    

//     let postoji = this.CartItems.find(item => item.product.Ime == product.Ime)
// console.log(product.Barkod)
    
     


}

class CartItem {
    product
    quantity
    constructor(product, quantity) {
        this.product = {Ime: product.title,
            Barkod: product.barcode,
            Cena: product.price,
            grupa: product.group.title        
        }
        this.quantity = quantity
    }

}


ShoppingCart.addProduct(Mleko, 3)
ShoppingCart.addProduct(Mleko, 1)
// ShoppingCart.addProduct(Mleko, 2)
ShoppingCart.addProduct(Jogurt, 1)
ShoppingCart.addProduct(Jabuke, 2)




class Checkout {
    static check
    constructor()
{}
    static printCheck(shoppingCart) {

        console.log('ovo su' +  shoppingCart.CartItems)

        shoppingCart.CartItems.forEach(item => {
            
            let tabela = document.querySelector('#tabela')

            let noviItem = document.createElement('tr')
            noviItem.innerHTML = `
            
            <td style="width: 300px;">${item.group}</td>
            <td style="width: 300px;">${item.title}</td>
            <td style="width: 300px;">${item.price}</td>
            <td style="width: 300px;">${item.quantity}</td>
            <td style="width: 300px;">${item.group.VAT}</td>
            <td style="width: 300px;">${item.price * item.quantity}</td>
            `
            tabela.append(noviItem)


        });


    }
}

Checkout.printCheck(ShoppingCart)

