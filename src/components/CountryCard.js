import React from "react";

export const CountryCard = ({ img, name, population, region, capital }) => {
  return (
    <div className="max-w-sm w-5/6 bg-white shadow-sm rounded-md m-auto h-auto my-10 mx-5">
      <img src={img} alt="" className="w-full rounded-t-md h-56 object-cover" />
      <div className="flex flex-col p-5 pb-12">
        <p className="font-bold text-xl mb-6">{name}</p>
        <p className="font-semibold">
          Population: <span className="font-normal">{population}</span>
        </p>
        <p className="font-semibold">
          Region: <span className="font-normal">{region}</span>
        </p>
        <p className="font-semibold">
          Capital: <span className="font-normal">{capital}</span>
        </p>
      </div>
    </div>
  );
};
