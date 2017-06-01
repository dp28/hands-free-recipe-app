import React from 'react';
import { shallow } from 'enzyme';
import { Ingredients } from './Ingredients';

it('renders without crashing', () => {
  shallow(<Ingredients ingredients={[]} />);
});
