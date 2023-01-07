import { useState } from "react";
import { createContext } from "react";
import Modal from "../components/Modal/Modal";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [isModalVisible, setModalOpened] = useState(false);

  const toggleModal = () => {
    setModalOpened(!isModalVisible)
  };
  const showModal = () => {
    setModalOpened(true)
  };

  const value = { isModalVisible, showModal, toggleModal };
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalContextProvider;
