import React, { useEffect, useRef } from "react";
import "./admin-modal.css";

const AdminModal = (props) => {
  const modalRef = useRef();

  useEffect(() => {
    const clickOutsideContent = (e) => {
      if (e.target === modalRef.current) {
        props.setShow(false);
      }
    };
    window.addEventListener("click", clickOutsideContent);
    return () => {
      window.removeEventListener("click", clickOutsideContent);
    };
  }, [props]);
  return (
    <div ref={modalRef} className={`modal-auth ${props.show ? "active" : ""}`}>
      <div className="modal-auth__content" style={props.style}>
        {!props.hideCloseButton && (
          <span
            onClick={() => props.setShow(false)}
            className="modal-auth__close"
          >
            &times;
          </span>
        )}
        {props.children}
      </div>
    </div>
  );
};

export default AdminModal;

export const ModalHeader = (props) => {
  return <div className="modal-auth__header">{props.children}</div>;
};

export const ModalBody = (props) => {
  return <div className="modal-auth__body">{props.children}</div>;
};

export const ModalFooter = (props) => {
  return <div className="modal-auth__footer">{props.children}</div>;
};
