import { useContext, useState } from "react"
import { context } from "./App"

const Form = () => {
  const[availableMedicine,onFormSubmit] = useContext(context);
  const[medicineName,setMedicineName] = useState('')
  const[description,setDescription] = useState('')
  const[price,setPrice] = useState('')

     const medicine ={
        id:Math.random(),
        medicineName,
        description,
        price
        
     }

     const medicineNameHandler=(e)=>{
        setMedicineName(e.target.value)
     }

     const descriptionHandler=(e)=>{
        setDescription(e.target.value)
     }

     const priceHandler=(e)=>{
        setPrice(e.target.value)
     }

      const onSubmitHandler=(e)=>{
        e.preventDefault()
        onFormSubmit(medicine)
      }

  return (
    <form onSubmit={onSubmitHandler}>
        <label htmlFor="medicineName">Medicine Name</label>
        <input name="medicineName" value={medicineName} id="medicineName" onChange={medicineNameHandler} ></input>
        <label htmlFor="description">Description</label>
        <input name="description" value={description} id="description" onChange={descriptionHandler} ></input>
        <label htmlFor="price">Price</label>
        <input name="price" id="price" value={price} onChange={priceHandler}></input>
        <button type="submit" >Add To Product</button>
    </form>
  )
}

export default Form