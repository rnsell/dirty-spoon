import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap'

class MyComponent extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col md={3}> Hello</Col>
          <Col md={9}> World </Col>
        </Row>
      </Grid>);
  }
}

export default MyComponent