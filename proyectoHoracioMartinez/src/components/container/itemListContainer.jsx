//import { gFetch } from "../../../utils/gfetch";
import { gFetch, gFetchByCategory } from "../../../utils/firebase";
import { useEffect, useState } from "react";
import { ItemList } from "./ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";

const ItemListContainer = ({ saludo }) => {
	const [productos, setProductos] = useState([]);
	const [boolean, setBoolean] = useState(false);
	const [loading, setLoading] = useState(true);
	const { categoryId } = useParams();
	console.log(categoryId);

	useEffect(() => {
		!categoryId
			? gFetch()
					.then((respuestaPromesa) => {
						setProductos(respuestaPromesa);
					})
					.finally(() => setLoading(false))
			: gFetchByCategory(categoryId)
					.then((respuestaPromesa) => {
						setProductos(respuestaPromesa);
					})
					.finally(() => setLoading(false));

		// gFetch()
		// 	.then((respuestaPromesa) => {
		// 		//console.log(respuestaPromesa);
		// 		!categoryId
		// 			? setProductos(respuestaPromesa)
		// 			: setProductos(respuestaPromesa.filter((items) => items.categoria == categoryId));
		// 	})
		// 	.finally(() => setLoading(false));
	}, [categoryId]);

	return <div>{loading ? <Loader /> : <ItemList productos={productos} />}</div>;
};

export default ItemListContainer;
