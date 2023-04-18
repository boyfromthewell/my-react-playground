import React, { forwardRef } from "react";
import styled from "styled-components";

interface InputProps {
	value: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	ref: React.RefObject<HTMLInputElement>;
}

const CustomInput = forwardRef<HTMLInputElement, InputProps>(({ value, onChange }, ref) => {
	return (
		<>
			<Input placeholder="I'm a child component" value={value} onChange={onChange} ref={ref} />
		</>
	);
});

export default CustomInput;

const Input = styled.input`
	width: 300px;
	height: 40px;
`;
