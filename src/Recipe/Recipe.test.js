import React from 'react';
import ReactDOM from 'react-dom';
import { Recipe } from './Recipe';

const recipe = {
  title: 'A',
  ingredients: ['milk'],
  method: ['drink'],
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Recipe recipe={recipe} />, div);
});
