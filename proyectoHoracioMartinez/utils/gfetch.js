let productos = [
	{
		id: "1",
		categoria: "perifericos",
		descripcionCorta: "Mouse",
		title:
			"Logitech MX Master 3S - Mouse Inalámbrico de Desempeño, Scrolling Ultra-rápido, 8K dpi, Seguimiento sobre Vidrio, Clics Silenciosos, USB-C, Bluetooth, Windows, Linux, Chrome - Grafito",
		precio: 1439.0,
		imagen: "https://m.media-amazon.com/images/I/616ljqKS+xL._AC_SL1500_.jpg",
	},
	{
		id: "2",
		categoria: "laptops",
		descripcionCorta: "Laptop",
		title:
			'Acer A315-58-34S8 Laptop Aspire 3 Core i3 / 8GB / 128GB SSD + 1TB HDD/ 15.6" / Gráficos Intel UHD Graphics / Plata',
		precio: 7999.0,
		imagen: "https://m.media-amazon.com/images/I/715ht-tvp1S._AC_SL1500_.jpg",
	},
];

export const gFetch = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(id ? productos.find((prod) => prod.id == id) : productos);
		}, 1000);
	});
};
