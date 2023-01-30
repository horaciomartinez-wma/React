import { gFetch } from "../../../utils/gfetch";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ saludo }) => {
	const [productos, setProductos] = useState([]);
	const [boolean, setBoolean] = useState(false);
	const [loading, setLoading] = useState(true);
	const { categoryId } = useParams();
	console.log(categoryId);

	useEffect(() => {
		gFetch()
			.then((respuestaPromesa) => {
				console.log(respuestaPromesa);
				!categoryId
					? setProductos(respuestaPromesa)
					: setProductos(respuestaPromesa.filter((items) => items.categoria == categoryId));
			})
			.finally(() => setLoading(false));
	}, [categoryId]);

	return <div>{loading ? <h1>Cargando...</h1> : <ItemList productos={productos} />}</div>;
};

export default ItemListContainer;
