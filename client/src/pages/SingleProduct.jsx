// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_PRODUCT } from "../utils/queries";

const SingleProduct = () => {
  // Use `useParams()` to retrieve value of the route parameter `:id`
  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_PRODUCT, {
    // pass URL parameter
    variables: { id: id },
  });

  const product = data?.product || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(product);

  const handleClick = () => {};

  return (
    <div className="my-3 flex justify-center gap-10">
      <img className="h-96 w-96 object-contain" src={product.imageUrl} alt={product.name}></img>
      <div className="flex flex-col gap-2">
        <div>
          <h2 className="font-semibold text-2xl">{product.productName}</h2>
          <h2>By {product.artistName}</h2>
        </div>
        <h2 className="font-semibold text-xl">${product.price}</h2>
        <button onClick={handleClick} className="p-1 cursor-pointer border-2 border-black rounded-md bg-transparent text-black">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
