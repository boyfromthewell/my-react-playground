import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyle";
import Home from "./pages/home";
import UseDefferredValue from "./pages/useDefferredValue";

function App() {
	return (
		<>
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/useDefferedValue" element={<UseDefferredValue />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
