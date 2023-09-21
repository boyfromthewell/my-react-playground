import ReactDOM from "react-dom/client";
import App from "./App";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { worker } from "./mocks/browser";

const queryClient = new QueryClient();

if (process.env.NODE_ENV === "development") {
	worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<QueryClientProvider client={queryClient}>
		<App />
	</QueryClientProvider>
);
