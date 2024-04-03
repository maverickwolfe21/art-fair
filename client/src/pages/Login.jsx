import { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
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
              <div className="flex flex-row justify-center gap-2 mt-3">
                <button className="p-1 cursor-pointer border-2 border-black rounded-md bg-transparent text-black" type="submit">
                  Sign In
                </button>
                <Link className="p-1 cursor-pointer border-2 border-black rounded-md bg-transparent text-black" to="/signup">
                  Register
                </Link>
              </div>
            </form>
          )}

          {error && <div className="text-red-600 mt-2 text-center">{error.message}</div>}
        </div>
      </div>
    </main>
  );
};

export default Login;
