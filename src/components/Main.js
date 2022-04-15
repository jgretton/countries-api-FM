import React, { useEffect, useState } from "react";

import { fetchAll } from "../hooks/fetchAll";
import { CountryCard } from "./CountryCard";

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
      <div className="flex flex-row flex-wrap m-auto justify-center">
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
    </main>
  );
};
