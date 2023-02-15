import { Link } from "react-router-dom";
export const Item = ({ producto }) => {
	return (
		<div key={producto.id} className="card w-25 mt-5 col-4">
			<div className="card-head">{producto.title}</div>
			<div className="card-body">
				<img src={producto.imagen} width="150" height="120"></img>
				<h6>Categoria: {producto.categoria}</h6>
				<h6>Precio: {producto.precio}</h6>
			</div>
			<div className="card-footer">
				{producto.stock < 1 ? (
					<center>
						<p>Articulo Agotado</p>
					</center>
				) : (
					<Link to={`/detail/${producto.id}`}>
						<button type="button" className="btn btn-outline-dark w-100">
							Ir a Detalle
						</button>
					</Link>
				)}
			</div>
		</div>
	);
};
