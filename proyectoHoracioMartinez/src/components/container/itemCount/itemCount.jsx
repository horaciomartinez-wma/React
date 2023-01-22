import React from "react";
import { useState } from "react";

export const itemCount = (initial = 1, stock, onAdd) => {
	const [count, setCount] = useState(initial);
	const handleSuma = () => {
		if (count <= stock) {
			setCount(count + 1);
		}
	};
	const handleResta = () => {
		if (count >= initial) {
			setCount(count - 1);
		}
	};
	return (
		<div className="card">
			<div className="card-body"></div>
			<div className="card-footer">
				<button className="btn btn-outline-dark w-100" onClick={handleSuma}></button>
				<button className="btn btn-outline-dark w-100" onClick={handleResta}></button>
			</div>
		</div>
	);
};
