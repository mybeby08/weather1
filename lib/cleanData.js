const cleanData = (data, city) => {
  const {
    current_weather,
    timezone,
    hourly,
    hourly_units,
    timezone_abbreviation,
  } = data;
  const { temperature, weathercode, time } =
    current_weather;
  const {
    temperature_2m,
    uv_index,
  } = hourly;

  return {
    current_weather: {
      temperature,
      weathercode,
      time,
    },
    hourly: {
      temperature_2m: temperature_2m.slice(0, 24),
      uv_index: uv_index.slice(0, 24),
    },
    timezone,
    timezone_abbreviation,
    hourly_units,
    city,
  };
};

export default cleanData;
