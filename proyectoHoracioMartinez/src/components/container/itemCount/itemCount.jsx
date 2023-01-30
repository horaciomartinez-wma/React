import { useState } from "react";
export const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
	const [count, setCount] = useState(initial);
	console.log(count);
	const handleSuma = () => {
		if (count <= stock) {
			setCount(count + 1);
			console.log(count);
		}
	};
	const handleResta = () => {
		if (count >= initial) {
			setCount(count - 1);
			console.log(count);
		}
	};

	return (
		<div className="card">
			<label htmlFor="">Cantidad: {count}</label>
			<div className="card-body">
				<button className="btn btn-outline-dark w-25">Agregar al Carrito</button>
			</div>
			<div className="card-footer">
				<button className="btn btn-outline-dark w-25" onClick={handleSuma}>
					+
				</button>
				<button className="btn btn-outline-dark w-25" onClick={handleResta}>
					-
				</button>
			</div>
		</div>
	);
};
