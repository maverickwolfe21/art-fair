import { useEffect } from "react";
import { useRouteError, useNavigate } from "react-router-dom";


export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

function handleGoBack() {
  navigate(-1); // Navigate back to the previous page
}

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <button onClick={handleGoBack}>Go back!</button>
    </div>
  );
}
