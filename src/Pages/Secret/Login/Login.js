import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SocialMedia from "../../Shared/SocialMedia/SocialMedia";

const Login = () => {
    const navigate=useNavigate()

    const navigateToSignup=()=>{
        navigate('/Signup')
    }
  return (
    <div className="w-50 mt-3 mx-auto border p-2">
         <small className="text-center d-block text-info"> Get Into Shape!</small>
        <h4 className="text-center text-warning mb-2">Welcome To Fitness Heroes</h4>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Log-in
        </Button>
      </Form>
      <p>New to Fitness Heroes ? <Link className="text-decoration-none" to='/Signup' onClick={navigateToSignup}> Please Signup</Link></p>
    <SocialMedia></SocialMedia>
    </div>
  );
};

export default Login;
