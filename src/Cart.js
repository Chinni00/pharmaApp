import './Cart.css'
import { context } from './App'
import { useContext } from 'react'

const Cart = () => {
const [cartItems] = useContext(context)



  return (
    <div className='container'>
        <h1>Cart</h1>
        {cartItems.map(medicine=>
            <li key={medicine.id}>
                {medicine.medicineName}-{medicine.description}-{medicine.price}
            </li>
            )}
        <button>Generate Bill</button>
    </div>
  )
}

export default Cart