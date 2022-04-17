import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialMedia from '../../Shared/SocialMedia/SocialMedia';

const Signup = () => {
    return (
        <div className="w-50 mt-3 mx-auto border p-2">
         <small className="text-center d-block text-info"> Get Into Shape!</small>
        <h4 className="text-center text-warning mb-2"> Please Register</h4>
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group> 

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder=" Re-type Password" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label=" Agree our Terms & Condition" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      <p> Already Have Account ? <Link className="text-decoration-none" to='/Login'> Go Login</Link></p>
      <SocialMedia></SocialMedia>
    </div>
   
    );
};

export default Signup;