import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Main from "./Containers/Main.js";
import Profile from "./Containers/Profile/Profile.js";
import LScontainer from "./Components/LScontainer.js";
import aos from "aos";
import "aos/dist/aos.css";

function App() {
	useEffect(() => {
		aos.init({ duration: 1000 });
	}, []);

	return (
		<>
			<LScontainer />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="profile" element={<Profile />} />
			</Routes>
		</>
	);
}

export default App;
