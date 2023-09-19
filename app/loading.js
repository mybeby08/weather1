import React from "react";

function loading() {
  return (
    <div className="flex items-center bg-gray-800 min-h-screen justify-center text-black animate-pulse">
      <div>
        <h1>Loading...</h1>
      </div>
    </div>
  );
}

export default loading;
