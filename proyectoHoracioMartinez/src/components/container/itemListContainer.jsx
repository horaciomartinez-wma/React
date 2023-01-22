// let task = new Promise((aceptada, rechazada) => {
// 	//acciones asincronicas
// 	rechazada("rechazado");
// 	//aceptada("todo cool");
// });

import { gFetch } from "../../../utils/gfetch";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList/ItemList";
import { Link } from "react-router-dom";
const ItemListContainer = ({ saludo }) => {
	const [productos, setProductos] = useState([]);
	const [boolean, setBoolean] = useState(false);
	const [loading, setLoading] = useState(true);

	//console.log(task);
	//task.then((respuestaPromesa) => console.log(respuestaPromesa)).catch((err) => console.log(err));

	// task.then(
	// 	(respuestaPromesa) => console.log(respuestaPromesa),
	// 	(err) => console.log(err)
	// );

	useEffect(() => {
		gFetch()
			.then((respuestaPromesa) => {
				//console.log(respuestaPromesa);
				setProductos(respuestaPromesa);
			})
			.finally(() => setLoading(false));
	}, []);

	console.log(productos);

	return (
		<div>
			{/* <>ItemListContainer {saludo} </> */}
			{/* <button onClick={() => setBoolean(!boolean)}>Cambiar estado</button> */}
			{loading ? <h1>Cargando...</h1> : <ItemList productos={productos} />}
		</div>
	);
};

export default ItemListContainer;
