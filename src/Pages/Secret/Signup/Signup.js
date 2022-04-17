import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialMedia from '../../Shared/SocialMedia/SocialMedia';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Signup = () => {
  const [error1,setError1]=useState('')
  const navigate = useNavigate()
  const nameRef=useRef('');
  const emailRef=useRef('');
  const passwordRef=useRef('');
  const repasswordRef=useRef('');

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const handleSubmit=(event)=>{
    event.preventDefault();
    const name= nameRef.current.value;
    const email = emailRef.current.value;
    const password= passwordRef.current.value;
    const repassword= repasswordRef.current.value;
    if(password !== repassword){
      setError1(' Password & confirm password  not Match')
      return
    }
    
      createUserWithEmailAndPassword(name,email,password)
    // console.log(name, email,password,repassword)
  }

  let errorMessage
  if(error){
    errorMessage=<p className='text-danger'>Error: {error?.message}</p>
  }
  if(user){
    navigate('/Home')
  }
    return (
        <div className="w-50 mt-3 mx-auto border p-2">
         <small className="text-center d-block text-info"> Get Into Shape!</small>
        <h4 className="text-center text-warning mb-2"> Please Register</h4>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={nameRef} type="text"  name="name"  placeholder="Enter Name" required />
        </Form.Group> 

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" name="email"  placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" name="password" placeholder="Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={repasswordRef} type="password" name="repassword" placeholder=" Re-type Password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label=" Agree our Terms & Condition" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
      {errorMessage}
      <p className='text-danger fs-3'>  {error1}</p>
      <p> Already Have Account ? <Link className="text-decoration-none" to='/Login'> Go Login</Link></p>
      <SocialMedia></SocialMedia>
    </div>
   
    );
};

export default Signup;