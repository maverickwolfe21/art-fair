
const ProductCard = ({ product }) => {
    return (
        <div className=" rounded-md shadow-lg w-60 mx-4 justify-center">
            <img
                src={product.imageUrl} 
                alt={product.productName}
                className="object-cover w-full h-40 rounded-t-md"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.productName}</h3>
                <p className="text-sm text-gray-600 mb-2">By {product.artistName}</p>
                <p className="text-lg font-semibold">${product.price}</p>
            </div>
        </div>
    );
};

export default ProductCard;