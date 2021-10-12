import { useState } from "react";

export const Digitron = () => {

    const [trenutniRezultat, setTrenutniRezultat] = useState('0')
    const [prviBr, setPrviBr] = useState('0')
const [noviBr, setNoviBr] = useState('0')
    return(
<>

<input value={prviBr} placeholder="unesite broj" onChange={(e)=> {
    
    setPrviBr(e.target.value)
    setTrenutniRezultat(trenutniRezultat)}}/>
<input value={noviBr} placeholder="unesite broj" onChange={(e)=> {

setNoviBr(e.target.value)
}
}/>

<button onClick={(e)=>{

let rezultat = Number(prviBr) + Number(noviBr)
setTrenutniRezultat(rezultat)

console.log(trenutniRezultat)

setPrviBr(rezultat)
setNoviBr('')
} } >+</button>
<button onClick={(e)=>{

let rezultat = Number(prviBr) - Number(noviBr)
setTrenutniRezultat(rezultat)

setPrviBr(rezultat)
setNoviBr('')
}} >-</button>
<button onClick={(e)=>{

let rezultat = (Number(prviBr) * Number(noviBr))
setTrenutniRezultat(rezultat)
setPrviBr(rezultat)
setNoviBr('')
}}
>*</button>
<button onClick={(e)=>{

let rezultat = Number(prviBr) / Number(noviBr)
setTrenutniRezultat(rezultat)


setPrviBr(rezultat)
setNoviBr('')
}}>/</button>
<button onClick={()=>{
setPrviBr(0)
setNoviBr(0)
setTrenutniRezultat(0)

}} >Clear</button>
{
<p>{trenutniRezultat}</p>

}

</>


)
}