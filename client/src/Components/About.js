import React from "react";
import "./About.css";

export default function About() {
	// return (
	// 	<>
	// 		<div data-aos="zoom-out" className="container mt-5 mb-5" id="About">
	// 			<div className="container mt-5 text-center">
	// 				<div className="text">
	// 					<h1 className="display-4">About Us</h1>
	// 					<p>Know us Well</p>
	// 				</div>
	// 			</div>
	// 			<div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
	// 				<div className="carousel-indicators">
	// 					<button
	// 						type="button"
	// 						data-bs-target="#carouselExampleCaptions"
	// 						data-bs-slide-to="0"
	// 						className="active"
	// 						aria-current="true"
	// 						aria-label="Slide 1"
	// 					></button>
	// 					<button
	// 						type="button"
	// 						data-bs-target="#carouselExampleCaptions"
	// 						data-bs-slide-to="1"
	// 						aria-label="Slide 2"
	// 					></button>
	// 					<button
	// 						type="button"
	// 						data-bs-target="#carouselExampleCaptions"
	// 						data-bs-slide-to="2"
	// 						aria-label="Slide 3"
	// 					></button>
	// 				</div>
	// 				<div className="carousel-inner">
	// 					<div className="carousel-item active">
	// 						<div className="about-layer"></div>
	// 						<img
	// 							src={require("../img/photos/grid-1.png")}
	// 							className="d-block w-100 set-image"
	// 							alt="..."
	// 						/>
	// 						<div className="carousel-caption d-none d-md-block">
	// 							<h5>Want to work in your Spare time?</h5>
	// 							<p>
	// 								We Provide you with the jobs which may in your local and best part is it is not 9 to
	// 								5.
	// 								<br />
	// 								just some hours lasting job.
	// 							</p>
	// 						</div>
	// 					</div>
	// 					<div className="carousel-item">
	// 						<div className="about-layer"></div>
	// 						<img
	// 							src={require("../img/photos/grid-2.png")}
	// 							className="d-block w-100 set-image"
	// 							alt="..."
	// 						/>
	// 						<div className="carousel-caption d-none d-md-block">
	// 							<h5>Want to Hire People For Your Work?</h5>
	// 							<p>
	// 								As we providing the people work in their local area.It's for you.
	// 								<br />
	// 								We will find people that can nearby you
	// 							</p>
	// 						</div>
	// 					</div>
	// 					<div className="carousel-item">
	// 						<div className="about-layer"></div>
	// 						<img
	// 							src={require("../img/photos/noclue.jpg")}
	// 							className="d-block w-100 set-image"
	// 							alt="..."
	// 						/>
	// 						<div className="carousel-caption d-none d-md-block">
	// 							<h5>Still Got a Question?</h5>
	// 							<p>
	// 								Reach out to us by filling details in Contact Us section and our team will reach out
	// 								you.
	// 							</p>
	// 						</div>
	// 					</div>
	// 				</div>
	// 				<button
	// 					className="carousel-control-prev"
	// 					type="button"
	// 					data-bs-target="#carouselExampleCaptions"
	// 					data-bs-slide="prev"
	// 				>
	// 					<span className="carousel-control-prev-icon" aria-hidden="true"></span>
	// 					<span className="visually-hidden">Previous</span>
	// 				</button>
	// 				<button
	// 					className="carousel-control-next"
	// 					type="button"
	// 					data-bs-target="#carouselExampleCaptions"
	// 					data-bs-slide="next"
	// 				>
	// 					<span className="carousel-control-next-icon" aria-hidden="true"></span>
	// 					<span className="visually-hidden">Next</span>
	// 				</button>
	// 			</div>
	// 		</div>
	// 		<hr className="text-white" />
	// 	</>
	// );
	return (
		<>
			<div className="mt-5 title text-center">
				<h1>What's in it for you?</h1>
				<div className="underline">
					<div className="left-line"></div>
					<div className="mid-icon"></div>
					<div className="right-line"></div>
				</div>
				<p className="mt-4">find your reason</p>
			</div>
			<div className="holder">
				<div className="about__container">
					<div className="box">
						<span></span>
						<div className="about__content">
							<h2>Card one</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua.
							</p>
							<a href="#">Read More</a>
						</div>
					</div>
					<div className="box">
						<span></span>
						<div className="about__content">
							<h2>Card two</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua.
							</p>
							<a href="#">Read More</a>
						</div>
					</div>
					<div className="box">
						<span></span>
						<div className="about__content">
							<h2>Card Three</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua.
							</p>
							<a href="#">Read More</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
