import { useQuery } from "react-query";
import { productList } from "../../api/fbase";
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
            <ul>
                {data &&
                    data.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    ))}
            </ul>
        </>
    );
};

export default Products;
