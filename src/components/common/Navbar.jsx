import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import User from "./User";

// 구글 로그인
import {
	GoogleAuthProvider,
	signInWithPopup,
	setPersistence,
	browserSessionPersistence,
	signOut,
	onAuthStateChanged, // 로그인 정보 유지
} from "firebase/auth";
import { ref, get } from "firebase/database";
import { auth, database } from "../../api/fbase";

const Navbar = () => {
	const [userData, setUserData] = useState();

	const handleGoogleLogin = () => {
		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				const provider = new GoogleAuthProvider();
				signInWithPopup(auth, provider)
					.then((data) => {
						setUserData(data.user);
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

	// 로그인 정보 유지를 위한 함수
	const onUserStateChange = (callback) => {
		onAuthStateChanged(auth, (user) => {
			user && adminUser(user);
			console.log(user);
			callback(user);
		});
	};

	// admin 권한
	const adminUser = async (user) => {
		return get(ref(database, "admin")).then((snapshot) => {
			if (snapshot.exists()) {
				const admins = snapshot.val(); // realtime db 에 추가한 admin 값 가져오기
				console.log(admins);
			}
		});
	};

	useEffect(() => {
		onUserStateChange((user) => {
			// adminUser();
			setUserData(user);
		});
	}, []);

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
					<button onClick={handleGoogleLogin}>Login</button>
				) : (
					<button onClick={logout}>Logout</button>
				)}
				{userData && <User user={userData} />}
			</nav>
		</header>
	);
};

export default Navbar;
