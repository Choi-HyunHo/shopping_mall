import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Button from "../components/Button";
import { addCart } from "../api/fbase";
import { useAuthContext } from "../context/AuthContext";

const ProductDetail = () => {
    const { uid } = useAuthContext();
    const location = useLocation();
    const { category, description, id, image, options, price, title } =
        location.state.product;

    const [value, setValue] = useState(options && options[0]);
    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleAddCart = () => {
        const product = {
            id,
            image,
            title,
            price,
            option: value,
            quantity: 1,
        };
        addCart(uid, product);
    };

    return (
        <>
            <span className="text-2xl mx-12 mt-4 text-gray-700">
                {category}
            </span>
            <div className="flex flex-col md:flex-row p-4">
                <img
                    className="w-full px-4 basis-5/12"
                    src={image}
                    alt={title}
                />
                <div className="w-full basis-5/12 flex flex-col p-4">
                    <h2 className="text-3xl font-bold py-2">{title}</h2>
                    <span className=" border-b border-gray-400 text-3xl font-bold py-2">
                        ₩{price}
                    </span>
                    <span className="py-4 text-lg">{description}</span>
                    <div className="flex items-center">
                        <label className="text-brand font-bold">옵션 : </label>
                        <select
                            className="p-2 m-4 flex-1 border-2 border-dashed border-brand outline-none"
                            onChange={handleChange}
                            value={value}
                        >
                            {options &&
                                options.map((option, index) => (
                                    <option key={index}>{option}</option>
                                ))}
                        </select>
                    </div>
                    <Button onClick={handleAddCart} text="장바구니 추가" />
                </div>
            </div>
        </>
    );
};

export default ProductDetail;
