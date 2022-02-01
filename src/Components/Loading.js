import React from "react";
import Lottie from "react-lottie";
import * as animationData from "../8707-loading.json";
const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
  return (
    <div className="loading">
      <div className="laoder-overlay"></div>
      <div className="loading">
        <Lottie
           options={defaultOptions}
       
           height={200}
           width={300}
        />
      </div>
      ;
    </div>
  );
};

export default Loading;
