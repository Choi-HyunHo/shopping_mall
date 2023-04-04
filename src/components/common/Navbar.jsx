import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";

// 구글 로그인
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../fbase";

const Navbar = () => {
	const [userData, setUserData] = useState();

	const handleGoogleLogin = () => {
		const provider = new GoogleAuthProvider(); // provider를 구글로 설정
		signInWithPopup(auth, provider) // popuop을 이용한 signUp
			.then((data) => {
				setUserData(data.user);
				console.log(data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

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
				<button onClick={handleGoogleLogin}>Login</button>
				{userData ? userData.displayName : null}
			</nav>
		</header>
	);
};

export default Navbar;
