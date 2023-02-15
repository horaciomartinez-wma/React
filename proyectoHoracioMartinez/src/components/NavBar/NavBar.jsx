import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "../CartWidget/CartWidget";

const NavBar = () => {
	return (
		<>
			<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
				<Container>
					<NavLink to="/">React-Bootstrap</NavLink>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<NavLink
								className={({ isActive }) => (isActive ? "btn btn-success" : "btn btn-dark")}
								to="/categoria/perifericos"
							>
								Perifericos
							</NavLink>
							<NavLink
								className={({ isActive }) => (isActive ? "btn btn-success" : "btn btn-dark")}
								to="/categoria/laptops"
							>
								Laptops
							</NavLink>
						</Nav>
						<Nav>
							<CartWidget />
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</>
	);
};

export default NavBar;
