import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_PRODUCTS } from "../utils/queries";
import ProductCard from "../components/ProductCard/index";

const Shop = () => {
  const [text, setText] = useState("");
  //   const [login, { error, data }] = useMutation(LOGIN_USER);
  const { loading, error, data } = useQuery(QUERY_PRODUCTS);
  const [products, setProducts] = useState([]);

  const initialRender = useRef(true);

  useEffect(() => {}, [products, text]);

  // update state based on form input changes
  const handleChange = (event) => {
    if (event.target.value === "") {
      setProducts(data?.products);
    }
    setText(event.target.value);
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      if (text.length !== 0) {
        setProducts(
          products.length > 0
            ? products?.filter((p) => p.productName.toLowerCase().includes(text))
            : data?.products?.filter((p) => p.productName.toLowerCase().includes(text))
        );
      } else {
        setProducts(data?.products);
      }
      initialRender.current = false;
    } catch (e) {
      console.error(e);
    }
  };

  const handleArtist = () => {
    const tempData = products.length > 0 ? [...products] : [...data?.products];
    setProducts(tempData?.sort((a, b) => a.artistName.localeCompare(b.artistName)));
  };
  const handlePrice = () => {
    const tempData = products.length > 0 ? [...products] : [...data?.products];
    setProducts(tempData?.sort((a, b) => a.price - b.price));
  };
  const handleDefault = () => {
    setProducts(data?.products?.filter((p) => p.productName.toLowerCase().includes(text)));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-screen flex flex-col items-center lg:items-start gap-4 lg:w-screen lg:flex lg:flex-row lg:p-5 lg:justify-center lg:gap-14">
      <div className="lg:flex lg:flex-col lg:p-5 lg:border-2 lg:border-black">
        {/* Searchbar */}
        <form className="w-56 flex gap-2 justify-center " onSubmit={handleFormSubmit}>
          <input
            className="placeholder:text-black border-2 border-black rounded-md bg-transparent text-black p-1"
            placeholder="Search by product name"
            name="text"
            type="text"
            value={text}
            onChange={handleChange}
          />
          <button type="submit" className="font-semibold placeholder:text-black border-2 border-black rounded-md bg-transparent text-black p-1">
            GO
          </button>
        </form>
        <div className="hidden lg:flex lg:flex-col lg:items-start lg:mt-2">
          <button className="cursor-pointer" onClick={handleArtist}>
            Sort By Artist
          </button>
          <button onClick={handlePrice}>Sort By Price</button>
          <button onClick={handleDefault}>Sort By Default</button>
        </div>
      </div>
      {/* product grid */}

      <div className="flex flex-col justify-center gap-7 md:grid md:grid-cols-2 md:gap-2 md:gap-y-6 xl:grid xl:grid-cols-3 xl:gap-2 xl:gap-y-6">
        {text?.length > 0 && initialRender.current === false && products?.length === 0 ? (
          <h2 className="w-96">
            We couldn't find any products with the name you specified. Please make sure you spelled it correctly and try again!
          </h2>
        ) : products?.length > 0 ? (
          products?.map((product) => (
            <Link key={product._id} to={`/products/${product._id}`}>
              <ProductCard product={product} /> {/* Render ProductCard component */}
            </Link>
          ))
        ) : (
          data.products?.map((product) => (
            <Link key={product._id} to={`/products/${product._id}`}>
              <ProductCard product={product} /> {/* Render ProductCard component */}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Shop;
