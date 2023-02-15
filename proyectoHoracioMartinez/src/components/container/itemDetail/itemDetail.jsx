import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
import Intercambiabilidad from "../Intercambiabilidad/Intercambiabilidad";
import { ItemCount } from "../itemCount/itemCount";

export const ItemDetail = ({ producto }) => {
	const { agregarCarrito, cartList } = useCartContext();

	const [isInCart, SetIsInCart] = useState(false);
	const onAdd = (cant) => {
		SetIsInCart(true);
		agregarCarrito(producto, cant);
	};

	return (
		<div class="container py-5">
			<Intercambiabilidad />
			<div class="row justify-content-center">
				<div class="col-md-8 col-lg-6 col-xl-4">
					<div class="card text-black">
						<i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
						<img src={producto.imagen} class="card-img-top" alt="item imagen" />
						<div class="card-body">
							<div class="text-center">
								<h5 class="card-title">{producto.descripcionCorta}</h5>
								<p class="text-muted mb-4">{producto.title}</p>
							</div>

							<div class="d-flex justify-content-between total font-weight-bold mt-4">
								<span>Precio</span>
								<span>${producto.precio}</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			{producto.stock < 1 ? (
				<h5>
					{" "}
					<center>Articulo Agotado</center>
				</h5>
			) : (
				<div>
					{isInCart ? (
						<Link to="/cart">
							<button>Ir al carrito</button>
						</Link>
					) : (
						<ItemCount onAdd={onAdd} />
					)}
				</div>
			)}
		</div>
	);
};
