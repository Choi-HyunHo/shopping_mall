import React from "react";
import { AiOutlineMinusSquare, AiOutlinePlusSquare } from "react-icons/ai";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { addCart } from "../api/fbase";
import { useMutation } from "react-query";
import { queryClient } from "../main";

const CartItem = ({ item, uid }) => {
    const { id, image, option, price, quantity, title } = item.product;

    const addQuantity = useMutation(
        ({ uid, changeProduct }) => addCart(uid, changeProduct),
        {
            onSuccess: () => queryClient.invalidateQueries(["cart"]),
        }
    );

    const handleMinus = () => {
        if (quantity < 2) return;
        addCart(uid, { ...item.product, quantity: quantity - 1 });
    };

    const handlePlus = () => {
        const changeProduct = {
            ...item.product,
            quantity: quantity + 1,
        };
        addQuantity.mutate({ uid, changeProduct });
    };

    // const handleDelete

    return (
        <li>
            <img src={image} alt={title} />
            <div>
                <span>{title}</span>
                <span>{option}</span>
                <div>
                    <AiOutlineMinusSquare onClick={handleMinus} />
                    <span>{quantity}</span>
                    <AiOutlinePlusSquare onClick={handlePlus} />
                    <RiDeleteBin5Fill />
                </div>
            </div>
        </li>
    );
};

export default CartItem;
