import React, { useState, useMemo } from "react";
import styled from "styled-components";

const BeforeApplyingHook = () => {
	const [value, setValue] = useState("");

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const boxes = useMemo(() => {
		return (
			<BoxContainer>
				{new Array(10000).fill(null).map(() => {
					const x = Math.floor(Math.random() * 256);
					const y = Math.floor(Math.random() * 256);
					const z = Math.floor(Math.random() * 256);
					const backgroundColor = "rgb(" + x + "," + y + "," + z + ")";
					return <div style={{ width: 100, height: 100, backgroundColor }} />;
				})}
			</BoxContainer>
		);
	}, [value]);

	return (
		<PageContainer>
			<Description>
				{" "}
				<p>
					인풋을 입력할 때마다 박스의 배경색을 모두 계산 타이핑을 빠르게 친다면 렌더링 성능 저하를 유발하는 코드 (렌더링
					차단)
				</p>
				<p>
					이런 상황에서는 보통 디바운스/쓰로트링 기법을 사용 (하지만 debounce와 throttle이 완벽한 UX를 보장해주지는
					않음)
				</p>{" "}
				<p>
					이러한 상황을 해결하기 위해 나온 것이 React 18의 Concurrent Mode이며, useDeferredValue hook을 이용하여
					deferredValue의 값을 지연시킬 수 있다.
				</p>
				출처 : https://vroomfan.tistory.com/45
			</Description>
			<Input onChange={onChange} /> {boxes}{" "}
		</PageContainer>
	);
};

export default BeforeApplyingHook;

const PageContainer = styled.section``;

const BoxContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Input = styled.input`
	height: 100px;
`;

const Description = styled.section`
	display: flex;
	flex-direction: column;
	line-height: 120%;
`;
