export default async function callWeatherAPI(city) {
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?key=YOUR_API_KEY`,
    {
      mode: "cors",
    },
  );

  if (!response.ok) {
    throw new Error(`Not OK. HTTP Code: ${response.status}`);
  }

  const data = await response.json();

  return data;
}
