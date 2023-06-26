import React from "react";
import styled from "styled-components";

const Modal = () => {
	return (
		<Background>
			<ModalContainer>
				<div>fdfdfdfdfdfdfdfdf</div>
			</ModalContainer>
		</Background>
	);
};

export default Modal;

const Background = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	left: 0;
	top: 0;
	text-align: center;
	background-color: black;
	opacity: 0.5;
`;

const ModalContainer = styled.div`
	height: 500px;
	width: 500px;
	padding: 24px;
	position: relative;
	margin: 0 auto;
	background: gray;
	z-index: 9999;
`;
