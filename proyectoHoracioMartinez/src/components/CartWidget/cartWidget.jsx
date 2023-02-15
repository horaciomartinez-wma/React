import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

export const CartWidget = () => {
	//const { cantidadTotal } = useContext(CartContext);
	//const { cantidadTotal } = CartContext();
	const { cantidadTotal } = useCartContext();

	let countInCart = cantidadTotal();
	console.log(cantidadTotal());
	// return <>{countInCart > 0 && <Link to="/cart">🛒 {countInCart}</Link>}</>;
	return <>{countInCart > 0 ? <Link to="/cart">🛒 {countInCart}</Link> : <Link to="/cart">🛒 </Link>}</>;
};
