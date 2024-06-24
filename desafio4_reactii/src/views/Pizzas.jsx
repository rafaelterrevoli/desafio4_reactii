import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { Col, Row } from "react-bootstrap"
import PizzaCard from "../components/PizzaCard"

const Pizzas = () => {
  const {pizzas} = useContext(AppContext)

  return (
    <>
    <div className="header_img">
    <h1>¡Pizzería Mamma Mia!</h1>
    <p className="hero-sub">¡Tenemos las mejores pizzas que podrás econtrar!</p>
  </div>
    <Row className="g-3">
      {pizzas.map(pizza => 
        <Col key={pizza.id} sm={6} md={4}>
          <PizzaCard pizza={pizza} from={'pizzas'} />
        </Col>
      )}
    </Row>
    </>
  )
}

export default Pizzas