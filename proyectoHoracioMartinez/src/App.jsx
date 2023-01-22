import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//import "./App.css";
import ItemListContainer from "./components/container/itemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemDetailContainer from "./components/container/ItemDetailContainer/ItemDetailContainer";
// import  components from "./components/container/itemListContainer";

function App() {
	return (
		// <div className="App">
		// 	<h1>Vite + React</h1>

		// 	<Navbar />

		// 	{/* <ItemListContainer /> */}
		// </div>
		<BrowserRouter>
			<>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer saludo={"En Construccion..."} />} />
					<Route path="/categoria/:categoryId" element={<ItemListContainer saludo={"En Construccion..."} />} />
					<Route path="/detail/:detailId" element={<ItemDetailContainer />} />
					<Route path="*" element={<Navigate to="/" />} />
					{/* <ItemListContainer saludo={"En Construccion..."} /> */}
				</Routes>
			</>
		</BrowserRouter>
	);
}

export default App;
