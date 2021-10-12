import { useState } from "react"
import { addProduct } from "../Service"


const Form = ({products},{setProducts}) => {

const [name, setName] = useState("")
const [price, setPrice] = useState("")
const [info, setInfo] = useState("")



return (
<>
<h1>Create new product:</h1>
<p>Name:</p>
<input type="text" placeholder="product name" onChange={(e)=>{

setName(e.target.value)
console.log(name)

}}/>

<p>Price:</p>
<input type="number" placeholder="product price" onChange={(e)=>{

setPrice(e.target.value)
console.log(price)

}}/>

<p>Info:</p>
<input type="text" placeholder="product info" onChange={(e)=>{

setInfo(e.target.value)
console.log(name)
console.log(price)
console.log(info)

}}/>

<button onClick={()=>{

let newProduct = {
    name,
    price,
    info   }

    addProduct(newProduct).then(res => {
    // setProducts(prev => [...prev, res.data])
    // console.log(products)
    })


}}>Add product</button>

</>
)

}

export default Form