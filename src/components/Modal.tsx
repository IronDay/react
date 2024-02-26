import { IoIosCloseCircleOutline } from "react-icons/io";

const Modal = () => {
  return (
    <dialog open={true}>
      <div>
        <h2>Modal Title</h2>
        <IoIosCloseCircleOutline />
      </div>
      <p>Your Modal Window</p>
    </dialog>
  );
};
export default Modal;
