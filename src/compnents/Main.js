import React from "react";
import eth from "../assets/weth.png";

function Main({ selectednft }) {
  return (
    <div className="h-auto py-10 w-full px-2 md:px-5 flex items-center pb-5 border-b border-gray-700">
      <div className="flex flex-col md:flex-row md:space-x-5">
        <img
          src={selectednft.image_preview_url}
          alt={selectednft.name}
          className="w-auto h-80 rounded-md"
        />
        <div className="md:space-y-3 mt-3 md:mt-0">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold">
            {selectednft.name}
          </h2>
          <p className="text-xl md:text-5xl text-gray-700">
            .#{selectednft.token_id}
          </p>

          <div className=" my-2 flex items-center space-x-1">
            <img src={eth} alt="etherium" className="w-auto h-10 md:h-16" />
            <p className="text-3xl font-medium text-gray-100">
              {selectednft.traits[0]?.value}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
