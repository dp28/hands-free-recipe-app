import React from 'react';
import { connect } from 'react-redux';

export const Recipe = ({ recipe }) => (
  <div>
    <h1>{recipe.title}</h1>
    <ul>
      {recipe.ingredients.map(toListItem)}
    </ul>
    <ol>
      {recipe.method.map(toListItem)}
    </ol>
  </div>
);

function toListItem(text) {
  return <li key={text}>{text}</li>;
}

export function mapStateToProps({ recipe }) {
  return { recipe };
};

export default connect(mapStateToProps)(Recipe);
