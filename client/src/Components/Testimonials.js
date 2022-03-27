import React, { useState, useEffect } from "react";
import "./Testimonials.css";
import data from "../Data/Testimonialdata";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";

export default function Testimonials() {
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
		<section id="review">
			<div className="text-center title">
				<h1 className="display-4">Testimonial</h1>
				<div className="underline">
					<div className="left-line"></div>
					<div className="mid-icon"></div>
					<div className="right-line"></div>
				</div>
				<p className="text-light mt-4">Listen right from who used Sparework</p>
			</div>
			<section data-aos="zoom-out" className="container-fluid section text-center mb-5" id="testimonial">
				<div className="blob">
					<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-25 -25 250 250" className="float1">
						<defs>
							<linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%">
								<stop offset="0%" style={{ stopColor: "#3b0986", stopOpacity: "1.00" }} />
								<stop offset="100%" style={{ stopColor: "#9c87cf", stopOpacity: "1.00" }} />
							</linearGradient>
						</defs>
						<path
							d="M199.99989216679626 99.85314418936215 C184.75789604322904 52.431032078061314 26.138341711925033 39.57488484761631 1.4807024298262519 82.85508803523459 C-16.149907185370658 113.80113107436975 48.96116997321843 194.44693460632897 84.3147334181678 198.76220133359146 C122.08540632170903 203.3725011779273 211.64327583231233 136.07896665150344 199.99989216679626 99.85314418936215Z"
							stroke="none"
							fill="url(#lgrad)"
						/>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-25 -25 250 250" className="float2">
						<defs>
							<linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%">
								<stop offset="0%" style={{ stopColor: "#3b0986", stopOpacity: "1.00" }} />
								<stop offset="100%" style={{ stopColor: "#9c87cf", stopOpacity: "1.00" }} />
							</linearGradient>
						</defs>
						<path
							d="M199.99989216679626 99.85314418936215 C184.75789604322904 52.431032078061314 26.138341711925033 39.57488484761631 1.4807024298262519 82.85508803523459 C-16.149907185370658 113.80113107436975 48.96116997321843 194.44693460632897 84.3147334181678 198.76220133359146 C122.08540632170903 203.3725011779273 211.64327583231233 136.07896665150344 199.99989216679626 99.85314418936215Z"
							stroke="none"
							fill="url(#lgrad)"
						/>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-25 -25 250 250" className="float3">
						<defs>
							<linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%">
								<stop offset="0%" style={{ stopColor: "#3b0986", stopOpacity: "1.00" }} />
								<stop offset="100%" style={{ stopColor: "#9c87cf", stopOpacity: "1.00" }} />
							</linearGradient>
						</defs>
						<path
							d="M199.99989216679626 99.85314418936215 C184.75789604322904 52.431032078061314 26.138341711925033 39.57488484761631 1.4807024298262519 82.85508803523459 C-16.149907185370658 113.80113107436975 48.96116997321843 194.44693460632897 84.3147334181678 198.76220133359146 C122.08540632170903 203.3725011779273 211.64327583231233 136.07896665150344 199.99989216679626 99.85314418936215Z"
							stroke="none"
							fill="url(#lgrad)"
						/>
					</svg>
					<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-25 -25 250 250" className="float4">
						<defs>
							<linearGradient id="lgrad" x1="0%" y1="50%" x2="100%" y2="50%">
								<stop offset="0%" style={{ stopColor: "#3b0986", stopOpacity: "1.00" }} />
								<stop offset="100%" style={{ stopColor: "#9c87cf", stopOpacity: "1.00" }} />
							</linearGradient>
						</defs>
						<path
							d="M199.99989216679626 99.85314418936215 C184.75789604322904 52.431032078061314 26.138341711925033 39.57488484761631 1.4807024298262519 82.85508803523459 C-16.149907185370658 113.80113107436975 48.96116997321843 194.44693460632897 84.3147334181678 198.76220133359146 C122.08540632170903 203.3725011779273 211.64327583231233 136.07896665150344 199.99989216679626 99.85314418936215Z"
							stroke="none"
							fill="url(#lgrad)"
						/>
					</svg>
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
								<p className="titles">{person.title}</p>
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
			</section>
		</section>
	);
}
