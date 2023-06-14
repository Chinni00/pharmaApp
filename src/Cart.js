import './Cart.css'
import { context } from './App'
import { useContext, useState } from 'react'

const Cart = () => {
const [availableMedicine,onFormSubmit,cartItemsHandler,cartItems,onResetCart] = useContext(context)




  return (
    <div className='container'>
        <h1>Cart</h1>
        {cartItems.map(medicine=>
            <li key={medicine.id}>
                {medicine.medicineName}-{medicine.description}-{medicine.price}
            </li>
            )}
        <button onClick={onResetCart}>Generate Bill</button>
    </div>
  )
}

export default Cart