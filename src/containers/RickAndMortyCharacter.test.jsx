import React from 'react';
import { render, screen } from '@testing-library/react';
import RickAndMortyCharacters from './RickAndMortyCharacters';

describe('RickAndMorty container', () => {
  it('displays a list of characters', async () => {
    render(<RickAndMortyCharacters />);

    screen.getByText('Loading...');

    const ul = await screen.findByRole('list');
    expect(ul).not.toBeEmptyDOMElement();
  });
});
