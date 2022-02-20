import React from "react";
// import "./FAQ.css";
import FaqComp from "./rowComponents/FaqComp";
import data from "../Data/Faqdata";

export default function FAQ() {
	return (
		<>
			<hr className="text-white" />
			<section data-aos="fade-up" className="container mt-5 text-white">
				<div className="text text-center">
					<h1 className="display-4">FAQ</h1>
					<p>Look at where most people also get Confused</p>
				</div>

				<div className="row">
					{data.map((item) => {
						return <FaqComp key={item.id} title={item.title} description={item.description} />;
					})}
				</div>
			</section>
			<hr className="text-white" />
		</>
	);
}
