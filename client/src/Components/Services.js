import React, { useState } from "react";
import Card from "./rowComponents/Card";
import PostWork from "./PostWork";
import ApplyWork from "./ApplyWork";
import "./Services.css";

function Services() {
	const [postWorkVisible, setPostWorkVisible] = useState(false);
	const [applyWorkVisible, setApplyWorkVisible] = useState(false);

	return (
		<>
			<div className="container service mb-4 mt-5" id="Services">
				<div data-aos="zoom-out" className="container mt-5 text-center title">
					<h1 className="display-4">Services</h1>
					<div className="underline">
						<div className="left-line"></div>
						<div className="mid-icon"></div>
						<div className="right-line"></div>
					</div>
					<p className="mt-4">Check out the Services</p>
				</div>
				<div className="row">
					<Card setPostWorkVisible={setPostWorkVisible} setApplyWorkVisible={setApplyWorkVisible} />
				</div>

				{postWorkVisible && <PostWork setPostWorkVisible={setPostWorkVisible} />}
				{applyWorkVisible && <ApplyWork setApplyWorkVisible={setApplyWorkVisible} />}
			</div>
		</>
	);
}

export default Services;
