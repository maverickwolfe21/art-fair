import React, { useState } from "react"; // Step 1: Import useState
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { QUERY_ARTISTS } from "../utils/queries";
import AboutDesc from "../components/AboutDesc/AboutDesc.jsx";
// import DonateInput from "../components/AboutInput/input.jsx";
import Contact from "../components/AboutDesc/Contact/index.jsx";
import ContactBannerOne from "../components/AboutDesc/Contact/contactBanner.jsx";
import ArtistCard from "../components/ArtistCard/index.jsx";

const About = () => {
  const { loading, data } = useQuery(QUERY_ARTISTS);
  const artists = data?.artists || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleDonateClick = () => {};

  return (
    <div className="w-screen flex flex-col items-center gap-4">
      <div className="flex flex-col gap-5">
        <div className="font-medium text-xl text-center">Meet the Artists</div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {artists.map((artist) => (
            <Link key={artist._id} to={`/artists/${artist._id}`}>
              <ArtistCard artist={artist} /> {/* Render ArtistCard component */}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-screen flex justify-center">
        <p className="w-full px-16 py-5 lg:w-3/4 2xl:w-3/6">
          At Arts Studios, we are dedicated to highlight top of class artists and showcase great arts and features on all kinds of styles. Please be
          sure to contribute and support the site by donating!
        </p>
      </div>
      {/* Render Description */}

      <div className="flex justify-center mb-2">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-8 py-2.5 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleDonateClick} // Attach onClick event handler for increasing
        >
          Donate
        </button>
      </div>
      <section class="w-screen bg-white dark:bg-gray-900 mr-3">
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
          <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Got a technical issue? Want to send feedback about a feature? Let us know.
          </p>
          <form action="#" class="space-y-8">
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Your email
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@example.com"
                required
              ></input>
            </div>
            <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you!"
                required
              ></input>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default About;
