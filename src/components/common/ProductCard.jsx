const ProductCard = ({ product }) => {
    const { id, image, title, category, price } = product;

    return (
        <li className="rounded-lg shadow-md overflow-hidden cursor-pointer">
            <img className="w-full" src={image} alt={title} />
            <div className="mt-2 px-2 text-lg flex justify-between items-center">
                <h3 className="truncate">{title}</h3>
                <span>{`₩${price}`}</span>
            </div>
            <span className="mb-2 px-2 text-gray-600">{category}</span>
        </li>
    );
};

export default ProductCard;
