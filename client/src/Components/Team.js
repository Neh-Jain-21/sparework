import React from "react";
import TeamCard from "./rowComponents/TeamCard";
import "./Team.css";
import data from "../Data/Teamdata";

export default function Team() {
	return (
		<>
			<section data-aos="zoom-in" id="Team" className="mt-5 pt-5">
				<div className="text-center title mt-5">
					<h1 className="display-4">Our Team</h1>
					<div className="underline">
						<div className="left-line"></div>
						<div className="mid-icon"></div>
						<div className="right-line"></div>
					</div>
					<p className="mt-4">Let's be familiar</p>
				</div>
				<main className="page-content">
					{data.map((item) => {
						return <TeamCard key={item.id} name={item.name} designation={item.designation} />;
					})}
				</main>
			</section>
		</>
	);
}
