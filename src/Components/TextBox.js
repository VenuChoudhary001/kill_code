import React from "react";

const TextBox = ({ icon, placeholder }) => {
  return (
    <div className="text-box">
      {icon && <div className="icon">{icon}</div>}
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default TextBox;
