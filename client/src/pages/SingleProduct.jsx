// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_PRODUCTS } from "../utils/queries";

const SingleThought = () => {
  // Use `useParams()` to retrieve value of the route parameter `:id`
  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_PRODUCTS, {
    // pass URL parameter
  });

  const product = data?.product || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data) {
    console.log(data);
  }
  return <div className="my-3">Test product</div>;
};

export default SingleThought;
