import { useState } from "react";
import Modal from "./modal";
import ModalPortal from "./modalPortal";

const Portal = () => {
	const [modalOn, setModalOn] = useState(false);

	const handleModal = () => {
		setModalOn(!modalOn);
	};

	return (
		<div>
			<button onClick={handleModal}>OPEN</button>
			<ModalPortal>{modalOn && <Modal />}</ModalPortal>
		</div>
	);
};

export default Portal;
