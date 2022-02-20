import React from "react";
import "./Hero.css";

function Hero() {
	return (
		<>
			<div data-aos="zoom-in" className="container_image mb-5" id="Hero">
				<div className="hero-layer"></div>
				<div data-aos="fade-left" className="container_text">
					<h1 className="display-4">
						<strong>Welcome to SpareWork</strong>
						<p className="h1 lead text-white">
							<strong>Use Your sparetime to earn something</strong>
						</p>
						<button className="btn btn-primary p-2">GET STARTED</button>
					</h1>
				</div>
			</div>
			<hr />
		</>
	);
}

export default Hero;
