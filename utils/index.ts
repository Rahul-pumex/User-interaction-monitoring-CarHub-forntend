import { FilterProps } from "@/types";


export const updateSearchParams = (type: string, value: string) => {
    // Get the current URL search params
    const searchParams = new URLSearchParams(window.location.search);
  
    // Set the specified search parameter to the given value
    searchParams.set(type, value);
  
    // Set the specified search parameter to the given value
    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
    return newPathname;
  };
  

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;
  
    // Set the required headers for the API request
    const headers: HeadersInit = {
      "X-RapidAPI-Key": '97b15214cfmsh9b7579d2fa88f95p1ba73djsna8491b99be3b' || "",
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    };
  
    // Set the required headers for the API request
    const response = await fetch(
      `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
      {
        headers: headers,
      }
    );
  
    // Parse the response as JSON
    const result = await response.json();
//    console.log("result",result)
    return result;
  }