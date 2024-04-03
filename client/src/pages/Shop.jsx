import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

// import { useMutation } from "@apollo/client";

import Auth from "../utils/auth";
import { QUERY_PRODUCTS } from "../utils/queries";
import ProductCard from "../components/ProductCard/index";

// const images = [
//   { url: "https://cdn.discordapp.com/attachments/1184992990868033647/1224241540042588232/jayblesdrums_realistic_product_photography_high_def_with_profes_4b096de7-047f-4fa5-a321-00024ffbe3f1.png?ex=661cc6c8&is=660a51c8&hm=3e766484139256f16be54ddb3a7ea4866da74352237fb5af1dc33ed558a7f5d6&" },
//   { url: "https://cdn.discordapp.com/attachments/1184992990868033647/1224241540042588232/jayblesdrums_realistic_product_photography_high_def_with_profes_4b096de7-047f-4fa5-a321-00024ffbe3f1.png?ex=661cc6c8&is=660a51c8&hm=3e766484139256f16be54ddb3a7ea4866da74352237fb5af1dc33ed558a7f5d6&" },
//   { url: "https://cdn.discordapp.com/attachments/1184992990868033647/1224241540042588232/jayblesdrums_realistic_product_photography_high_def_with_profes_4b096de7-047f-4fa5-a321-00024ffbe3f1.png?ex=661cc6c8&is=660a51c8&hm=3e766484139256f16be54ddb3a7ea4866da74352237fb5af1dc33ed558a7f5d6&" },
//   { url: "https://cdn.discordapp.com/attachments/1184992990868033647/1224241540042588232/jayblesdrums_realistic_product_photography_high_def_with_profes_4b096de7-047f-4fa5-a321-00024ffbe3f1.png?ex=661cc6c8&is=660a51c8&hm=3e766484139256f16be54ddb3a7ea4866da74352237fb5af1dc33ed558a7f5d6&" },
//   { url: "https://cdn.discordapp.com/attachments/1184992990868033647/1224241540042588232/jayblesdrums_realistic_product_photography_high_def_with_profes_4b096de7-047f-4fa5-a321-00024ffbe3f1.png?ex=661cc6c8&is=660a51c8&hm=3e766484139256f16be54ddb3a7ea4866da74352237fb5af1dc33ed558a7f5d6&" },
//   { url: "https://cdn.discordapp.com/attachments/1184992990868033647/1224241540042588232/jayblesdrums_realistic_product_photography_high_def_with_profes_4b096de7-047f-4fa5-a321-00024ffbe3f1.png?ex=661cc6c8&is=660a51c8&hm=3e766484139256f16be54ddb3a7ea4866da74352237fb5af1dc33ed558a7f5d6&" },
// ];

const Shop = () => {
  const [formState, setFormState] = useState({ text: "" });
  //   const [login, { error, data }] = useMutation(LOGIN_USER);
  const { loading, error, data } = useQuery(QUERY_PRODUCTS);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

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
      {/* <div className="grid grid-cols-3 gap-5">
        {images.map((img, index) => (
          <Link key={index} to={`/products/${img.id}`}>
            <img className="h-64 w-64 object-cover" src={img.url} alt="image" />
          </Link>
        ))}
      </div> */}
      <div className="grid grid-cols-3 gap-5">
        {data.products.map((product) => (
          <Link key={product._id} to={`/products/${product._id}`}>
            <ProductCard product={product} /> {/* Render ProductCard component */}
          </Link>
        ))}
      </div>

    </div>
  );
};

export default Shop;
