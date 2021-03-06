import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';

import { changeFocus } from '../Focus';

const Path = ['recipe', 'ingredients'];

export const Ingredients = ({ ingredients, focus, focusOn }) => (
  <div className="Ingredients">
    <h3>Ingredients</h3>
    <ListGroup>
      {ingredients.map((ingredient, index) => (
        <ListGroupItem key={ingredient} active={focus.isFocused(index)} onClick={focusOn(index)}>
          {ingredient}
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
);

export function mapDispatchToProps(dispatch) {
  return {
    focusOn: index => () => dispatch(changeFocus([ ...Path, index ])),
  }
}

export default connect(null, mapDispatchToProps)(Ingredients);
