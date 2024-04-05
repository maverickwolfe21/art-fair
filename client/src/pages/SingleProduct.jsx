// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_PRODUCT } from "../utils/queries";

const SingleThought = () => {
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

  return (
    <div className="my-3">
      <h2>{product._id}</h2>
      <h2>{product.name}</h2>
      <h2>{product.imageUrl}</h2>
      <h2>{product.artistName}</h2>
      <h2>{product.isActive}</h2>
      <h2>${product.price}</h2>
    </div>
  );
};

export default SingleThought;
