import { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";

import Auth from "../utils/auth";

const images = [
  { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg" },
  { url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Robert_Downey%2C_Jr._2012.jpg/1200px-Robert_Downey%2C_Jr._2012.jpg" },
];

const Shop = () => {
  const [formState, setFormState] = useState({ text: "" });
  //   const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      text: "",
    });
  };

  const handleArtist = () => {};
  const handlePrice = () => {};

  return (
    <div className="w-screen flex flex-row p-5 justify-center gap-14">
      <div className="p-5 border-2 border-black">
        {/* Searchbar */}
        <form className="w-56" onSubmit={handleFormSubmit}>
          <input
            className="placeholder:text-black border-2 border-black rounded-md bg-transparent text-black p-1"
            placeholder="Search by name"
            name="text"
            type="text"
            value={formState.text}
            onChange={handleChange}
          />
        </form>
        <div className="flex flex-col items-start mt-2">
          <button className="cursor-pointer" onClick={handleArtist}>
            Sort by artist
          </button>
          <button onClick={handlePrice}>Sort by price</button>
        </div>
      </div>
      {/* product grid */}
      <div className="grid grid-cols-3 gap-5">
        {images.map((img, index) => (
          <Link key={index} to={`/products/${img.id}`}>
            <img className="h-64 w-64 object-cover" src={img.url} alt="image" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shop;
