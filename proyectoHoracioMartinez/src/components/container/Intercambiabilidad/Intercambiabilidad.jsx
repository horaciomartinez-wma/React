import { useState } from "react";
import { Link } from "react-router-dom";

const InputCount = () => {
	return (
		<>
			<Link to="/cart">
				<button onClick={() => console.log("ir a cart")}>Ir a Cart</button>
			</Link>
			<Link to="/">
				<button onClick={() => console.log("ir a home")}>Seguir Comprando</button>
			</Link>
		</>
	);
};

const ButtonCount = (handleInter) => {
	return <button onClick={handleInter}></button>;
};

const Intercambiabilidad = () => {
	const [inputType, setInputType] = useState("button");
	const handleInter = () => {
		setInputType("input");
	};

	return (
		<div>
			<h2>Item Description</h2>
			{inputType == "button" ? <ButtonCount handleInter={handleInter}></ButtonCount> : <InputCount />}
		</div>
	);
};

export default Intercambiabilidad;
