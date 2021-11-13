import React from "react";

const BaseLayout = ({ children }) => {
  return (
    <>
      <nav className="bg-white flex items-center justify-between flex-wrap pt-4 pb-4 pl-6 pr-6 border-b-2">
        <div className="flex items-center flex-shrink-0 mr-6 text-3xl font-bold">
          Dashboard
        </div>
      </nav>
      <div className="flex flex-col items-center justify-center min-h-screen pt-6 bg-gray-50 pb-20">
        <main className="flex flex-col items-center w-full flex-1 px-4 md:px-12 text-center">
          {children}
        </main>
      </div>
    </>
  );
};

export default BaseLayout;
