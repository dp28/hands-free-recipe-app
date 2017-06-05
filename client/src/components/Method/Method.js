import React from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { connect } from 'react-redux';

import { changeFocus } from '../Focus';
import './Method.css';

const Path = ['recipe', 'method'];

export const Method = ({ method, focus, focusOn }) => (
  <div className="Method">
    <h3>Method</h3>
    <ListGroup className="MethodList">
      {method.map((methodItem, index) => (
        <ListGroupItem
          key={methodItem}
          className="MethodItem"
          active={focus.isFocused(index)}
          onClick={focusOn(index)}
        >
          {methodItem}
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

export default connect(null, mapDispatchToProps)(Method);
