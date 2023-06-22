import { useContext, useState } from "react"
import { context } from "./App"



const AvailableMedicine = () => {
    const [availableMedicine,onFormSubmit,cartItemsHandler] = useContext(context);


    const addToCartHandler=(medicine)=>{
        cartItemsHandler(medicine)
        
    }

    const rupeeSymbol = "\u20B9"
    
  return (
    <ul>
       {availableMedicine.map(medicine=>
        <li key={medicine.id}> {medicine.medicineName} - {medicine.description} - {rupeeSymbol} {medicine.price} <button onClick={()=>{addToCartHandler(medicine)}} >Add to Cart</button> </li>
      )} 
    </ul>
  )
}

export default AvailableMedicine