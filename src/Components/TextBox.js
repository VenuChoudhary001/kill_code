import React from "react";

const TextBox = ({ icon, placeholder,action }) => {
  return (
    <div className="text-box">
      {icon && <div className="icon">{icon}</div>}
      <input type="text" onChange={action} placeholder={placeholder} />
    </div>
  );
};

export default TextBox;
