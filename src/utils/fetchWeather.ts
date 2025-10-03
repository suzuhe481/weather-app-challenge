interface ICurrentWeather {
  temperature_2m: number;
  apparent_temperature: number;
  weather_code: number;

  relative_humidity_2m: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  precipitation: number;
}

interface IDailyWeather {
  time: string[];
  weather_code: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  uv_index_max: number[];
}

interface IHourlyWeather {
  time: string[];
  weather_code: number[];
  temperature_2m: number[];
}

export interface IAPIWeatherResponse {
  current: ICurrentWeather;
  daily: IDailyWeather;
  hourly: IHourlyWeather;
}

export default async function fetchWeather(
  latitude: number,
  longitude: number,
  signal: AbortSignal,
  temperatureUnit: string = "Celsius",
  windSpeedUnit: string = "kmh",
  precipitationUnit: string = "mm"
): Promise<IAPIWeatherResponse> {
  const baseUrl = "https://api.open-meteo.com/v1/forecast";

  const baseWeatherOptions =
    "&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m&timezone=auto";

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
