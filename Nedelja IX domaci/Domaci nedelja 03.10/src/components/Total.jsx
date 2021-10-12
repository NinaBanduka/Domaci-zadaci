

const Total = ({Product}) => {

return (
<>

<hr/>
   <p>Total price: {1500}</p> 
    <p>Tax: 15%</p>
 <p> Total price including tax: {1500 + (1500 * 0.15)}</p>  

</>
)

}

export default Total