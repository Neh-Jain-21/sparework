import React from "react";

function TeamCard({ name, designation }) {
	return (
		<>
			<div className="cards">
				<div className="content">
					<h2 className="title text-white">{name}</h2>
					<p className="copy text-white">{designation}</p>
				</div>
			</div>
		</>
	);
}

export default TeamCard;
