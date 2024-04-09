import React, { useEffect } from "react"; // Import React and useEffect
import { useRouteError, useNavigate } from "react-router-dom"; // Import useRouteError and useNavigate from react-router-dom

export default function ErrorPage() {
  const error = useRouteError(); // Get the error using useRouteError hook
  const navigate = useNavigate(); // Get the navigate function using useNavigate hook

  useEffect(() => {
    console.error(error); // Log the error to console when the component mounts
  }, [error]); // Run this effect whenever the error changes

  return (
    <div>
      <div className="not-found-page-base-background-color">
        <div
          className="tv_outer"
          style={{
            overflow: "clip",
            margin: "content-box",
          }}
        >
          <div className="tv_middle">
            <img
              className="tv_inner"
              src="https://i.imgur.com/AdvTDlI.png"
              alt="404 not found"
              style={{
                maxWidth: "85%",
                width: "300px",
                border: "25px solid rgb(54, 55, 124)",
                borderRadius: "36px",
                marginLeft: "auto",
                marginRight: "auto",
                display: "table",
              }}
            />
            <p
              className="tv-inner-text"
              style={{
                textAlign: "center",
                maxWidth: "90%",
                marginLeft: "auto",
                marginRight: "auto",
                display: "table",
                fontSize: "22px",
                fontWeight: "500",
              }}
            >
              This page does not exist
            </p>
            <span className="border-b border-black block w-full mt-2"></span>
            <div className="text-center">
              <a
                href="/"
                className="text-purple-600 text-lg font-semibold block mt-2"
              >
                Return to Home Page
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}