import { handleOnAdd, handleResta, handleSuma } from "./itemCount";

export const ItemCountButtons = () => {
	return (
		<div className="card">
			<label htmlFor="">Cantidad: {count}</label>
			<div className="card-body">
				<button className="btn btn-outline-dark w-25" onClick={handleOnAdd}>
					Agregar al Carrito
				</button>
			</div>
			<div className="card-footer">
				<button className="btn btn-outline-dark w-25" onClick={handleResta}>
					-
				</button>
				<button className="btn btn-outline-dark w-25" onClick={handleSuma}>
					+
				</button>
			</div>
		</div>
	);
};
