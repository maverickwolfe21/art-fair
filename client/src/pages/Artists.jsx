import { useQuery } from '@apollo/client';
import { useState } from "react";
import { Link } from "react-router-dom";

// This will pull the data from all the Artists. 
import { QUERY_ARTISTS } from '../utils/queries';
import ArtistCard from "../components/ArtistCard/index";
const Artists = () => {

  const { loading, data } = useQuery(QUERY_ARTISTS);
  const artists = data?.artists || [];
  // const description = data?.description || [];
  // test push

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex w-screen justify-center px-2 bg-blue-400">
      {/* I dont think this works but it is a place holder */}
      {/* <h2>{artists.name} </h2> */}
      <div className="grid grid-cols-3 gap-5">
        {artists.map((artist) => (
          <Link key={artist._id} to={`/artists/${artist._id}`}>
            <ArtistCard artist={artist} /> {/* Render ArtistCard component */}
          </Link>
        ))}
      </div>

    </div>
  );
};
export default Artists;