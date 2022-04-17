import React from "react";
import google from "../../../Images/gogle.png";
import github from "../../../Images/github.png";

const SocialMedia = () => {
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
      <button className="btn btn-info d-block w-50 mx-auto mb-2">
        {" "}
        <img style={{ height: "30px" }} src={google} alt="" /> Google Sign-in
      </button>
      <button className="btn btn-info d-block w-50 mx-auto">
        {" "}
        <img style={{ height: "30px" }} src={github} alt="" /> Github Sign-in
      </button>
    </>
  );
};

export default SocialMedia;