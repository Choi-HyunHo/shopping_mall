import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { addCart, removeCart } from "../api/fbase";
import { useMutation } from "react-query";
import { queryClient } from "../main";

const ICON_CLASS =
    "transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1";

const CartItem = ({ item, uid }) => {
    const { id, image, option, price, quantity, title } = item;

    const Quantity = useMutation(
        ({ uid, changeProduct }) => addCart(uid, changeProduct),
        {
            onSuccess: () => queryClient.invalidateQueries(["cart"]),
        }
    );

    const removeQuantity = useMutation(({ uid, id }) => removeCart(uid, id), {
        onSuccess: () => queryClient.invalidateQueries(["cart"]),
    });

    const handleMinus = () => {
        if (quantity < 2) return;
        const changeProduct = {
            ...item,
            quantity: quantity - 1,
        };
        Quantity.mutate({ uid, changeProduct });
    };

    const handlePlus = () => {
        const changeProduct = {
            ...item,
            quantity: quantity + 1,
        };
        Quantity.mutate({ uid, changeProduct });
    };

    const handleDelete = () => {
        removeQuantity.mutate({ uid, id });
    };

    return (
        <li key={id} className="flex justify-between my-2 items-center">
            <img src={image} alt={title} className="w-24 md:w-48 rounded-lg" />
            <div className="flex-1 flex justify-between ml-4">
                <span className="text-lg">{title}</span>
                <span className="text-xl font-bold text-brand">{option}</span>
                <span>₩{price}</span>
                <div className="text-2xl flex items-center">
                    <AiOutlineMinusSquare
                        onClick={handleMinus}
                        className={ICON_CLASS}
                    />
                    <span>{quantity}</span>
                    <AiOutlinePlusSquare
                        onClick={handlePlus}
                        className={ICON_CLASS}
                    />
                    <RiDeleteBin5Fill
                        onClick={handleDelete}
                        className={ICON_CLASS}
                    />
                </div>
            </div>
        </li>
    );
};

export default CartItem;
