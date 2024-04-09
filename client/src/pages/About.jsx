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
    <div className="w-screen flex flex-col items-center">
      <div className="flex flex-col gap-3">
        <div className="font-medium text-xl text-center">Meet the Artists</div>
        <div className="flex flex-col lg:flex-row justify-center gap-5">
          {artists.map((artist) => (
            // Log artist object
            <Link key={artist._id} to={`/artists/${artist._id}`}>
              <ArtistCard key={artist.id} artist={artist} style={{ textAlign: "center" }} />
            </Link>
          ))}
        </div>
      </div>
      <div className="w-screen flex justify-center lg:mt-5">
        <p className="w-full p-5 lg:w-2/4 lg:p-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, autem placeat! Pariatur veniam obcaecati quis, harum, perferendis earum
          asperiores qui dolor, expedita error ducimus dicta! Sint at dolor magnam illum.
        </p>
      </div>
      {/* Render Description */}

      <div className="lg:mt-5 flex justify-center mb-3">
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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
              <textarea
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              ></textarea>
            </div>
            <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Subject
              </label>
              <textarea
                type="text"
                id="subject"
                class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required
              ></textarea>
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
