import React from "react";
import avatar from "../../assets/avatar.png";

const Avatar = () => {
  return (
    <div className="box-content p-1 w-8 h-8">
      <img src={avatar} alt="avatar" />
    </div>
  );
};

export default Avatar;
