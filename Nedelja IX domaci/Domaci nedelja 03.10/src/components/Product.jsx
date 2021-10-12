import { useState } from "react"

const Product = ({product}) => {

const [quantity, setQuantity] = useState(0)
const[info, setInfo] = useState("")

return (

<div>

<p>{product.name}</p> <br/>
<p>Price: {product.price}</p> <br/>

<button onClick={()=>{
setInfo(product.info)

}} >Info</button>

<p>{info}</p> <br/>

<p>Quantity:{quantity}</p>
<button onClick={()=>{

let tmp = quantity
if(quantity<20){setQuantity(tmp+1)}


}}>+</button>
<button onClick={()=>{

let tmp = quantity
if(quantity>0){setQuantity(tmp-1)}

}}>-</button>



</div>


)


}

export default Product