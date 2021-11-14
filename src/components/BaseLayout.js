import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const BaseLayout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-white flex items-center justify-between flex-wrap pt-4 pb-4 pl-6 pr-6 border-b-2">
        <div className="flex items-center flex-shrink-0 mr-6 text-3xl font-bold">
          <Link to="/">Dashboard</Link>
        </div>
      </nav>
      <div className="flex flex-col min-h-screen pt-6 bg-gray-50 pb-20">
        {location.pathname !== "/" && (
          <div className="px-4 md:px-12 mb-2">
            <button onClick={() => navigate(-1)} className="font-semibold">
              <FontAwesomeIcon icon={faArrowLeft} size="lg" /> Back
            </button>
          </div>
        )}
        <main className="flex flex-col items-center w-full flex-1 px-4 md:px-12 text-center">
          {children}
        </main>
      </div>
    </>
  );
};

export default BaseLayout;
