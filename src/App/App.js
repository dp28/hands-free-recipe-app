import React from 'react';
import { Grid, Col, Row } from 'react-bootstrap';

import Recipe from '../Recipe';
import './App.css';

const App = () => (
  <Grid>
    <Row>
      <Col xs={12}>
        <Recipe />
      </Col>
    </Row>
  </Grid>
);

export default App;
