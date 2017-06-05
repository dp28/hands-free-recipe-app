import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import Recipe from '../Recipe';
import Speech from '../Speech';
import './App.css';

const App = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <Speech />
        <Recipe />
      </Col>
    </Row>
  </Grid>
);

export default App;
