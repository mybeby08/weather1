const Modal = ({ children, isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "modal-open modal" : ""}`}>
      <div className="modal-box relative">
        <button
          onClick={onClose}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          X
        </button>
        {children}
      </div>
    </div>
  );
};
export default Modal;
