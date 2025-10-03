export interface ILocation {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface IAPILocationsResponse {
  results: ILocation[];
}

/**
 * Fetches the locations matching the given query from the geocoding API.
 *
 * @template T The type of the data returned by the API.
 * @param {string} query The query to search for.
 * @param {AbortSignal} signal The abort signal to cancel the fetch.
 * @returns {Promise<IAPILocationsResponse>} A promise containing the data returned by the API.
 */
export default async function fetchLocations(
  query: string,
  signal: AbortSignal
): Promise<IAPILocationsResponse> {
  const baseUrl = "https://geocoding-api.open-meteo.com/v1";
  const urlSuffix = "&language=en&format=json";

  const count = "5";

  const url = `${baseUrl}/search?name=${query}&count=${count}${urlSuffix}`;

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error("Error fetching locations");
  }

  const data = await response.json();

  return data;
}
