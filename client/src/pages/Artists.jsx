// Import the `useParams()` hook
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

// THis will pull the data from all the Artists.
import { QUERY_ARTISTS } from "../utils/queries";

const Artists = () => {
  const { loading, data } = useQuery(QUERY_ARTISTS);
  const artists = data?.artists || [];

  return (
    <div className="flex flex-col items-center w-screen justify-center px-2 bg-blue-400">
      <h2 className="feature_title_name_to">Name</h2>
      <p className="features-desription">
        There is not victory without struggle. There is no meaning without
        suffering
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="placeholder" alt="artistProfile" />
      </div>
      <div
        className="feature_box_killian1"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gridGap: "20px",
        }}
      >
        <div className="feature_box_01"></div>
        <div className="artistName">
          <h2>ARTIST TITLE</h2>
          <h3 className="location-description"> Location:</h3>
          <h4 className="about-artist-page"></h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam qui
            ratione libero veniam animi culpa commodi, distinctio dolorem
            numquam maxime quisquam. Aliquam doloribus itaque, ducimus eum
            accusamus reiciendis voluptatibus facere.
          </p>
        </div>
        <>
        <div className="featured">
          
        </div>
        </>        


        {artists.map((artist) => (
          <div key={artist.id} className="artist-item">
            {/* Render artist details here */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
