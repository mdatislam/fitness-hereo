import React, { useState } from "react";
import { Button, Form, ToastContainer } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialMedia from "../../Shared/SocialMedia/SocialMedia";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";


const Login = () => {
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')
  const navigate=useNavigate()
  const location = useLocation()
  let from = location.state?.from?.pathname ||'/Home'

  const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);
  const handleToEmail=(e)=>{
    setEmail(e.target.value)
  
  }
 const handleToPassword=(e)=>{
   setPassword(e.target.value)
 }

 const handleToLogin=(event)=>{
  event.preventDefault();
  // console.log(email,password)
  signInWithEmailAndPassword(email,password)
 }
 let errorMessage
 if(error || passwordResetError){
   errorMessage= <p className="text-danger fs-4"> Error: {error?.message} {passwordResetError?.message}</p>
 }
 if(loading || sending){
   return <Loading></Loading>
 }
 if(user){
   navigate(from,{replace:true})
 }
const handlePasswordReset=async()=>{
  // console.log(email)
  if(email){ 
    await sendPasswordResetEmail(email);
    alert('mail sent')
  }
  else{
    alert('please enter your email address');
}

}
   
  return (
    <div className="w-50 mt-3 mx-auto border p-2">
         <small className="text-center d-block text-info"> Get Into Shape!</small>
        <h4 className="text-center text-warning mb-2">Welcome To Fitness Heroes</h4>
      <Form onSubmit={handleToLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control onBlur={handleToEmail} type="email" placeholder="Enter email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control onBlur={handleToPassword}  type="password" placeholder="Password" required />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Log-in
        </Button>
      </Form>
      <p>New to Fitness Heroes ? <Link className="text-decoration-none" to='/Signup'> Please Signup</Link></p>
      <p>Forgot Password?<button onClick={handlePasswordReset} className="btn btn-link text-decoration-none ">Reset Password</button></p>
      {errorMessage}
    <SocialMedia></SocialMedia>
    <ToastContainer/>
    </div>
  );
};

export default Login;
