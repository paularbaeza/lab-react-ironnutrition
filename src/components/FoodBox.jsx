import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
    //console.log(props)
    const {name, calories, image, servings} = props.eachFood
    const {deleteFunction} = props

    const deleteFood = (name) => {
      console.log(name)
      deleteFunction (name)
    }


  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>Total Calories: {calories*servings}</b> kcal
        </p>
        <Button type="primary" onClick={()=> deleteFood (name)}> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;
