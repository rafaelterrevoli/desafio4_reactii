import { useContext } from "react"
import { Button, Card } from "react-bootstrap"
import { AppContext } from "../context/AppContext"
import { useNavigate } from "react-router-dom"


const PizzaCard = ({pizza}) => {
  const {img, ingredients, name, price, id} = pizza
  const {cart, setCart, formatName} = useContext(AppContext)

  const navigate = useNavigate()

  const addCart = () => {
    const pizzaIndex = cart.findIndex(item => item.id === pizza.id)
    if (pizzaIndex !== -1) {
      const updatedCart = cart.map((item, index) =>
        index === pizzaIndex ? { ...item, count: item.count + 1  } : item
      );
      setCart(updatedCart);
    } else {
      const updatedPizza = { ...pizza, count: 1 };
      const updatedCart = [...cart, updatedPizza ];
      setCart(updatedCart);
    }
  }

  const handleDetail = (id) => {
    navigate(`./${id}`)
  }

    return (
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{formatName(name)}</Card.Title>
          <h6>Ingredientes:</h6>
            <ul>
              {ingredients.map((ing, index) => {
                return (
                <div key={index}>
                  🍕 {formatName(ing)}
                </div>)}
              )}
            </ul>
        </Card.Body>
        <Card.Footer className="text-center d-flex justify-content-between">
          <h4>${price}</h4>
          <div>
            <Button 
              onClick={() => handleDetail(id)}
              size="sm"
              className="me-1 text-white"
              variant="primary">
                 Ver más 👀
            </Button>
            <Button onClick={() => addCart()} size="sm" className="me-1 text-white" variant="danger">
                 Añadir 🛒
            </Button>
          </div>
        </Card.Footer>
      </Card>
    )
  }


export default PizzaCard