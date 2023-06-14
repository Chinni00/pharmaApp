import logo from './logo.svg';
import './App.css';
import Form from './Form';
import AvailableMedicine from './AvailableMedicine';
import { useState } from 'react';
import { createContext } from 'react';
import { Router,Routes,Route,Link } from 'react-router-dom';
import Cart from './Cart';

export const context= createContext();



function App() {
  const [cartItems,setCartItems] = useState([]);
  const [isCartShow ,setIsCartShow] =useState(false)
  const[availableMedicine,setAvailableMedicine]= useState([
    {
        id:1,
        medicineName:'paracetmol',
        description:'used for fever',
        price:50,
    },
    {
        id:2,
        medicineName:'dolo',
        description:'used for fever',
        price:100,
    }
])

const cartItemsHandler = (medicine) => {
  setCartItems((prevMedicine) => [...prevMedicine, medicine]);
};



const onFormSubmit =(medicine)=>{
  setAvailableMedicine(prevMedicine=>[...prevMedicine,medicine])
}

  return (
   

    <context.Provider value={[availableMedicine,onFormSubmit,cartItemsHandler,cartItems]} className="App">
       <div  >{isCartShow && <Cart />} <p style={{cursor:'pointer',textAlign:'end',marginRight:'100px'}} onClick={()=>{setIsCartShow(!isCartShow)}}>Cart</p></div> 
     <Form />
     <AvailableMedicine  />
    </context.Provider>
    
  );
}

export default App;
