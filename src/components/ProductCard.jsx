import { data } from "autoprefixer";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const { id, image, title, category, price } = product;
    const navigate = useNavigate();

    return (
        <li
            onClick={() => navigate(`/products/${id}`, { state: { product } })}
            className="rounded-lg overflow-hidden cursor-pointer hover:scale-95 transition-all"
        >
            <img className="w-full h-5/6" src={image} alt={title} />
            <div className="mt-2 px-2 text-lg flex justify-between items-center">
                <h3 className="truncate">{title}</h3>
                <span>{`₩${price}`}</span>
            </div>
            <span className="mb-2 px-2 text-gray-600">{category}</span>
        </li>
    );
};

export default ProductCard;
