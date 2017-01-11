import React from 'react';
import { Grid, Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap'
import data from './jobs.js'

class MyComponent extends React.Component {

   constructor(props) {
    super(props);

    this.state = {
      jobs: data
    };
    console.log(this.state)
  }




  render() {
    return (
      <div>
        <Navbar collapseOnSelect>

          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Dirty Spoon</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">Feed</NavItem>
              <NavItem eventKey={2} href="#">Analytics</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <Row>
            <Col sm={1} xsHidden={true} smHidden={true}></Col>
            <Col sm={10} xs={12}>
            
            {this.state.jobs.map(function(e){
              return (
                <div key={e.jobId}>
                <h3><a href={e.link}>  {e.jobTitle} </a></h3> 
                 <b>Frontend Frameworks:</b> {e.frontEndFrameworks.join(", ")}<br/>
                 <b>Backend Frameworks:</b> {e.backEndFrameworks.join(", ")}<br/>
                {e.jobDescription}
                </div>
                )
            })}
            
            </Col>
            <Col sm={1} xsHidden={true} smHidden={true}></Col>
          </Row>
        </Grid>
      </div>);
  }
}

export default MyComponent