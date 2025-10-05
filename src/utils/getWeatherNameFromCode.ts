interface IWeatherNameMapProps {
  [key: number]: string;
}

const weatherNameMap: IWeatherNameMapProps = {
  0: "Clear Sky",
  1: "Mainly Clear",
  2: "Partly Cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Fog",
  51: "Light Drizzle",
  53: "Moderate Drizzle",
  55: "Heavy Drizzle",
  56: "Freezing Drizzle",
  57: "Freezing Drizzle",
  61: "Slight Rain",
  63: "Rain",
  65: "Heavy Rain",
  66: "Light Freezing Rain",
  67: "Heavy Freezing Rain",
  71: "Flurries",
  73: "Snow",
  75: "Heavy Snow",
  77: "Snow Grains",
  80: "Light Rain",
  81: "Rain",
  82: "Heavy Rain",
  85: "Flurries",
  86: "Heavy Snow",
  95: "Thunderstorms",
  96: "Thunderstorms with Light Hail",
  99: "Thunderstorms with Heavy Hail",
};

export const getWeatherNameFromCode = (code: number | null) => {
  if (code === null) return "";

  const weatherName = weatherNameMap[code] || "";

  return weatherName;
};
