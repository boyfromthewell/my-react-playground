import React, { useState, useMemo, useDeferredValue } from "react";
import styled from "styled-components";

const AfterApplyingHook = () => {
	const [value, setValue] = useState("");

	const deferredValue = useDeferredValue(value);

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	console.log("value", value);
	console.log("deferredValue", deferredValue);

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
	}, [deferredValue]);

	return (
		<PageContainer>
			<Description>
				<p>input에 있는 값은 빠르게 변하지만 deferredValue의 값은 바로 변경되지 않음</p>
				<p>
					deferredValue에 의존하는 boxes 연산은 value보다 긴급하지 않기 때문에 value 값만 먼저 업데이트 하고
					deferredValue 값은 지연
				</p>
				<p>
					즉, deferredValue에 의해 boxes 연산이 진행되는 와중에 value가 업데이트 되면 boxes 렌더링을 interrupt하고
					value만 먼저 렌더링
				</p>
				<p>
					이제 input의 value는 즉각적으로 변하지만, deferredValue와 boxes는 그보다 낮은 빈도수로 업데이트 되고 렌더링
					차단은 일어나지 않게 됨
				</p>
			</Description>
			<Input onChange={onChange} /> {boxes}
		</PageContainer>
	);
};

export default AfterApplyingHook;

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
