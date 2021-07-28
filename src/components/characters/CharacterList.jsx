import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
//build a CharacterList presentational component
const CharacterList = ({ characters }) => {
  const characterElements = characters.map((character) => (
    <li key={character.id}>
      <Character
        {...character}
      //passing props to the component
        // name={character.name}
        // species={character.species}
        // status={character.species}
        // image={character.image}
      />
    </li>
  ));

  return <ul>{characterElements}</ul>;
};

CharacterList.propTypes = {
  // eslint-disable-next-line max-len
  //to create list, need to pass an array of characters(objects) to the CharacterList
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;
