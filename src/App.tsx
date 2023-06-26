import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyle";
import Home from "./pages/home";
import UseDefferredValue from "./pages/useDefferredValue";
import ForwardRef from "./pages/forwardRef";
import Portal from "./pages/portal";
import ReactQuery from "./pages/reactQuery";

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/useDefferedValue" element={<UseDefferredValue />} />
					<Route path="/forwardRef" element={<ForwardRef />} />
					<Route path="/reactQuery" element={<ReactQuery />} />
					<Route path="/portal" element={<Portal />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
