import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import User from "./User";
import { login, logout, onUserStateChange } from "../../api/fbase";

const Navbar = () => {
	const [userData, setUserData] = useState();

	useEffect(() => {
		onUserStateChange((user) => {
			setUserData(user);
		});
	}, []);

	console.log(userData);

	return (
		<header className="flex justify-between border-b border-gray-300 p-2">
			<Link to="/" className="flex items-center text-4xl text-brand">
				<FiShoppingBag />
				<h1>Shop</h1>
			</Link>
			<nav className="flex items-center gap-4 font-semibold">
				<Link to="/products">Products</Link>
				<Link to="/carts">Carts</Link>
				<Link to="/products/new" className="text-2xl">
					<BsFillPencilFill />
				</Link>
				{!userData ? (
					<button onClick={login}>Login</button>
				) : (
					<button onClick={logout}>Logout</button>
				)}
				{userData && <User user={userData} />}
			</nav>
		</header>
	);
};

export default Navbar;
