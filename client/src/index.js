import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<App />
			<ToastContainer pauseOnHover={true} />
		</Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
