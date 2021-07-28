export const fetchCharacters = async () => {
  const res = await

  fetch('https://rickandmortyapi.com/api/cjaracter');
  const json = await res.json();
  
  return json.results;
};
