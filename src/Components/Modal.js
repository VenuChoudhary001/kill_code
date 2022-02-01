import React from 'react';

const Modal = ({setShow,content}) => {

  return (
    <>
    <div className="modal-overlay" onClick={setShow}></div>
      <article className="modal-container">
        <div className="close">
          <svg
            onClick={setShow}
            viewBox="0 0 39 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 0.6875C9.11113 0.6875 0.6875 9.11113 0.6875 19.5C0.6875 29.8889 9.11113 38.3125 19.5 38.3125C29.8889 38.3125 38.3125 29.8889 38.3125 19.5C38.3125 9.11113 29.8889 0.6875 19.5 0.6875ZM26.4455 26.6471L23.674 26.6345L19.5 21.6584L15.3302 26.6303L12.5545 26.6429C12.3697 26.6429 12.2186 26.4959 12.2186 26.3069C12.2186 26.2271 12.2479 26.1516 12.2983 26.0886L17.7615 19.5798L12.2983 13.0752C12.2476 13.0137 12.2194 12.9366 12.2186 12.8568C12.2186 12.6721 12.3697 12.5209 12.5545 12.5209L15.3302 12.5335L19.5 17.5096L23.6698 12.5377L26.4413 12.5251C26.6261 12.5251 26.7772 12.6721 26.7772 12.861C26.7772 12.9408 26.7479 13.0164 26.6975 13.0794L21.2427 19.584L26.7017 26.0928C26.7521 26.1558 26.7814 26.2313 26.7814 26.3111C26.7814 26.4959 26.6303 26.6471 26.4455 26.6471Z"
              fill="#8B8A8A"
            />
          </svg>
        </div>
        <div className="modal-content">{content}</div>
      </article>
      <article className="modal-mob">
        <div className="back">
          <svg
            onClick={setShow}
            width="12"
            height="19"
            viewBox="0 0 12 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.92788 8.40395L0.832031 9.4998L9.60038 18.2681L11.7921 16.0764L5.21698 9.4998L11.7921 2.92315L9.60038 0.731445L1.92788 8.40395Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="modal-content">{content}</div>
      </article>
    </>
  );
};

export default Modal;
