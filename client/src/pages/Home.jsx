import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { QUERY_PRODUCTS } from "../utils/queries";

import SplashBannerLg from "../components/SplashBannerLg";
import HomeCard from "../components/HomeCard";
import { useApp } from "../utils/app-context";

const features = [
  {
    imageUrl:
      "https://cdn.discordapp.com/attachments/1184992990868033647/1225658247332233276/jayblesdrums_High_quality_photography_of_a_street_art_fair_boot_18e20f4b-cca6-4bff-9a8d-8d437ed4b1ed.png?ex=6621ee31&is=660f7931&hm=caae85b56f83b2f48c533ebfca7dcae309aa7e4f20db49a71a0134e6cb261d11&",
    title: "Browse Our Products",
    splash: "New products featured weekly",
    link: "/shop",
  },
  {
    imageUrl:
      "https://cdn.discordapp.com/attachments/1184992990868033647/1227018042861551708/jayblesdrums_Happy_Artists_b981e971-6edc-4d71-8cf5-cdd01ffc76b2.png?ex=6626e09a&is=66146b9a&hm=4b47eb2f227b481d499e1ba9118a3fa11b7d48dbf342933d4945cd904a9af172&",
    title: "Learn About The Fair",
    splash: "Who we are",
    link: "/about",
  },
  {
    imageUrl:
      "https://cdn.discordapp.com/attachments/1184992990868033647/1227019176623865896/jayblesdrums_Holding_Paintbrush_dba8aea8-001c-4359-887c-ab2a90bede3f.png?ex=6626e1a8&is=66146ca8&hm=46056cb556539f158bc5204cc0b3fc64ac6f2535d2c07543d1f148d4691195bd&",
    title: "Meet The Artists!",
    splash: "Save your Favorites!",
    link: "/artists",
  },
];

const Home = () => {
  const { user } = useApp();
  console.log("USER HOME:", user);
  return (
    <div>
      <SplashBannerLg />
      <div className="w-screen flex justify-center mb-2">
        <div className="flex w-4/5 justify-center py-6 items-center border-black bg-transparent text-black">
          <h2 className="text-xl lg:text-xl">Hand made directly by the artists for you!</h2>
        </div>
      </div>
      <div className="w-screen flex justify-center mb-2">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-3 lg:gap-5">
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
