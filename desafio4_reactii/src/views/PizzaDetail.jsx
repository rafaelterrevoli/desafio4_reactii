import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { Row, Card, Button } from "react-bootstrap";

const PizzaDetail = () => {
  const { id } = useParams();
  const { pizzas, cart, setCart, formatName } = useContext(AppContext);
  const [count, setCount] = useState(1);
  const selectedPizza = pizzas.find((pizza) => pizza.id === id);

  const addCart = () => {
    const pizzaIndex = cart.findIndex((item) => item.id === selectedPizza.id);
    if (pizzaIndex !== -1) {
      const updatedCart = cart.map((item, index) =>
        index === pizzaIndex ? { ...item, count: item.count + count } : item
      );
      setCart(updatedCart);
    } else {
      const updatedPizza = { ...selectedPizza, count: count };
      const updatedCart = [...cart, updatedPizza];
      setCart(updatedCart);
    }
  };

  const { name, img, desc, ingredients, price } = selectedPizza;

  return (
    <Row className="pt-5" style={{width: '500px', margin: 'auto'}}>
      <Card.Img variant="top" src={img} />
        <h2 style={{paddingTop: '20px'}} className="text-center mb-3">{formatName(name)}</h2>
        <hr />
        <p>{desc}</p>
        <h6>Ingredientes:</h6>
        <ul>
          {ingredients.map((ing, index) => {
            return <div key={index}>🍕 {formatName(ing)}</div>;
          })}
        </ul>
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex align-items-center">
            <span className="px-3 fs-4">Precio: ${count * price}</span>
          </div>
          <Button
            onClick={() => addCart()}
            size="sm"
            className="me-1 text-white"
            variant="danger">
            Añadir 🛒 
          </Button>
        </div>
      
    </Row>
  );
};

export default PizzaDetail;
