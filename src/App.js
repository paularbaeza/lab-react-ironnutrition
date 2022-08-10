import './App.css';
import foodList from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

import { useState } from 'react';



function App() {

//estados

  const [food, setFood] = useState(foodList)
  const [displayedFood, setDisplayedFood] =useState(foodList)

  const addFood = (foodToAdd) => {
    const foodCopy = [...food]
    const displayedFoodCopy= [...displayedFood]

    if(food.name!=="" && food.image !=="" && food.calories!==0 && food.servings!==0){
      foodCopy.push(foodToAdd)}
    if(displayedFood.name!=="" && displayedFood.image !=="" && displayedFood.calories!==0 && displayedFood.servings!==0){
    displayedFoodCopy.push(foodToAdd)}

    setFood(foodCopy)
    setDisplayedFood(displayedFoodCopy)
    //console.log(foodCopy)
  }

  const filterFood = (searchValue) => {
    //console.log(search)
    let searchResults = food.filter((eachFood)=> {
      return eachFood.name.includes (searchValue)      
    })
    setDisplayedFood(searchResults)
  }

  return (
    <div className="App">
    <Search filterFunction={filterFood}/>
    <br />
    <AddFoodForm addFoodFunction = {addFood}/>
    <br />
    <br />
      <h2>Food list</h2>

      <div id="each-food">
      {displayedFood.map((eachFood, index) => {
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
