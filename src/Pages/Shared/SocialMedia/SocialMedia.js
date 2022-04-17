import React from "react";
import google from "../../../Images/gogle.png";
import github from "../../../Images/github.png";
import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading";

const SocialMedia = () => {
  const navigate= useNavigate()
  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
  let errorMessage
  if(googleError || githubError){
    errorMessage = <p className="text-danger text-center fs-4"> {googleError?.message} {githubError?.message}</p>
  }

 if(googleLoading || githubLoading){
   return <Loading></Loading>
 }
  
  if(googleUser || githubUser){
    navigate('/Home')
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{ height: "1px" }}
          className="bg-dark bg-gradient w-50"
        ></div>
        <p className="mt-2 mx-2">OR</p>
        <div
          style={{ height: "1px" }}
          className="bg-dark bg-gradient w-50"
        ></div>
      </div>
      {errorMessage}
      <button onClick={()=>{signInWithGoogle()}} className="btn btn-info d-block w-50 mx-auto mb-2">
        {" "}
        <img style={{ height: "30px" }} src={google} alt="" /> Google Sign-in
      </button>
      <button onClick={()=>{signInWithGithub()}} className="btn btn-info d-block w-50 mx-auto">
        {" "}
        <img style={{ height: "30px" }} src={github} alt="" /> Github Sign-in
      </button>
    </>
  );
};

export default SocialMedia;
