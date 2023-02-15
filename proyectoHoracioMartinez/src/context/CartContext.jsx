import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
	const [cartList, setCartList] = useState([]);

	const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
		const [count, setCount] = useState(initial);
	};

	console.log(cartList);

	const vaciarCarrito = () => {
		setCartList([]);
	};

	const agregarCarrito = (producto, cant) => {
		//REVISAR SI EL PRODUCTA YA ESTA EN EL CARRITO
		const objIndex = cartList.findIndex((prod) => prod.id == producto.id);
		//cartList.length > 0
		//cartList.find((prod) => producto.id == prod.id)
		objIndex > -1
			? ((cartList[objIndex].cantidad = cartList[objIndex].cantidad + cant), setCartList([...cartList]))
			: setCartList([...cartList, { ...producto, cantidad: cant }]);
		console.log(cartList);
	};

	const cantidadTotal = () => cartList.reduce((accumulator, currentValue) => accumulator + currentValue.cantidad, 0);

	const PrecioTotal = () =>
		cartList.reduce((accumulator, currentValue) => accumulator + currentValue.cantidad * currentValue.precio, 0);

	const handleResta = () => {
		if (count >= initial) {
			setCount(count - 1);
		}
	};
	return (
		<CartContext.Provider
			value={{
				cartList,
				agregarCarrito,
				vaciarCarrito,
				cantidadTotal,
				PrecioTotal,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};
