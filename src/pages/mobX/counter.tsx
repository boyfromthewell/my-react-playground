import React from "react";
import { observer } from "mobx-react";
import styled from "styled-components";
import useStore from "../../hooks/useStore";

const Counter = observer(() => {
	const { CounterState } = useStore();

	const onClickPlus = () => {
		CounterState.plusNum();
	};

	const onClickMinus = () => {
		CounterState.minusNum();
	};

	return (
		<CounterContainer>
			<p>I'm counter~!</p>
			{CounterState.num}
			<button onClick={onClickMinus}>-</button> <button onClick={onClickPlus}>+</button>
		</CounterContainer>
	);
});

export default Counter;

const CounterContainer = styled.div`
	display: flex;
	margin-top: 50px;
	p {
		margin-right: 20px;
	}
	button {
		margin-left: 20px;
	}
`;
