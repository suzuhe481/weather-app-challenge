interface IAPIResponse<T> {
  data?: T;
}

export default async function fetchWeather<T>(
  latitude: number,
  longitude: number,
  signal: AbortSignal,
  temperatureUnit: string = "Celsius",
  windSpeedUnit: string = "kmh",
  precipitationUnit: string = "mm"
): Promise<IAPIResponse<T>> {
  const baseUrl = "https://api.open-meteo.com/v1/forecast";

  const baseWeatherOptions =
    "&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max&hourly=temperature_2m,weather_code&current=apparent_temperature,temperature_2m,precipitation,weather_code,wind_speed_10m,wind_direction_10m&timezone=auto";

  const temperatureUnitOption =
    temperatureUnit === "Fahrenheit"
      ? "&temperature_unit=fahrenheit"
      : "&temperature_unit=celsius";
  const windSpeedUnitOption =
    windSpeedUnit === "mph" ? "&wind_speed_unit=mph" : "&wind_speed_unit=kmh";
  const precipitationUnitOption =
    precipitationUnit === "in"
      ? "&precipitation_unit=inch"
      : "&precipitation_unit=mm";

  const url = `${baseUrl}?latitude=${latitude}&longitude=${longitude}${baseWeatherOptions}${temperatureUnitOption}${windSpeedUnitOption}${precipitationUnitOption}`;

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error("Error fetching locations");
  }

  const data = await response.json();

  return data;
}
