import React from "react";
import { useQuery } from "react-query";
import { productList } from "../api/fbase";
import ProductCard from "./ProductCard";
import { MoonLoader } from "react-spinners";

const Products = () => {
    const { data, isLoading } = useQuery("products", productList);

    return (
        <>
            {isLoading && (
                <div className="h-[calc(100vh-12rem)] flex justify-center items-center">
                    <MoonLoader size={100} color="#F96162" />
                </div>
            )}
            <ul className="grid grid-cols-1 md:grid-cols-4 lg-grid-cols-5 gap-4 p-4 ">
                {data &&
                    data.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))}
            </ul>
        </>
    );
};

export default Products;
