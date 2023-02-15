import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

//import { gFetch } from "../../../../utils/gfetch";
import { gFetchById } from "../../../../utils/firebase";
import { ItemDetail } from "../itemDetail/itemDetail";
import { Loader } from "../../Loader/Loader";

const ItemDetailContainer = () => {
	const [loading, setLoading] = useState(true);
	const [producto, setProducto] = useState([]);
	const { detailId } = useParams();
	console.log(detailId);
	useEffect(() => {
		gFetchById(detailId)
			.then((respuestaPromesa) => {
				console.log(respuestaPromesa);
				setProducto(respuestaPromesa);
			})
			.finally(() => setLoading(false));
	}, [detailId]);

	if (loading) return <Loader />;

	return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
