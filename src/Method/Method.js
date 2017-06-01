import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import './Method.css';

export const Method = ({ method, focus }) => (
  <ListGroup className="Method">
    {method.map((methodItem, index) => (
      <ListGroupItem key={methodItem} className="MethodItem" active={focus.isFocused(index)}>
        {methodItem}
      </ListGroupItem>
    ))}
  </ListGroup>
);

export default Method;
