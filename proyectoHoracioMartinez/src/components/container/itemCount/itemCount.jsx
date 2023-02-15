import { useState } from "react";
export const ItemCount = ({ initial = 1, stock = 10, onAdd }) => {
	const [count, setCount] = useState(initial);
};
export const handleSuma = () => {
	if (count <= stock) {
		setCount(count + 1);
	}
};
export const handleResta = () => {
	if (count >= initial) {
		setCount(count - 1);
	}
};
export const handleOnAdd = () => {
	onAdd(count);
};
