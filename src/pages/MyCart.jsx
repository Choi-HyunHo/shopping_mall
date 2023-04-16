import React from "react";
import { useQuery } from "react-query";
import { cartsInfo } from "../api/fbase";
import { useAuthContext } from "../context/AuthContext";
import { MoonLoader } from "react-spinners";
import CartItem from "../components/CartItem";
import PriceCard from "../components/PriceCard";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaEquals } from "react-icons/fa";

const MyCart = () => {
    const { uid } = useAuthContext();
    const { data, isLoading } = useQuery(["cart", uid], () => cartsInfo(uid));

    if (isLoading) {
        return (
            <div className="h-[calc(100vh-12rem)] flex justify-center items-center">
                <MoonLoader size={100} color="#F96162" />
            </div>
        );
    }

    const hasProducts = data && data.length > 0; // 제품이 들어있는지 확인

    const totalPrice =
        data &&
        data.reduce(
            (prev, current) =>
                prev + parseInt(current.price) * current.quantity,
            0
        );

    return (
        <div>
            <span>내 장바구니</span>
            {hasProducts === false && <span>장바구니에 상품이 없습니다.</span>}
            <>
                {hasProducts &&
                    data.map((item, index) => (
                        <ul key={index}>
                            <CartItem key={item.id} item={item} uid={uid} />
                        </ul>
                    ))}
            </>
            <div>
                <PriceCard text="상품 총액" price={totalPrice} />
                <BsFillPlusCircleFill />
                <PriceCard text="배송액" price={3000} />
                <FaEquals />
                <PriceCard text="총 가격" price={totalPrice + 3000} />
            </div>
        </div>
    );
};

export default MyCart;
