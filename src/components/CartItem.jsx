import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { addCart, removeCart } from "../api/fbase";
import { useMutation } from "react-query";
import { queryClient } from "../main";

const CartItem = ({ item, uid }) => {
    const { id, image, option, price, quantity, title } = item.product;

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
            ...item.product,
            quantity: quantity - 1,
        };
        Quantity.mutate({ uid, changeProduct });
    };

    const handlePlus = () => {
        const changeProduct = {
            ...item.product,
            quantity: quantity + 1,
        };
        Quantity.mutate({ uid, changeProduct });
    };

    const handleDelete = () => {
        removeQuantity.mutate({ uid, id });
    };

    return (
        <li key={id}>
            <img src={image} alt={title} />
            <div>
                <span>{title}</span>
                <span>{option}</span>
                <div>
                    <AiOutlineMinusSquare onClick={handleMinus} />
                    <span>{quantity}</span>
                    <AiOutlinePlusSquare onClick={handlePlus} />
                    <RiDeleteBin5Fill onClick={handleDelete} />
                </div>
            </div>
        </li>
    );
};

export default CartItem;
