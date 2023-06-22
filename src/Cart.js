import './Cart.css'
import { context } from './App'
import { useContext, useEffect, useState } from 'react'

const Cart = () => {
const [availableMedicine,onFormSubmit,cartItemsHandler,item,onResetCart,tota] = useContext(context)
const [cartItems,setCartItems]= useState([])
const [total,setTotal] = useState(0)

useEffect(()=>{
  const localStorageCartItems = JSON.parse(localStorage.getItem('medicine'))
  const localStorageTotal = localStorage.getItem('total')
  setCartItems(localStorageCartItems)
  setTotal(localStorageTotal)
},[cartItems])




  return (
    <div className='container'>

        <h1>Cart</h1>
        {cartItems==null ? <p>no items added in cart</p>: 
        <>
        {cartItems.map(medicine=>
            <li key={medicine.id} >
                {medicine.medicineName}-{medicine.description}-{medicine.price}
            </li>
            )}
        <h3>Total Bill : {total}</h3>
        <button onClick={onResetCart}>Generate Bill</button>
        </>
 } 
    </div>
  )
}

export default Cart