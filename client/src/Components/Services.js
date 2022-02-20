import React, { useState } from "react";
import Card from "./rowComponents/Card";
import PostWork from "./PostWork";
import ApplyWork from "./ApplyWork";
import "./Services.css";

function Services() {
	const [id, setId] = useState(0);
	const [postWorkVisible, setPostWorkVisible] = useState(false);
	const [applyWorkVisible, setApplyWorkVisible] = useState(false);

	const newId = () => {
		setId((prevId) => prevId + 1);
		return id;
	};
	return (
		<>
			<div className="container service mb-4 mt-5" id="Services">
				<div data-aos="zoom-out" className="container mt-5 text-center">
					<div className="text">
						<h1 className="display-4">Services</h1>
						<p>Check out the Services</p>
					</div>
				</div>
				{/* <div className="container-sm"> */}
				{/* <div className="row">
          {data.map((item) => {
            return (
              <Card key={item.id} title={item.name} details={item.category} />
            );
          })}
        </div> */}
				<div className="row">
					<Card setPostWorkVisible={setPostWorkVisible} setApplyWorkVisible={setApplyWorkVisible} />
				</div>

				{postWorkVisible && <PostWork setPostWorkVisible={setPostWorkVisible} />}
				{applyWorkVisible && <ApplyWork setApplyWorkVisible={setApplyWorkVisible} />}
			</div>
			<hr className="text-white" />
		</>
	);
}

export default Services;
