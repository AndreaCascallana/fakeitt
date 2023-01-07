import React, { useContext } from "react";
import Button from "../Global/Button/Button";
import {
  modalContainer,
  modalText,
  modalCtas,
  close,
  divider,
} from "./Modal.module.sass";
import { ModalContext } from "../../contexts/ModalContext";
import usePostsData from "../../views/Post/useSinglePostData";

const Modal = () => {
  const { isModalVisible, showModal, toggleModal } = useContext(ModalContext);
  const { posts, deleteSinglePost } = usePostsData();

  return (
    <div className={modalContainer}>
      <div className={close}>
        <Button buttonType="raw" icon="XMarkIcon" clickHandler={() => toggleModal()} />
      </div>
      <div className={modalText}>
        ¿Estás segurx de que desear borrar este post?
      </div>
      <div className={divider}></div>
      <div className={modalCtas}>
        <Button buttonType="outlined" clickHandler={() => toggleModal()} >Cancelar</Button>
        <Button buttonType="filled">Aceptar</Button>
      </div>
    </div>
  );
};

export default Modal;
