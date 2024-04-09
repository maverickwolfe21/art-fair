import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_USER, QUERY_ME } from "../utils/queries";
import { useApp } from "../utils/app-context";


const Profile = () => {
  const { username: userParam } = useParams();
  const {loggedIn, state} = useApp()

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (loggedIn() && state.user.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return <h4>You need to be logged in to see this. Use the navigation links above to sign up or log in!</h4>;
  }

  return (
    <div>
      <h1>Me</h1>
    </div>
  );
};

export default Profile;
