import React from "react";

function WPright({ data }) {
	// console.log(data);
	return (
		<>
			<div className="tab-pane" id="tab-1">
				<div className="row text-white">
					<div className="col-lg-8 details">
						<h3>{data.title}</h3>
						<p className="fst-italic">{data.description}</p>
						<p>{data.description}</p>
					</div>
					<div className="col-lg-4 ">
						<img src={data.image} alt={data.name} className="img_fluid" />
					</div>
				</div>
			</div>
		</>
	);
}

export default WPright;
