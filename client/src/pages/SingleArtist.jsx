// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_ARTIST } from "../utils/queries";

const SingleArtist = () => {
  // Use `useParams()` to retrieve value of the route parameter `:id`
  const { id } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_ARTIST, {
    // pass URL parameter
    variables: { id: id },
  });

  const artist = data?.artist || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <div className="my-3">
      <h2>{artist._id}</h2>
      <h2>{artist.name}</h2>
      <h2>{artist.imageUrl}</h2>
      <h2>{artist.name}</h2>
    </div>
  );
};

export default SingleArtist;
