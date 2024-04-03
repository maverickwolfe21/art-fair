import { useQuery } from "@apollo/client";

import { QUERY_PRODUCTS } from "../utils/queries";

import SplashBannerLg from "../components/SplashBannerLg";

const Home = () => {
  return (
    <div>
      <SplashBannerLg/>
      <div className="w-screen flex justify-center mb-2">
        <div className="flex w-4/5 justify-center p-5 items-center border-black bg-transparent text-black">
          <h2>Hand made directly directly from the artists to you!</h2>
        </div>
      </div>
      <div className="w-screen flex justify-center mb-2">
        <div className="flex w-4/5 justify-center">
          <div className="flex border-2 rounded-md shadow-lg w-60 mx-10 justify-center">
            <p>Browse our products!</p>
          </div>
          <div className="flex border-2 rounded-md shadow-lg w-60 mx-10 justify-center">
            <p>Meet the Artists</p>
          </div>
          <div className="flex border-2 rounded-md shadow-lg w-60 mx-10 justify-center">
            <p>Learn about the fair!</p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
