const API = "05e9e9a72c07f3a5949ba94dba206c0d";
const defaultAdress = "http://api.openweathermap.org/";
const defaultUACode = "UA";

export const fetchCity = async (city: string) => {
  const resp = await fetch(
    `${defaultAdress}geo/1.0/direct?q=${city},${defaultUACode}&limit=5&appid=${API}`
  ).then((r) => r.json());
  return resp;
};
