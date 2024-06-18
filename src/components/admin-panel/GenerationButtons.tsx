import { FC, useRef, useState } from "react";
import "./GenerationButtons.css";
import { useSelector } from "react-redux";
import { selectTicketPrice } from "../../features/pay-config/payConfigSlice";
import { useUpdateTicketPriceMutation } from "../../features/pay-config/payConfigApiSlice";
import Modal from "../model/Modal";

function GenerationButtons() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="generation">
        <button
          className="qrGen"
          style={{
            border: "1px double #4c73eb",
            borderRadius: "7px",
            backgroundColor: "#4c73eb",
            width: "67%",
            fontSize: "18px",
            padding: "0.8%",
            fontFamily: "Montserrat",
            fontWeight: "400",
            color: "#fff",
            height: "59%",
          }}
        >
          Сгенерировать QR
        </button>

        <button
          className="sumGen"
          style={{
            border: "1px double #4c73eb",
            borderRadius: "7px",
            backgroundColor: "#4c73eb",
            width: "67%",
            fontSize: "18px",
            padding: "0.8%",
            fontFamily: "Montserrat",
            fontWeight: "400",
            color: "#fff",
            height: "59%",
          }}
          onClick={() => setShowModal(true)}
        >
          Изменить сумму
        </button>
      </div>
      <Modal isShow={showModal} handleClose={() => setShowModal(false)}>
        <ChangeSumModal />
      </Modal>
    </>
  );
}

const ChangeSumModal: FC = () => {
  const [updateTicketPrice] = useUpdateTicketPriceMutation();

  const handleChangeSum = () => {
    const sum = Number(inputRef.current?.value);
    updateTicketPrice({ ticketPrice: sum });
  };

  const ticketPrice = useSelector(selectTicketPrice);

  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="modal-content">
      <h2>Изменить сумму</h2>
      <input
        type="number"
        placeholder="Введите сумму"
        defaultValue={ticketPrice}
        ref={inputRef}
      />
      <button onClick={handleChangeSum}>Изменить</button>
    </div>
  );
};

export default GenerationButtons;
