export async function fetchCars() {
  const headers = {
    'x-rapidapi-key': '6d40161bb8msh48091d584932143p17d82djsnb21dd108e904',
    'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com',
  };

  const response = await fetch(
    'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
