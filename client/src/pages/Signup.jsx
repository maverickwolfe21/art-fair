import { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="w-screen flex justify-center">
      <div className="w-96 flex flex-col border-2 border-black p-4">
        <h4 className="text-lg mb-3 font-semibold">Login</h4>
        <div className="flex flex-col">
          {data ? (
            <p>
              Success! You may now head <Link to="/">back to the homepage.</Link>
            </p>
          ) : (
            <form className="flex flex-col w-full gap-1" onSubmit={handleFormSubmit}>
              <label for="username">Username</label>
              <input
                className="border-2 border-black rounded-md bg-transparent text-black p-1"
                placeholder="Your username"
                name="username"
                type="username"
                value={formState.username}
                onChange={handleChange}
              />
              <label for="email">Email</label>
              <input
                className="border-2 border-black rounded-md bg-transparent text-black p-1"
                placeholder="Your email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
              <label for="email">Password</label>
              <input
                className="border-2 border-black rounded-md bg-transparent text-black p-1"
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
              <button className="mt-3 w-20 p-1 cursor-pointer border-2 border-black rounded-md bg-transparent text-black m-auto" type="submit">
                Submit
              </button>
            </form>
          )}

          {error && <div className="text-red-600 mt-2 text-center">{error.message}</div>}
        </div>
      </div>
    </main>
  );
};

export default Signup;
