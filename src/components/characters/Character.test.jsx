import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const { asFragment } = render(
      <Character
        name="Text Character"
        species="Human"
        status="Alive"
        image="https://image.com/image.png"
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
