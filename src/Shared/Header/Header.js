import React from "react"
import logo from "../../images/logo2.png"
import "./header.css"
import { FiShoppingCart } from "react-icons/fi"
import { Link } from "react-router-dom"

const Header = () => {
	return (
		<div className="navigation-container">
			<nav>
				<Link to="/">
					<img src={logo} alt="" />
				</Link>
			</nav>
			<nav>
				<li>
					<Link to="/cart">
						<FiShoppingCart />
					</Link>
				</li>
				<Link to="/login">Login</Link>
				<li></li>
				<Link to="/register">Register</Link>
				<li></li>
			</nav>
		</div>
	)
}

export default Header
