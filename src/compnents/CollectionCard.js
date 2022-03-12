import React from "react";
import eth from "../assets/weth.png";

function CollectionCard({ id, name, traits, image, setSelectednft }) {
  const setMain = () => {
    setSelectednft({
      token_id: id,
      name: name,
      traits: traits,
      image_preview_url: image,
    });
  };
  return (
    <div
      className="bg-gray-800 rounded-md min-w-max snap-center cursor-pointer "
      onClick={setMain}
    >
      <img src={image} alt={name} className="rounded-t-md w-full h-auto" />
      <div className="mt-5 px-4">
        <h3 className="font-bold tracking-wider text-sm md:text-lg whitespace-nowrap">
          {name}
        </h3>
        <p className="text-lg md:text-2xl text-gray-700">.#{id}</p>
      </div>
      <div className="px-5 my-4 flex items-center space-x-1">
        <img src={eth} alt="etherium" className="w-auto h-5" />
        <p className="text-sm md:text-md lg:text-lg font-medium text-gray-100">
          {traits[0]?.value}
        </p>
      </div>
    </div>
  );
}

export default CollectionCard;
