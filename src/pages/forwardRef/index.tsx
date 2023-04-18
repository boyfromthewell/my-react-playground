import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import CustomInput from "./CustomInput";

const ForwardRef = () => {
	const [value, setValue] = useState("");
	const inputRef = useRef<HTMLInputElement>(null);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	useEffect(() => {
		if (inputRef.current !== null && value.length >= 5) {
			inputRef.current.style.color = "red";
		}
	}, [inputRef, value]);

	return (
		<PageContainer>
			<ParentComponent>
				<h1>I'm a parent component!</h1>
				<CustomInput value={value} onChange={onChange} ref={inputRef} />
				<span>(input value 길이가 5 이상이면 자식 컴포넌트 (input)의 color 변경)</span>
			</ParentComponent>
			<Description>
				<p>함수 컴포넌트의 ref는 애초에 존재하지 않음</p>
				<p>forwardRef를 사용하면 부모 컴포넌트로부터 자식 컴포넌트로 ref를 전달할 수 있음</p>
				<p>이렇게 전달받은 ref를 HTML 요소의 속성으로 넘겨줌으로써 함수 컴포넌트 역시 ref를 통한 제어 가능</p>
			</Description>
		</PageContainer>
	);
};

export default ForwardRef;

const PageContainer = styled.section`
	width: 100vw;
	height: 100vh;
`;

const ParentComponent = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	height: 200px;
	border: 1px solid black;
	border-radius: 12px;
	padding-left: 10px;
	h1 {
		font-size: 20px;
		margin-bottom: 20px;
	}
	span {
		margin-top: 5px;
		font-size: 12px;
	}
`;

const Description = styled.div`
	margin-top: 20px;
	line-height: 120%;
`;
