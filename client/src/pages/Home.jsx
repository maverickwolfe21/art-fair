import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { QUERY_PRODUCTS } from "../utils/queries";

import SplashBannerLg from "../components/SplashBannerLg";
import HomeCard from "../components/HomeCard";

const features = [
  {
    imageUrl: "https://cdn.discordapp.com/attachments/1184992990868033647/1225657863993557012/jayblesdrums_High_quality_photography_of_a_street_art_fair_boot_ddeec5d1-8855-4a92-b3f3-06c7293f17d7.png?ex=6621edd6&is=660f78d6&hm=caadb9378e8b416777ea8e9a656c3ffe3a9dbf51fb69e63e6ece258a68ad94d7&",
    title: "Browse Our Products",
    splash: "New products featured weekly",
    link: "/shop"
  },
  {
    imageUrl: "https://cdn.discordapp.com/attachments/1184992990868033647/1227018621482700902/jayblesdrums_Happy_Artists_b4943c78-8b0f-4363-a1b2-3fb64e4c3f13.png?ex=6626e124&is=66146c24&hm=3814b80171b699345dd31674ca0e480248baee8923524eaa7fca7a0882ba63e6&",
    title: "Learn About The Fair",
    splash: "Who we are",
    link: "/about"
  },
  {
    imageUrl: "https://cdn.discordapp.com/attachments/1184992990868033647/1227019176623865896/jayblesdrums_Holding_Paintbrush_dba8aea8-001c-4359-887c-ab2a90bede3f.png?ex=6626e1a8&is=66146ca8&hm=46056cb556539f158bc5204cc0b3fc64ac6f2535d2c07543d1f148d4691195bd&",
    title: "Meet The Artists!",
    splash: "Save your Favorites!", 
    link: "/artists"
  }
]

const Home = () => {
  return (
    <div>
      <SplashBannerLg />
      <div className="w-screen flex justify-center mb-2">
        <div className="flex w-4/5 justify-center p-5 items-center border-black bg-transparent text-black">
          <h2>Hand made directly directly from the artists to you!</h2>
        </div>
      </div>
      <div className="w-screen flex justify-center mb-2">
        <div className="flex w-4/5 justify-center">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link}>
            <HomeCard key={index} feature={feature} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
