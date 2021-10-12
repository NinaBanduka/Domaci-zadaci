import Form from "./components/Form.jsx"
import { getAllProducts } from "./Service.js";
import { useEffect, useState } from "react";
import ProductList from "./components/ProductList.jsx";
import Total from "./components/Total.jsx";



function App() {


  const [products, setProducts] = useState([])
  useEffect(()=>{
    getAllProducts().then(res => {
      setProducts(res.data)
      console.log(res.data)
    })
  },[])
  return (
    <div className="App">
      <Form setProducts={setProducts} products={products}/>
<ProductList products={products}/>
<Total/>



    </div>
  );
}

export default App;
