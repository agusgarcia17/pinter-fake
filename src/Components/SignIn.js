import React, {Component} from 'react';
import auth from '../auth';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

class Login extends Component {
    state ={
        email: '',
        password: ''
    };
    authEmailPass =() => {
        const userData = {email:this.state.email, password: this.state.password}
        auth.login(userData, () => this.props.history.push('/profile'))
    }
    handleChange = name => event => this.setState({[name]: event.target.value})
    
    render(){
            return (
                <Form className="form-style" >
                 <Row form>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="exampleEmail" className="mr-sm-2">Email</Label>
                    <Input type="email" onChange={this.handleChange('email')} name="email" value={this.state.email} id="exampleEmail" placeholder="something@idk.cool" />
                  </FormGroup>
                  </Col>
                  <Col md={{ size: 6, offset: 3 }}>
                  <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                    <Label for="examplePassword" className="mr-sm-2">Password</Label>
                    <Input type="password"  onChange={this.handleChange('password')}value={this.state.password} name="password" id="examplePassword" placeholder="don't tell!" />
                  </FormGroup>
                  </Col>
                  </Row>
                  <Button color="danger" onClick={this.authEmailPass}>Login</Button>
                </Form>
              );
}
}

export default Login;
