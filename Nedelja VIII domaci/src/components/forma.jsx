import { useState } from "react"

const Form = ({setPrihodi, setRashodi}) => {

    let prihodi = [{
        Vrsta: 'prihod',
        Opis: 'prvi prihod',
        Iznos: '5000'
    }]

    let rashodi = [{
        Vrsta: 'rashod',
        Opis: 'prvi rashod',
        Iznos: '2000'
    }]

const [prihodi, setPrihodi] = useState(prihodi)
const [rashodi, setRashodi] = useState(rashodi)

const [odabranaTr, setOdabranaTr] = useState("")
const [opisTr, setOpisTr] = useState("")
const [iznosTr, setIznosTr] = useState("")

return (<>

<select name="select" id="select">
<option value="transakcija" selected = "true" disabled>Odaberite transakciju</option>
   <option value="prihod" onClick={(e)=> {

     setOdabranaTr(e.target.value)
    
   
    
    }
 }>Prihod</option>
   <option value="rashod"  onClick={(e)=> {

    setOdabranaTr(e.target.value)}}>Rashod</option>
</select>

<input value={text} onChange = {(e) => {setOpisTr(e.target.value)}} /> Opis transakcije

<input value={text} onChange = {(e) => {setIznosTr(e.target.value)}} /> Iznos transakcije

<button onClick = {() => {

if (odabranaTr == "prihod") {let noviPrihodi = [...prihodi, {Vrsta: odabranaTr, Opis: opisTr, Iznos: iznosTr}]
setPrihodi(noviPrihodi)}
else {let noviRashodi = [...rashodi, {Vrsta: odabranaTr, Opis: opisTr, Iznos: iznosTr}]
setRashodi(noviRashodi)}

}}>Unesi</button>
</>)}

export default Form
