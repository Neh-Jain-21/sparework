import React from "react";
import "./FAQ.css";
import FaqComp from "./rowComponents/FaqComp";
import data from "../Data/Faqdata";

export default function FAQ() {
	return (
		<section className="faq">
			<div data-aos="fade-up" className="container mt-5 text-white">
				<div className="title text-center">
					<h1 className="display-4">FAQ</h1>
					<div className="underline">
						<div className="left-line"></div>
						<div className="mid-icon"></div>
						<div className="right-line"></div>
					</div>
					<p className="mt-4">Look at where most people also get Confused</p>
				</div>

				<div className="row">
					{data.map((item) => {
						return <FaqComp key={item.id} title={item.title} description={item.description} />;
					})}
				</div>
			</div>
		</section>
	);
}
