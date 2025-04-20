import queryHandler from "../QueryHandler";

export const getAllCountries = async () => {
  return await queryHandler("SELECT * FROM country");
}