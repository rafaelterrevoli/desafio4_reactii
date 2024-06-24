import { useContext } from "react";
import { Button, Table } from "react-bootstrap";
import { AppContext } from "../context/AppContext";

const Cart = () => {
  const { cart, total, formatName } = useContext(AppContext);

  return (
    <>
      <h3 style={{ paddingTop: "50px" }}>Detalles del pedido:</h3>
      <Table bordered hover>
        <thead>
          <tr>
            <th>Cantidad</th>
            <th>Nombre</th>
            <th>Pizza</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((pizza) => {
            return (
              <tr key={pizza.id}>
                <td className="align-items-center">
                  <span>{pizza.count}</span>
                </td>
                <td>{formatName(pizza.name)}</td>
                <img
                  className="img_cart"
                  src={pizza.img}
                  alt="Imagen del pizza"
                />
                <td>${pizza.price * pizza.count}</td>
              </tr>
            );
          })}
          <tr>
            <td
              colSpan={4}
              className="text-end"
              style={{ backgroundColor: "#eaeaea" }}>
              <b>Total Pagar:</b> ${total}
            </td>
          </tr>
        </tbody>
      </Table>
      <div className="d-flex justify-content-end">
        <Button variant="success" className="text-white">
          Ir a Pagar
        </Button>
      </div>
    </>
  );
};

export default Cart;
