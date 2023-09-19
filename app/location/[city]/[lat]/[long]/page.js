import React from "react";
import { getApolloClient } from "@/apollo";
import GET_QUERY from "@/graphql/queries/fetchWeather";
import MsgCard from "@/components/MsgCard";
import WeatherStats from "@/components/WeatherStats";
import InfoPanel from "@/components/InfoPanel";
export const revalidate = 60;
async function page({ params: { city, lat, long } }) {
  const client = getApolloClient();
  const { data } = await client.query({
    query: GET_QUERY,
    variables: {
      current_weather: "true",
      latitude: lat,
      longitude: long,
      timezone: "Europe/London",
    },
  });
  const results = data.myQuery;
  return (
    <div className="flex flex-col min-h-screen md:flex-row dark:bg-gray-100 dark:text-black">
      <InfoPanel city={city} lat={lat} long={long} results={results} />
      <div className="flex-1 p-5 lg:p-10">
        <div className="pb-5">
          <div className="pb-5">
            <h2 className="font-bold text-4xl">Todays Overview</h2>
            <p className="text-sm text-gray-500">
              last updated at: {""}
              {new Date(results.current_weather.time).toLocaleString()}(
              {results.current_weather.timezone})
            </p>
          </div>
          <div>{/*Message Card yet to come*/}</div>
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 m-2">
            <div className="flex space-x-3">
              <WeatherStats
                title="Maximum Temp"
                metric={`${results.daily.temperature_2m_max[0].toFixed(1)}`}
                color="yellow"
              />
              <WeatherStats
                title="Minimum Temp"
                metric={`${results.daily.temperature_2m_min[0].toFixed(1)}`}
                color="green"
              />
            </div>
            <div>
              <WeatherStats
                title="UV Index"
                metric={results.daily.uv_index_max[0].toFixed(1)}
                color="red"
              />
              {Number(results.daily.uv_index_max[0].toFixed(1)) > 5 ? (
                <MsgCard message="UV Index is high, wear sunscreen!" warning />
              ) : (
                <MsgCard message="UV Index is low, no sunscreen needed!" />
              )}
            </div>
          </div>
          <hr className="mb-5 text-black" />
          <div className="space-y-2"></div>
        </div>
      </div>
    </div>
  );
}

export default page;
