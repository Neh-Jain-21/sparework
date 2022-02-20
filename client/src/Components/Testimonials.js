import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import data from "../Data/Testimonialdata";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {
	// console.log(data);
	const [people, setPeople] = useState(data);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = people.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index, people]);

	useEffect(() => {
		const slider = setInterval(() => setIndex(index + 1), 5000);
		return () => clearInterval(slider);
	}, [index]);
	return (
		<>
			<section data-aos="zoom-out" className="container section mt-5 text-center mb-5" id="testimonial">
				<div className="text text-center">
					<h1 className="display-4">Testimonial</h1>
					<p className="text-light">Listen right from who used Sparework</p>
				</div>
				<div className="section-center">
					{people.map((person, i) => {
						let position = "nextSlide";
						if (index === i) {
							position = "activeSlide";
						}
						if (i === index - 1 || (index === 0 && i === people.length - 1)) {
							position = "lastSlide";
						}
						return (
							<article key={person.id} className={position}>
								<img src={person.image} alt={person.name} className="person-img" />
								<h4>{person.name}</h4>
								<p className="title">{person.title}</p>
								<p className="text text-white">{person.quote}</p>
								<FaQuoteRight className="icons" />
							</article>
						);
					})}
					<button className="prev" onClick={() => setIndex(index - 1)}>
						<FiChevronLeft />
					</button>
					<button className="next" onClick={() => setIndex(index + 1)}>
						<FiChevronRight />
					</button>
				</div>
				<hr className="text-white" />
			</section>
		</>
	);
}
