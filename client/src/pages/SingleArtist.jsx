// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";

import { QUERY_SINGLE_ARTIST } from "../utils/queries";
import { ADD_FAVORITE } from "../utils/mutations";
// const favoriteButtonEvent = async (event) => { 
//   // When user clicks the Add Favorite button, we will use the ADD_FAVORITE mutation to add the id of the artist to the favoriteArtists [] on the user currently signed in. 


//   };


const SingleArtist = () => {
  // Use `useParams()` to retrieve value of the route parameter `:id`
  const { id } = useParams();
  const { loading, data } = useQuery(QUERY_SINGLE_ARTIST, {
    variables: { id: id },
  });

  const [addFavorite] = useMutation(ADD_FAVORITE);

  const handleAddFavorite = async () => {
    try {
      await addFavorite({
        variables: { artistId: id },
      });
      console.log("Artist added to favorites!")
    } catch (error) {
      console.error("Error adding artist to favorites");
    }
  };

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
      <button className="mt-3 w-20 p-1 cursor-pointer border-2 border-black rounded-md bg-transparent text-black m-auto" onClick={handleAddFavorite}>
        Add Favorite
      </button>
    </div>
  );
};

export default SingleArtist;
