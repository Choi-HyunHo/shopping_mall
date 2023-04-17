import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { BsFillPencilFill } from "react-icons/bs";
import User from "./User";
import Button from "./Button";
import { login, logout, onUserStateChange } from "../api/fbase";
import { useAuthContext } from "../context/AuthContext";
import CartStatus from "./CartStatus";

const Navbar = () => {
    const { userData } = useAuthContext();

    return (
        <header className="flex justify-between border-b border-gray-300 p-2">
            <Link to="/" className="flex items-center text-4xl text-brand">
                <FiShoppingBag />
                <h1>Enjoy</h1>
            </Link>
            <nav className="flex items-center gap-4 font-semibold">
                <Link to="/products">Products</Link>
                {userData && (
                    <Link to="/carts">
                        <CartStatus />
                    </Link>
                )}
                {userData && userData.isAdmin && (
                    <Link to="/products/new" className="text-2xl">
                        <BsFillPencilFill />
                    </Link>
                )}

                {userData && <User user={userData} />}
                {!userData ? (
                    <Button onClick={login} text="Login" />
                ) : (
                    <Button onClick={logout} text="Logout" />
                )}
            </nav>
        </header>
    );
};

export default Navbar;
