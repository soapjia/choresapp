import React from "react";
import "./homepage.css";

export const homepage = () => {
  return (
    <div className="join-a-house-group">
      <div className="div">
        <div className="text-wrapper">Join a housing group:</div>
        <div className="overlap">
          <div className="text-wrapper-2">Enter Code</div>
        </div>
        <p className="p">Enter your 8 digit housemate code</p>
        <p className="don-t-have-a-code">
          <span className="span">Don&#39;t have a code? Create one </span>
          <span className="text-wrapper-3">here</span>
        </p>
        <div className="overlap-group">
          <div className="text-wrapper-4">Join Group</div>
        </div>
      </div>
    </div>
  );
};

export default homepage;