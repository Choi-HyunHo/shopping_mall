import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";

// 구글 로그인
import {
	GoogleAuthProvider,
	signInWithPopup,
	setPersistence,
	browserSessionPersistence,
	signOut,
} from "firebase/auth";

import { auth } from "../../api/fbase";

const Navbar = () => {
	const [userData, setUserData] = useState();

	const handleGoogleLogin = () => {
		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				const provider = new GoogleAuthProvider();
				signInWithPopup(auth, provider)
					.then((data) => {
						setUserData(data.user);
						console.log(data);
					})
					.catch((err) => {
						console.log(err);
					});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const logout = () => {
		signOut(auth).then(() => setUserData());
	};

	useEffect(() => {
		console.log(userData);
	}, [userData, auth]);

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
				{userData === undefined ? (
					<button onClick={handleGoogleLogin}>Login</button>
				) : (
					<button onClick={logout}>Logout</button>
				)}

				{userData ? userData.displayName : null}
			</nav>
		</header>
	);
};

export default Navbar;
