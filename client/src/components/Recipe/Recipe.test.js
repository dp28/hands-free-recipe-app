import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';

import { Recipe } from './Recipe';

const recipe = {
  title: 'A',
  ingredients: ['milk'],
  method: ['drink'],
}

it('renders without crashing', () => {
  const focus = { nestedFocus: () => '' };
  shallow(<Recipe recipe={recipe} focus={focus} />);
});
