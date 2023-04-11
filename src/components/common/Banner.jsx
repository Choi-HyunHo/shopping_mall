import React from "react";

const Banner = () => {
    return (
        <section className="h-96 bg-yellow-900 relative">
            <div className="w-full h-full bg-cover bg-banner opacity-90" />
            <div className="absolute w-full top-32 text-center text-gary-50 text-white drop-shadow-2xl">
                <h2 className="text-6xl">Shop With US</h2>
                <span className="text-2xl">Best Products, High Quality</span>
            </div>
        </section>
    );
};

export default Banner;
