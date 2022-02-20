import { useEffect, useState } from "react";
import "./Navbar.css";
import data from "../Data/Navdata";

function Navbar() {
	const [item, setItem] = useState([]);
	const [activeId, setActiveId] = useState(0);

	return (
		<>
			<header id="header" className="d-flex flex-column justify-content-center">
				<nav className="nav_container">
					<ul className="nav_list">
						{data.map((item, index) => {
							return (
								<li
									onClick={() => setActiveId(index)}
									key={item.id}
									className={`${activeId === index ? "active__nav" : ""}`}
								>
									<a href={`#${item.id}`} className="nav_list-item">
										<i className={`${item.icon} icon`}></i> <span>{item.name}</span>
									</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Navbar;
