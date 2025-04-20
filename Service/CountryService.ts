import { getAllCountries } from "../Data/Repository/CountryRepository";

export const getCountries = async () => {  
  return await getAllCountries();
}