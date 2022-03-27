import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import aos from "aos";
import "aos/dist/aos.css";
import Main from "./Containers/Main.js";
import Profile from "./Containers/Profile/Profile.js";
import LScontainer from "./Components/LScontainer.js";
import WorkPage from "./Components/WorkPage.js";

function App() {
	useEffect(() => {
		aos.init({ duration: 1000 });
	}, []);

	return (
		<>
			<LScontainer />
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/work" element={<WorkPage />} />
			</Routes>
		</>
	);
}

export default App;
