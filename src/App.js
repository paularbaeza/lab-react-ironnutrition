import './App.css';
import foodList from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';

const foodsArr = foodList;


function App() {

//estados

  const [food, setFood] = useState(foodList)

  return (
    <div className="App">
      <h2>Food list</h2>


      {foodsArr.map((eachFood, index) => {
        return (
         <FoodBox eachFood= {eachFood} key={eachFood +index}/>
        );
      })}

    </div>
  );
}

export default App;
