export const fetchCharacters = async () => {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const json = await res.json();
  console.log(json.results, 'fetchcall');
  return json.results;
};

// {
//   info: { },
//   results: [{ id, name, species, status, image }]
// }
