import { gql } from "@apollo/client";

const GET_QUERY = gql`
  query MyQuery(
    $current_weather: String
    $daily: String = "temperature_2m_max,temperature_2m_min,uv_index_max,sunrise,sunset"
    $hourly: String = "temperature_2m,uv_index"
    $latitude: String!
    $longitude: String!
    $timezone: String!
  ) {
    myQuery(
      current_weather: $current_weather
      daily: $daily
      hourly: $hourly
      latitude: $latitude
      longitude: $longitude
      timezone: $timezone
    ) {
      latitude
      longitude
      timezone
      current_weather {
        temperature
        weathercode
        time
      }
      daily {
        temperature_2m_min
        temperature_2m_max
        uv_index_max
        time
        sunrise
        sunset
      }
      hourly {
        temperature_2m
        uv_index
        time
      }
    }
  }
`;

export default GET_QUERY;
