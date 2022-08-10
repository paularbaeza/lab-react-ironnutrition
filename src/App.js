import './App.css';
import foodList from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';

import { useState } from 'react';



function App() {

//estados

  const [food, setFood] = useState(foodList)

  const addFood = (foodToAdd) => {
    const foodCopy = [...food]

    if(food.name!=="" && food.image !=="" && food.calories!==0 && food.servings!==0){
      foodCopy.push(foodToAdd)
  }

    setFood(foodCopy)
    console.log(foodCopy)
  }

  return (
    <div className="App">
    <br />
    <AddFoodForm addFoodFunction = {addFood}/>
    <br />
    <br />
      <h2>Food list</h2>

      <div id="each-food">
      {food.map((eachFood, index) => {
        return (
         <FoodBox eachFood= {eachFood} key={eachFood +index}/> 

        );
      })}
      </div>
<hr />
      
    </div>
  );
}

export default App;
