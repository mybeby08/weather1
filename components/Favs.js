"use client";
import { useState, useEffect } from "react";
import { HeartIcon } from "@heroicons/react/solid";
import { v4 as uuidv4 } from "uuid";
function Favs({ city, lat, long }) {
  const [favs, setFavs] = useState([]);
  const [isFav, setIsFav] = useState(false);
  const setLocalStorage = (dataSaveInLS) => {
    setFavs(dataSaveInLS);
    localStorage.setItem("favs", JSON.stringify(dataSaveInLS));
  };
  const addFavs = () => {
    if (favs) {
      const favsExist = favs.find((fav) => fav.city === city);
      if (favsExist) {
        return;
      } else {
        const newFav = {
          id: uuidv4(),
          city,
          lat,
          long,
          link: `location/${city}/${lat}/${long}`,
        };
        const dataSaveInLS = [...favs, newFav];
        setLocalStorage(dataSaveInLS);
      }
    }
  };

  const onClick = () => {
    addFavs();
  };

  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favs")) || []);
  }, []);
  return (
    <>
      <HeartIcon
        className={`h-12 w-12 text-red-500 ${isFav ? "animate-pulse" : ""}`}
        onClick={() => onClick()}
      />
    </>
  );
}

export default Favs;
