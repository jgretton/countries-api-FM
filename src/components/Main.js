import React, { useEffect, useState } from "react";

import { fetchAll } from "../hooks/fetchAll";
import { CountryCard } from "./CountryCard";

import { MdSearch } from "react-icons/md";

export const Main = () => {
  const [countryData, setCountryData] = useState([]);

  const fetchCountries = async () => {
    const data = await fetchAll();

    setCountryData(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <main className="bg-gray-200 h-full pt-10">
      <div className="container h-full m-auto">
        <div className="">
          <label className="p-4 flex flex-row items-center bg-white rounded-md w-11/12 m-auto shadow-md ">
            <MdSearch size={30} color="grey" />
            <input
              type="text"
              placeholder="Search for a country..."
              className="w-full p-2"
            />
          </label>

          <label htmlFor="">
            <select
              name="Filter"
              id=""
              className="bg-white rounded-md p-4 w-2/3 m-5 shadow-md"
            >
              <option value="null">Filter by Region</option>
              <option value="Africa">Africa</option>
              <option value="American">American</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </label>
        </div>
        <div className="flex flex-row flex-wrap m-auto justify-between">
          {countryData.map((country) => {
            return (
              <CountryCard
                img={country.flag}
                name={country.name}
                population={country.population}
                region={country.region}
                capital={country.capital}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};
