import { useQuery } from "@apollo/client";
import { useState } from "react";
import { Link } from "react-router-dom";

// This will pull the data from all the Artists.
import { GET_FAVORITE_ARTISTS, QUERY_ARTISTS, QUERY_ME } from "../utils/queries";
import ArtistCard from "../components/ArtistCard/index";
const Favorites = () => {
  const { loading, data } = useQuery(QUERY_ME);
  const { loading2, data: artistData } = useQuery(QUERY_ARTISTS);

  const favArtistIds = data?.me.favoriteArtists.map((fa) => fa._id) || [];
  const artists = artistData?.artists || [];

  const favoriteArtists = artists?.filter((artist) => favArtistIds.includes(artist._id));

  console.log(favoriteArtists);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center w-screen justify-center gap-6">
      <h2 className="font-medium text-xl">Favorite Artists</h2>
      <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {favoriteArtists.map((artist) => (
          <Link key={artist._id} to={`/artists/${artist._id}`}>
            <ArtistCard artist={artist} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
