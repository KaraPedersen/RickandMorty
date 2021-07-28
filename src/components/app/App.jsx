import React from 'react';
import RickAndMortyCharacters from '../../containers/RickAndMortyCharacters'; 
// import Character from '../characters/Character';

export default function App() {
  return (
    <RickAndMortyCharacters />
  // hardcoded one character to see if it works
  //   <Character
  //     name="Rick Sanchez"
  //     species="Human"
  //     status="Alive"
  //     image="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  //   />
  );
  // <RickandMortyCharacters />;
}
