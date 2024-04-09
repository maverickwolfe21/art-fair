import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

import { QUERY_PRODUCTS } from "../utils/queries";

import SplashBannerLg from "../components/SplashBannerLg";
import HomeCard from "../components/HomeCard";
import { useApp } from "../utils/app-context";

const features = [
  {
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczOKMyLDcE0BN7D-tyqprx-okabO5bOuyD5vnOGnxD5mAttDVCQTU0FAd39j-XgCkOyBczrCERkpNzMqJvuPQS0M70GJ2iwJ-oC0-FOHq9SZEXDrp3Z5-LlyRwnSvP278b4kjGP0bvYDWDyK6opAi-SRrG93IoQ24Zg7UUeHFqGrKTZXNTY85TnILSOXyGlE4iWYcZ1loWh_t87LUdJLE4FBjPZ8WP-sEN0e6ckYDqE8CMF5r9gw6MBmmGx98PGwKs-N5XQHIctL3ASD_ysp5SX5zklxS364U6s2MwLWA7xxDNcaREoe7ufNicdKKxaIIYGHye1NW1vT3O4ocL0Kc4xaaOz8NT1_71B75R7btKt-dOqhJqKOneNxqknwUz5suf1SpVTtji2br5ZxXOVKrnPTVLrdO6xGfNNG1fySgOE9xLhRsTNYLDAJQ5Ihe3behFxwoy3YOzEJCe6_eEbmie6mJYpcEI_V18USMRNMychoFDAPz-57xJFkY-2x9VGWT757_WtTe_MfTUoRmcBDN6L3ACf1N8iTs1ZcuIZ4sBQdgWSapvy-o7nXEvO5r_-HMWFdO0O3OzAy8zHMK149dsV_PovzKkX32SI1kDMDco175bQLNaqeY6_vnk0RUdcqHCT0M8l9sQL-O8hlaL-KbP5wR3p35fMPDx-skqOTMGIIlU8oVpD95-a3Kg_mlmG6pzALeAKJ215CvIVN7wIA524OKxNwgYF7fsVV-F6VUolzS7GtgPr6K21go3jjuNMUUNTTseOEPkTHhVTJH6JIdnxRBPE-Wbxr8cinhXbWKwdNFd_n0H2zIMPcUdp2Nch2Lg_b-SqoV3U4Mdqnq-wkX3ZGR-1EIUOu4wnD5qyVStOPX_DjUbOQPqYhZibYcKioH6iYcrVve45aItbm90X94IqP-LLOxOaOI8r-YlOrEHViE2CVowip6ama8WWwGg=w810-h810-s-no?authuser=0",
    title: "Browse Our Products",
    splash: "New products featured weekly",
    link: "/shop",
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczOdmju2yIQDjBExCrR3LKYze8EpQkJOq0otgZJConMpUPWhc38v6-oHEHc0AhYTioTxSXJ-dLnXCXHqYrGENrnYTTF5XHNWkTmnbzw9cAMmNrg90tdKN9gO0Bn98EoOw7ixalSAcKKOnx9JaqQdFVFUWqpH8XJxdK5EoPG1D3Qlh8bYLue8LfLUTz-NkkTEDgfhVCWRVKbCWDxbpfK93n09EXLss8kxt_FN-WtFRhDspr3BcdqVE2Oi3qmibPiozcB5RoXLm_l1muCpUmHzktgDgXeh_Y8s5pRixKUQaXt5LwaamprC_c0_mFf2Gw2uB4glac6fQD4FfVsxnDBaNPCHHqnZmmpiM-uqR35xSFa_hdtZzovTif1ygFdggjgu7rbmDvIm_e_jEz-KtuoWjvtKg11Sbns8ytYp_P7COe-HsYdkG95op0d0SMmGIajaJrzvVP-Sy4Cwhkt8haygay6qk1TccxEPuTMoVxaqHMJVuuO1ajB3Nq3zvQfN6_S70ivMKLgaluHT5BwB20pbvkQYRxTzXsMGDn3rCOFqJLG_Dm3ZaN2XAAzkbNTBpsPsrrLx3L8IGowv27CbKfQ5c0-zS2I9cSJEuMLY1OcVuNMzgO56TWfnqIAaH6PucBnq3M8COb2aoLYuTAHKtS8aLIDh8CBUOEHc9AqfTVKLII809B_JKSABT4OovXb0N3iIqyksEzFzqNIZrPijT0_laV3s8_mea3tN6mZMxLvPEu3FaJm7XlDFGP9S-AFGQivelqbGvsihdyiKdMN57P18H-DPqnDKgP68cqf-RfPgFd6DBu5-Dq5tZNbem-UU29SwZuUH4YCQeFEZc_E2tR463tQoz2RpiChXS8UIpjHPanp2rhv9GRoD0MaaCLrDsMcy6KJYIAaLFewCsA_OvrIyAuq1uQMKxkJanGpte-7V1L6NzSgLTkE_PS10-NLxVg=w810-h810-s-no?authuser=0",
    title: "Learn About The Fair",
    splash: "Who we are",
    link: "/about",
  },
  {
    imageUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczMaiYujOJQ-ic6J66DddPqdA5rEVWxTnG5-pJFcBQxagWNsSskCsbfMM9Dbz0Y5HzkCKPridVsf-JLCib7TVLg856H6YmAF68F13xPYxHcrimJ8vJ7Gr72AA9W-ImICnEbL5F0JUmBDrtb2wpuDb0XlpI7fFx-9acE8sY1apxsZjgakLvlbeH7g7TQfqb9IlJTagd1zW8VN0BhNQmw8gNM3vbMU_X3qYzQQ2lazCca_-c_oC6__L8HWTH52cnN5HVROG4mpXt9cLfxyCBc-9dtdY08WJOD-IV8PIzjCDtEwHb0TvM0LxLBEBVQOp5ffbH-uXlNq1BqlFWWyy58OSfLDOjNmpz51tRtNtN0tF6JJYsjXwWr8f8bSS9a4HjdonnBH7-7HqTkqyzTAM7w7XpRPWLQgr8LyDOemKtX3AAJDc8Y2SK1cKvlLsHMqhHJFquGa-nP2FJDtWpcvPW0S1-xy_RV2vhQCsthWYx_g5sfGq4cSdBIEEUSRtlQGU6SrTvJ3YL3AWrs983Fhw8OT6bLxyP_hpZXqb_osePBJ3UvMHuGiclMQWMBa6_lhYb_VSz-IptlauFrgyb5fksosr71QSCOtxBlsVsP3inzGed00IoygBqJNNcz36KYVcgKs2I7M6WkT34WsEyxyPEw2nPYorJA2RON8z9BhsTyyEk7_ZUsBcmkQmmPBJTBvhFJ-mODBLACJGA-P8_oJSm0YjyOVIO5fPa8ZO9jBMBB6UTuD6gr-PitDd06WTK4HRhtApbk39vtKYkTl6OxxRErdUQ3tOGhlRAF7zLZAdnG6nUQ3xI96IOLL-qwz7dkgcUORprAMqCGNuZp3D3C2SptdaYKZsZNoraZXiiSeOn_9zv4ZRHRwEDDLmxMBJwVY7fBBpbZIuz20C900xMs_4tovR-brETLLxZ0Yv0nPRQ8_YyiIzWOEWkW-Csvg_ZupCg=w810-h810-s-no?authuser=0",
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
