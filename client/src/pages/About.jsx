import React, { useState } from "react"; // Step 1: Import useState
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { QUERY_ARTISTS } from "../utils/queries";
import AboutDesc from "../components/AboutDesc/AboutDesc.jsx";
// import DonateInput from "../components/AboutInput/input.jsx";
import Contact from "../components/AboutDesc/Contact/index.jsx";
import ContactBannerOne from "../components/AboutDesc/Contact/contactBanner.jsx"

const About = () => {
  const { loading, data } = useQuery(QUERY_ARTISTS);
  const artists = data?.artists || [];

  // State for managing the count of donations
  const [donationCount, setDonationCount] = useState(0);

  // State to hold the letter class
  const [letterClass, setLetterClass] = useState("");

  useEffect(() => {
    // Set a timeout to change the letter class after 7 seconds
    const timeoutId = setTimeout(() => {
      setLetterClass("Hello");
    }, 7000);

    // Clean-up function to clear the timeout when component unmounts or when the effect is re-executed
    return () => clearTimeout(timeoutId);
  }, []); // Empty dependency array means this effect will only run once, similar to componentDidMount

  if (loading) {
    return <div>Loading...</div>;
  }

  // Function to handle donation button click
  const handleDonateClick = () => {
    // Increment donation count
    setDonationCount(donationCount + 1);
  };

  const handleDeleteClick = () => {
    if (donationCount > 0) {
      //decrement donation count
      setDonationCount(donationCount - 1);
    }
  };

  return (
    <div>
      <div className="flex w-screen justify-center px-3">
        {/* Render artists here */}
        {artists.map((artist) => (
          // Log artist object
          <div key={artist.id} style={{ textAlign: "center" }}>
            {artist.name}
          </div>
        ))}
      </div>
      <div className="grid place-items-center">
        {letterClass} Meet the Artists
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, autem
        placeat! Pariatur veniam obcaecati quis, harum, perferendis earum
        asperiores qui dolor, expedita error ducimus dicta! Sint at dolor magnam
        illum.
      </p>
      {/* Render Description */}

      <section key={artists} className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 flex justify-center">
          {" "}
          {/* Adjusted to the right */}
          <div className="max-w-screen-md flex justify-content-">
            {/* Center the AboutDesc component */}
            <AboutDesc></AboutDesc>
          </div>
          <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4"></div>
        </div>
      </section>
      <div className="flex justify-center">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleDeleteClick} // Attach onClick event handler for decreasing
        >
          Remove
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleDonateClick} // Attach onClick event handler for increasing
        >
          Donate ({donationCount}) {/* Display donation count */}
        </button>
        <div></div>
      </div>
      <ContactBannerOne/>
      <Contact></Contact>
    </div>
  );
};

export default About;
