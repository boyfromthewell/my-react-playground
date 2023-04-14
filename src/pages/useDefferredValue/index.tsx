import React, { useState } from "react";
import AfterApplyingHook from "./afterApplyingHook";
import BeforeApplyingHook from "./beforeApplyingHook";

const UseDefferredValue = () => {
	const [btnToggle, setBtnToggle] = useState(false);

	const handleToggle = () => {
		setBtnToggle(!btnToggle);
	};

	return (
		<>
			<button onClick={handleToggle}>
				{!btnToggle ? "useDefferedValue hook 적용하기" : "useDefferedValue hook 적용전"}
			</button>
			{!btnToggle ? <BeforeApplyingHook /> : <AfterApplyingHook />}
		</>
	);
};

export default UseDefferredValue;
