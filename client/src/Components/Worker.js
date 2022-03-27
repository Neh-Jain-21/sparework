import React, { useEffect, useState } from "react";
import "./Worker.css";
import WPright from "./rowComponents/WPright";
import axios from "axios";

export default function Worker() {
	const [allData, setAllData] = useState({ providers: [], workers: [] });
	const [currentData, setCurrentData] = useState([]);
	const [value, setValue] = useState(0);
	const [isProvider, setIsProvider] = useState(1);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const response = await axios.get("http://localhost:5000/users/recent-users");

		if (response.data.status) {
			setAllData(response.data.data);
			setCurrentData(response.data.data.providers);
		}
	};

	const setWorkers = async () => {
		setCurrentData(allData.workers);
		setIsProvider(0);
		setValue(0);
	};

	const setProviders = async () => {
		setCurrentData(allData.providers);
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
											<button onClick={() => setValue(i)} className={`nav-link ${i === value && "active"}`}>
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
