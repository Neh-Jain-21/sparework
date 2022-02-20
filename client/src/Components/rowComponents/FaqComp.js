import React from "react";

function FaqComp(props) {
	return (
		<>
			<div className="col-md-6 col-lg-4 mb-4 text-white">
				<h6 className="mb-3 text-primary">{props.title}</h6>
				<p className="text-white">{props.description}</p>
			</div>
		</>
	);
}

export default FaqComp;
