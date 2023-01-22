import { Link } from "react-router-dom";
export const Item = ({ producto }) => {
	return (
		<div key={producto.id} className="card w-25 mt-5 col-4">
			<div className="card-head">{producto.title}</div>
			<div className="card-body">
				{/* <img src="{producto.imagen}" alt="" width={20} /> */}
				<img
					// style="display: block;-webkit-user-select: none;margin: auto;cursor: zoom-in;background-color: hsl(0, 0%, 90%);transition: background-color 300ms;"
					src={producto.imagen}
					width="150"
					height="120"
				></img>
				<h6>Categoria: {producto.categoria}</h6>
				<h6>Precio: {producto.precio}</h6>
			</div>
			<div className="card-footer">
				<Link to={`/detail/${producto.id}`}>
					<button type="button" className="btn btn-outline-dark w-100">
						Ir a Detalle
					</button>
				</Link>
			</div>
		</div>
	);
};
