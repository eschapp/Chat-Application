import React, { Component } from 'react';

import elementalStyles from '../node_modules/elemental/less/elemental.less';
import { Button, Alert, Spinner, Row, Col, Form, FormField, FormInput, FormSelect } from 'elemental';

export default class CommentForm extends Component {
  render() {
    return (
      <div>
      <div style={{borderBottom: '2px solid #dedede', marginBottom: '50px'}}>
          <Col style={{margin:'0 auto'}} sm="1/3">
            <Row>
              <Col>
                <h1>Username | Favorite Team</h1>
              </Col>
            </Row>
          </Col> 
        <Form style={{width:'33%', margin:'0 auto', backgroundColor:'#dedede', padding:'25px',marginBottom:'80px',}}>
          <FormInput style={{marginBottom:'20px',}} placeholder="Subject" />
          <FormInput placeholder="Talk Some Smack..." multiline />
        </Form>
      </div>
    </div>
    );
  }
}
