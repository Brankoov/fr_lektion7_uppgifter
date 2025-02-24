import { useState } from 'react'
import './App.css'
import { Product, ProductProps } from './components/Product'





function App() {

  const [productList, setProductList] = useState<ProductProps[]> ([
    { 
      name:"Spoon",
      price: 50,
      isOnSale: false,
    },
    {
      name:"Fork",
      price: 45,
      isOnSale: true,
    },
    {
      name: "Plate",
      price: 100,
      isOnSale: true
    }
  ]);
  return (
    <>
      <h1>Produkter</h1>
      {productList.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </>
  )
}

export default App
