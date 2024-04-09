// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";


import { QUERY_SINGLE_ARTIST, QUERY_ME } from "../utils/queries";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/mutations";
import { useApp } from "../utils/app-context";
// const favoriteButtonEvent = async (event) => { 
//   // When user clicks the Add Favorite button, we will use the ADD_FAVORITE mutation to add the id of the artist to the favoriteArtists [] on the user currently signed in. 


//   };


const SingleArtist = () => {
  // Use `useParams()` to retrieve value of the route parameter `:id`
  const { id } = useParams();
  const { loading: artistLoading, data: artistData } = useQuery(QUERY_SINGLE_ARTIST, {
    variables: { id: id },
  });
  const { loading: meLoading, data: meData } = useQuery(QUERY_ME);

  const [addFavorite] = useMutation(ADD_FAVORITE, {
    refetchQueries: [{ query: QUERY_ME }]
  });
  const [removeFavorite] = useMutation(REMOVE_FAVORITE, {
    refetchQueries: [{ query: QUERY_ME }]
  });

  // const handleAddFavorite = async () => {
  //   try {
  //     await addFavorite({
  //       variables: { artistId: id },
  //     });
  //     console.log("Artist added to favorites!")
  //   } catch (error) {
  //     console.error("Error adding artist to favorites");
  //   }
  // };


  const currentUser = meData?.me || {};
  useEffect(() => { }, [currentUser]);
  console.log(currentUser)
  // Check to see if current artist already exists in favorite artists array
  const isFavorite = currentUser?.favoriteArtists?.some(artist => artist._id === id);
  console.log(isFavorite)
  const handleFavoriteAction = async () => {
    try {
      if (isFavorite) {
        await removeFavorite({
          variables: { artistId: id },
        });
        console.log("Artist removed from favorites!");
      } else {
        await addFavorite({
          variables: { artistId: id },
        });
        console.log("Artist added to favorites!");
      }
    } catch (error) {
      console.error("Error updating favorites:", error);
    }
  };

  const artist = artistData?.artist || {};



  if (artistLoading || meLoading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="my-3">
      <h2>{artist.name}</h2>
      <img src={artist.imageUrl} alt={artist.name} />
      <p>{artist.description}</p>
      <button className="mt-3 w-20 p-1 cursor-pointer border-2 border-black rounded-md bg-transparent text-black m-auto"
        onClick={handleFavoriteAction}
      >
        {isFavorite ? "Remove Favorite" : "Add Favorite"}
      </button>
    </div>
  );
};

export default SingleArtist;
