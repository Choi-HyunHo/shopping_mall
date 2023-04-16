import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useQuery } from "react-query";
import { cartsInfo } from "../api/fbase";
import { useAuthContext } from "../context/AuthContext";

const CartStatus = () => {
    const { uid } = useAuthContext();
    const { data } = useQuery(["cart", uid], () => cartsInfo(uid));

    console.log(data);

    return (
        <div className="relative">
            <AiOutlineShoppingCart className="text-4xl" />
            {data && (
                <span className="w-6 h-6 text-center bg-brand text-white font-bold rounded-full absolute -top-1 -right-2">
                    {data.length}
                </span>
            )}
        </div>
    );
};

export default CartStatus;
