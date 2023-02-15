import { useContext } from "react";
import { useCartContext } from "../../../context/CartContext";
import { handleOnAdd, handleResta, handleSuma } from "../ItemCount/ItemCount";

import "./CartContainer.css";
const CartContainer = () => {
	const { cartList, vaciarCarrito, PrecioTotal, cantidadTotal } = useCartContext();

	return (
		<div className="body">
			<div className="CartContainer">
				<div className="Header">
					<h3 className="Heading">Shopping Cart</h3>
					<button onClick={vaciarCarrito} className="Action">
						Vaciar Carrito
					</button>
				</div>

				{cartList.map((prod) => (
					<div key={prod.id} className="Cart-Items">
						<div className="image-box">
							<img src={prod.imagen} height="120px" />
						</div>
						<div className="about">
							<h6 className="title">{prod.descripcionCorta}</h6>
							<h6 className="subtitle">{prod.title}</h6>
						</div>
						<div className="counter">
							<div className="btn">+</div>
							<div className="count">{prod.cantidad}</div>
							<div className="btn" onClick={handleResta}>
								-
							</div>
						</div>
						<div className="prices">
							<div className="amount">${prod.precio}</div>

							<div className="remove">
								<u>Remove</u>
							</div>
						</div>
					</div>
				))}

				<hr />
				<div className="checkout">
					<div className="total">
						<div>
							<div className="Subtotal">Total</div>
							<div className="items">{cantidadTotal()} articulo(s)</div>
						</div>
						<div className="total-amount">${PrecioTotal()}</div>
					</div>

					<button className="button">Checkout</button>
				</div>
			</div>
		</div>
	);
};
export default CartContainer;
