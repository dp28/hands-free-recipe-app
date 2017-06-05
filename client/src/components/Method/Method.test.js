import React from 'react';
import { shallow } from 'enzyme';
import { Method } from './Method';

it('renders without crashing', () => {
  shallow(<Method method={[]}/>);
});
