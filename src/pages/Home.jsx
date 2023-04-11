import React, { useEffect } from "react";
import { productList } from "../api/fbase";

const Home = () => {
    useEffect(() => {
        productList().then((res) => console.log(res));
    }, []);

    return <div>home</div>;
};

export default Home;
