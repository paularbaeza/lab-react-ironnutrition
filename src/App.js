import './App.css';
import foods from './foods.json';

const foodsArr = foods


function App() {



  return (
    <div>
    <h2>Food list</h2>
      {foodsArr.map ((eachFood, index) => {
        return (
          <div>
            <p>{eachFood.name}</p>
            <img src={eachFood.image} alt="food" width={100} />
          </div>
        )
      })}
    </div>
  );
}

export default App;
