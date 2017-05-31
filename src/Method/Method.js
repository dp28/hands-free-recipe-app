import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './Method.css';

export const Method = ({ method }) => (
  <ListGroup className="Method">
    {method.map(toListItem)}
  </ListGroup>
);

function toListItem(text) {
  return <ListGroupItem className="MethodItem" key={text}>{text}</ListGroupItem>;
}

export default Method;
