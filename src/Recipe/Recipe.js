import React from 'react';
import { connect } from 'react-redux';
import { PageHeader, Row, Col } from 'react-bootstrap';

import Ingredients from '../Ingredients';
import Method from '../Method';

export const Recipe = ({ recipe, focus }) => (
  <div>
    <Row>
      <Col xs={12}>
        <PageHeader>{recipe.title}</PageHeader>
      </Col>
      <Col xs={12} sm={4} md={3}>
        <Ingredients ingredients={recipe.ingredients} focus={focus.nestedFocus('ingredients')} />
      </Col>
      <Col xs={12} sm={8} md={9}>
        <Method method={recipe.method} focus={focus.nestedFocus('method')} />
      </Col>
    </Row>
  </div>
);

export function mapStateToProps({ recipe, ui }) {
  const focus = ui.focus.nestedFocus('recipe');
  return { recipe, focus };
};

export default connect(mapStateToProps)(Recipe);
