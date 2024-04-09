import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";

// This will pull the data from all the Artists.
import { GET_FAVORITE_ARTISTS, QUERY_ME } from "../utils/queries";
import ArtistCard from "../components/ArtistCard/index";
const Favorites = () => {
  const { loading, data } = useQuery(QUERY_ME);

  data && console.log(data);
  //   const favArtists = data?.favoriteArtists || [];

  // console.log(favoriteArtists)
  // const description = data?.description || [];
  // test push

  if (loading) {
    return <div>Loading...</div>;
  }

  return null;
  return (
    <div className="flex w-screen justify-center px-2">
      {/* I dont think this works but it is a place holder */}
      <h2>Favorite Artists</h2>
      <div className="grid grid-cols-3 gap-5">
        {favoriteArtists.map((artist) => (
          <Link key={artist._id} to={`/artists/${artist._id}`}>
            <ArtistCard artist={artist} /> {/* Render ArtistCard component */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
