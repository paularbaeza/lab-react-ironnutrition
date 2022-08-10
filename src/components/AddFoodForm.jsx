import { useState } from 'react'

import { Divider, Input } from 'antd';


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
        //console.log(foodToAdd)
        addFoodFunction(foodToAdd)

        setName("")
        setImage("")
        setCalories(0)
        setServings(0)
    }

  return (
    <form>
    <Divider>Add Food Entry</Divider>
    
    <label htmlFor="name">Name</label>
    <Input value={name} type="text" onChange={handleName}/>


    <label htmlFor="image">Image</label>
    <Input value={image} name="image" type="text" onChange={handleImage} />

    <label htmlFor="calories"></label>
    <Input value={calories} name="calories" type="number" onChange={handleCalories} />

    <label htmlFor="servings"></label>
    <Input value={servings} name="servings" type="number" onChange={handleServings} />

    <button onClick = {handleCreate}>Create</button>


    </form>
    
  )
}

export default AddFoodForm

