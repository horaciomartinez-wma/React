import { Item } from "../item/item";

export const ItemList = ({ productos }) => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
			}}
		>
			{productos.map((producto) => (
				<Item key={producto.id} producto={producto} />
			))}
		</div>
	);
};
