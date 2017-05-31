import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';

export const Ingredients = ({ ingredients }) => (
  <ListGroup>
    {ingredients.map(toListItem)}
  </ListGroup>
);

function toListItem(text) {
  return <ListGroupItem key={text}>{text}</ListGroupItem>;
}

export default Ingredients;
