import React, { Component } from "react";

export class Navbar extends Component {
	render() {
		return (
			<nav class="navbar navbar-default">
				<div class="container-fluid">
					<div class="navbar-header">
						<a class="navbar-brand" href="#">
							<img alt="Brand" src="compumundo.jpg" height={200}></img>
						</a>
						<ul>
							<li>
								<a href="/">Laptops</a>
							</li>
							<li>
								<a href="/">De Escritorio</a>
							</li>
							<li>
								<a href="/">Tablets</a>
							</li>
							<li>
								<a href="/">Accesorios</a>
							</li>
							<li>
								<a href="/">Nosotros</a>
							</li>
							<li>
								<a href="/">Otros</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
