import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//import "./App.css";
import ItemListContainer from "./components/container/itemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { CartContextProvider } from "./context/CartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/container/ItemDetailContainer/ItemDetailContainer";
import CartContainer from "./components/container/CartContainer/CartContainer";

import { app } from "../utils/firebase";
import { gFetch } from "../utils/firebase";

// import  components from "./components/container/itemListContainer";
console.log(app);
gFetch();
function App() {
	return (
		// <div className="App">
		// 	<h1>Vite + React</h1>

		// 	<Navbar />

		// 	{/* <ItemListContainer /> */}
		// </div>

		<CartContextProvider>
			<BrowserRouter>
				<>
					<NavBar />
					<Routes>
						<Route path="/" element={<ItemListContainer saludo={"En Construccion..."} />} />
						<Route path="/categoria/:categoryId" element={<ItemListContainer saludo={"En Construccion..."} />} />
						<Route path="/cart" element={<CartContainer />} />
						<Route path="/detail/:detailId" element={<ItemDetailContainer />} />
						<Route path="*" element={<Navigate to="/" />} />
						{/* <ItemListContainer saludo={"En Construccion..."} /> */}
					</Routes>
				</>
			</BrowserRouter>
		</CartContextProvider>
	);
}

export default App;
