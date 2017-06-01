import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export const Ingredients = ({ ingredients, focus }) => (
  <ListGroup>
    {ingredients.map((ingredient, index) => (
      <ListGroupItem key={ingredient} active={focus.isFocused(index)}>
        {ingredient}
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default Ingredients;
