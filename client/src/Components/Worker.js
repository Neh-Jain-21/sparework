import React, { useEffect, useState } from "react";
import "./Worker.css";
import WPright from "./rowComponents/WPright";
import axios from "axios";

export default function Worker() {
	const [currentData, setCurrentData] = useState([]);
	const [value, setValue] = useState(0);
	const [isProvider, setIsProvider] = useState(1);

	useEffect(() => {
		getData();
	}, [isProvider]);

	const getData = async () => {
		let response;

		if (isProvider) {
			response = await axios.get("http://localhost:5000/users/providers");
		} else {
			response = await axios.get("http://localhost:5000/users/workers");
		}

		setCurrentData(response.data.data);
	};

	const setWorkers = async () => {
		setIsProvider(0);
		setValue(0);
	};

	const setProviders = async () => {
		setIsProvider(1);
		setValue(0);
	};

	return (
		<>
			<section data-aos="fade-up" id="recent" className="specials ms-5">
				<div className="btn-container text-center">
					<button onClick={setProviders} className="worker">
						Providers
					</button>
					<button onClick={setWorkers} className="worker">
						Workers
					</button>
				</div>
				<div className="text text-center">
					<h1 className="display-4">{isProvider ? "Recent Providers" : "Recent Workers"}</h1>
					<p>{isProvider ? "Some of our recent Providers" : "Some of our recent Workers"}</p>
				</div>
				<div className="container" data-bs-aos="fade-up">
					<div className="row ms-5">
						<div className="col-sm-12 col-lg-3">
							<div className="nav nav-tabs flex-column flex-wrap">
								{currentData.map((item, i) => {
									return (
										<div key={i} className="nav-item">
											<button
												onClick={() => setValue(i)}
												className={`nav-link ${i === value && "active"}`}
											>
												{item.name}
											</button>
										</div>
									);
								})}
							</div>
						</div>
						<div className="col-lg-9 mt-4 mwt-lg-0">
							{currentData[value] && <WPright data={currentData[value]} />}
							<div className="tab-content"></div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
