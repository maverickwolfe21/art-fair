3; // Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { QUERY_SINGLE_ARTIST, QUERY_ME } from "../utils/queries";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/mutations";
import { useApp } from "../utils/app-context";

const SingleArtist = () => {
  // Use `useParams()` to retrieve value of the route parameter `:id`
  const { id } = useParams();
  const { loading: artistLoading, data: artistData } = useQuery(QUERY_SINGLE_ARTIST, {
    variables: {
      id: id,
    },
  });
  const { loading: meLoading, data: meData } = useQuery(QUERY_ME);

  const [addFavorite] = useMutation(ADD_FAVORITE, {
    refetchQueries: [{ query: QUERY_ME }],
  });
  const [removeFavorite] = useMutation(REMOVE_FAVORITE, {
    refetchQueries: [{ query: QUERY_ME }],
  });

  const currentUser = meData?.me || {};
  useEffect(() => {}, [currentUser]);
  console.log(currentUser);
  // Check to see if current artist already exists in favorite artists array
  const isFavorite = currentUser?.favoriteArtists?.some((artist) => artist._id === id);
  console.log(isFavorite);
  const handleFavoriteAction = async () => {
    try {
      if (isFavorite) {
        await removeFavorite({
          variables: {
            artistId: id,
          },
        });
        console.log("Artist removed from favorites!");
      } else {
        await addFavorite({
          variables: {
            artistId: id,
          },
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
    <div className="flex items-center flex-col lg:my-3 lg:flex-row lg:justify-center lg:gap-8">
      <img className="h-96 w-96 object-contain" src={artist.imageUrl} alt={artist.name} />
      <div className="flex w-96 flex-col gap-3 mt-2 lg:m-0">
        <div className="flex flex-col items-start">
          <p className="font-semibold text-2xl">{artist.name}</p>
          <p className="font-medium text-gray-600">{artist.location}</p>
        </div>
        <p>{artist.description}</p>

        <button className="p-1 cursor-pointer border-2 border-black rounded-md bg-transparent text-black" onClick={handleFavoriteAction}>
          {isFavorite ? "Remove Favorite" : "Add Favorite"}
        </button>
      </div>
    </div>
  );
};

export default SingleArtist;
