import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';

const foodsArr = foods;

function App() {
  return (
    <div className="App">
      <h2>Food list</h2>
      {foodsArr.map((eachFood, index) => {
        return (
          <div key={(eachFood, index)}>
            <p>{eachFood.name}</p>
            <img src={eachFood.image} alt="food" width={100} />
          </div>
        );
      })}

      <FoodBox
        food={{
          name: 'Orange',
          calories: 85,
          image: 'https://i.imgur.com/abKGOcv.jpg',
          servings: 1,
        }}
      />
    </div>
  );
}

export default App;
