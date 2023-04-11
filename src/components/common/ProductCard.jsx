const ProductCard = ({ product }) => {
    const { id, image, title, category, price } = product;

    return (
        <li>
            <img src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <span>{`₩${price}`}</span>
            </div>
            <span>{category}</span>
        </li>
    );
};

export default ProductCard;
