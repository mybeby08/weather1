"use client";
import CityPicker from "./CityPicker";
import weatherCodeToString from "@/lib/weatherCodeToString";
import { MoonIcon, SunIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Favs from "./Favs";
function InfoPanel({ city, lat, long, results }) {
  return (
    <div className="bg-gray-800 dark:bg-white dark:text-black p-10 text-white">
      <div className="pb-5 space-y-2">
        <div className="flex items-center">
          <h1 className="text-6xl font-bold">{decodeURI(city)}</h1>
          <Favs city={city} lat={lat} long={long} />
        </div>
        <p className="text-xs text-gray-400">
          Long/Lat: {long},{lat},
        </p>
      </div>
      <CityPicker />
      <hr className="my-10" />
      <div className="mt-5 flex items-center justify-between space-x-10 mb-5">
        <div>
          <p className="text-xl">
            {new Date().toLocaleDateString("en-GB", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p className="font-extralight">
            Timezone: {Intl.DateTimeFormat().resolvedOptions().timeZone}
          </p>
        </div>
        <p className="text-xl font-bold uppercase">
          {new Date().toLocaleTimeString("en-GB", {
            hour: "numeric",
            minute: "numeric",
          })}
        </p>
      </div>
      <hr className="mt-10 mb-5" />
      <div className="flex items-center justify-between ">
        <div>
          <Image
            src={`https://www.weatherbit.io/static/img/icons/${
              weatherCodeToString[results.current_weather.weathercode].icon
            }.png`}
            width={75}
            height={75}
            alt="weather icon"
          />
          <div className="flex items-center justify-between space-x-10">
            <p className="text-6xl font-semibold">
              {results.current_weather.temperature.toFixed(1)}°C
            </p>
            <p className="text-right font-extralight text-lg">
              {weatherCodeToString[results.current_weather.weathercode].label}
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-2 py-5">
        <div className="flex items-center space-x-2 px-4 py-3 border border-gray-400 rounded-md bg-gray-500 dark:bg-slate-600">
          <SunIcon className="h-5 w-5 text-white" />
          <div className="flex-1 flex justify-between items-center">
            <p className="text-white">Sunrise</p>
            <p className="uppercase text-2xl">
              {new Date(results.daily.sunrise[0]).toLocaleTimeString("en-GB", {
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 px-4 py-3 border border-gray-400 rounded-md bg-gray-500 dark:bg-slate-800">
          <MoonIcon className="h-5 w-5 text-white" />
          <div className="flex-1 flex justify-between items-center">
            <p className="text-white">Sunset</p>
            <p className="uppercase text-2xl">
              {new Date(results.daily.sunset[0]).toLocaleTimeString("en-GB", {
                hour: "numeric",
                minute: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoPanel;
