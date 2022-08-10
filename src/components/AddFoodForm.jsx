import React from 'react'
import { useState } from 'react'

function AddFoodForm(props) {
    const {addFoodFunction} = props

    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState(0)
    const [servings, setServings] = useState(0)

    const handleName = (event) => {
        //console.log(event.target.value)
        let inputNameValue=event.target.value
        setName(inputNameValue)
    }

    const handleImage = (event) => {
        //console.log(event.target.value)
        let inputImageValue=event.target.value
        setImage(inputImageValue)
    }
    
    const handleCalories = (event) => {
        //console.log(event.target.value)
        let inputCaloriesValue=Number(event.target.value)
        setCalories(inputCaloriesValue)
    }

    const handleServings = (event) => {
        //console.log(event.target.value)
        let inputServingsValue=Number(event.target.value)
        setServings(inputServingsValue)
    }

    const handleCreate = (event) => {
        
        event.preventDefault()
        
        const foodToAdd = {
            name,
            image, 
            calories,
            servings
        }
        console.log(foodToAdd)
        addFoodFunction(foodToAdd)
    }

  return (
    <div>
    <h3>AddFoodForm</h3>
    <form>
    <label htmlFor="name"></label>
    <input value={name} name="name" type="text" onChange={handleName} />

    <label htmlFor="image"></label>
    <input value={image} name="image" type="text" onChange={handleImage} />

    <label htmlFor="calories"></label>
    <input value={calories} name="calories" type="number" onChange={handleCalories} />

    <label htmlFor="servings"></label>
    <input value={servings} name="servings" type="number" onChange={handleServings} />

    <button onClick = {handleCreate}>Create</button>


    </form>
    </div>
  )
}

export default AddFoodForm