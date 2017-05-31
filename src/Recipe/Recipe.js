import React from 'react';
import { connect } from 'react-redux';
import { PageHeader, ListGroup, ListGroupItem } from 'react-bootstrap';

export const Recipe = ({ recipe }) => (
  <div>
    <PageHeader>{recipe.title}</PageHeader>
    <ListGroup>
      {recipe.ingredients.map(toListItem)}
    </ListGroup>
    <ListGroup>
      {recipe.method.map(toListItem)}
    </ListGroup>
  </div>
);

function toListItem(text) {
  return <ListGroupItem>{text}</ListGroupItem>;
}

export function mapStateToProps({ recipe }) {
  return { recipe };
};

export default connect(mapStateToProps)(Recipe);
