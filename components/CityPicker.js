"use client";
import { Country, City } from "country-state-city";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "react-select";
import { GlobeIcon } from "@heroicons/react/solid";
const options = Country.getAllCountries().map((country) => ({
  value: {
    latitude: country.latitude,
    longitude: country.longitude,
    isoCode: country.isoCode,
  },
  label: country.name,
}));
function CityPicker() {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const router = useRouter();

  const handleSelectedCountry = (options) => {
    setSelectedCountry(options);
    setSelectedCity(null);
  };
  const handleSelectedCity = (options) => {
    setSelectedCity(options);
    router.push(
      `/location/${options?.value.stateName}/${options?.value.latitude}/${options?.value.longitude}`
    );
  };
  //save location to storage or firebase
  return (
    <div className="space-y-4 text-black">
      <div className="space-y-2">
        <div className="flex items-center space-x-2 text-white">
          <GlobeIcon className="h-5 w-5 text-white" />
          <label htmlFor="country">Country</label>
        </div>
        <Select
          options={options}
          value={selectedCountry}
          onChange={handleSelectedCountry}
        />
      </div>
      {selectedCountry && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-white">
            <GlobeIcon className="h-5 w-5 text-white" />
            <label htmlFor="city">City</label>
          </div>
          <Select
            options={City.getCitiesOfCountry(
              selectedCountry.value.isoCode
            )?.map((state) => ({
              value: {
                latitude: state.latitude,
                longitude: state.longitude,
                countryCode: state.countryCode,
                stateCode: state.stateCode,
                stateName: state.name,
              },
              label: state.name,
            }))}
            value={selectedCity}
            onChange={handleSelectedCity}
          />
        </div>
      )}
    </div>
  );
}

export default CityPicker;
