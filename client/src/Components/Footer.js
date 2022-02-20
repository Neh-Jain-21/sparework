import React from "react";

function Footer() {
	return (
		<>
			{/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
			<div data-aos="zoom-out" className="container my-5">
				{/* <!-- Footer --> */}
				<footer
					className="text-center text-lg-start text-white"
					// style={{ backgroundColor: "rgb(54, 51, 51)" }}
				>
					{/* <!-- Grid container --> */}
					<div className="container p-4 pb-0">
						{/* <!-- Section: Links --> */}
						<section className="">
							{/* <!--Grid row--> */}
							<div className="row">
								{/* <!-- Grid column --> */}
								<div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
									<h6 className="text-uppercase mb-4 font-weight-bold">Sparework</h6>
									<p className="text-white">
										We hope untill here you have a good idea about sparework,but still if you don't
										feel free to reach us.
									</p>
								</div>
								{/* <!-- Grid column --> */}

								<hr className="w-100 clearfix d-md-none" />

								{/* <!-- Grid column --> */}
								<div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
									<h6 className="text-uppercase mb-4 font-weight-bold">Services</h6>
									<p className="text-white">
										<a className="text-white">Cleaning</a>
									</p>
									<p className="text-white">
										<a className="text-white">Delivery</a>
									</p>
									<p className="text-white">
										<a className="text-white">Driver</a>
									</p>
									<p className="text-white">
										<a className="text-white">Any type of Service</a>
									</p>
								</div>
								{/* <!-- Grid column --> */}

								<hr className="w-100 clearfix d-md-none" />

								{/* <!-- Grid column --> */}
								<hr className="w-100 clearfix d-md-none" />

								{/* <!-- Grid column --> */}
								<div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
									<h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
									<p className="text-white">
										<i className="fas fa-home mr-3"></i> California, US
									</p>
									<p className="text-white">
										<i className="fas fa-envelope mr-3"></i> info.about@sparework.com
									</p>
									<p className="text-white">
										<i className="fas fa-phone mr-3"></i> + 01 234 567 88
									</p>
									<p className="text-white">
										<i className="fas fa-print mr-3"></i> + 01 234 567 89
									</p>
								</div>
								{/* <!-- Grid column --> */}

								{/* <!-- Grid column --> */}
								<div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
									<h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>

									{/* <!-- Facebook --> */}
									<a
										className="btn btn-primary btn-floating m-1"
										style={{ backgroundColor: "#3b5998" }}
										href="#!"
										role="button"
									>
										<i className="fab fa-facebook-f"></i>
									</a>

									{/* <!-- Twitter --> */}
									<a
										className="btn btn-primary btn-floating m-1"
										style={{ backgroundColor: "#55acee" }}
										href="#!"
										role="button"
									>
										<i className="fab fa-twitter"></i>
									</a>

									{/* <!-- Google --> */}
									<a
										className="btn btn-primary btn-floating m-1"
										style={{ backgroundColor: "#dd4b39" }}
										href="#!"
										role="button"
									>
										<i className="fab fa-google"></i>
									</a>

									{/* <!-- Instagram --> */}
									<a
										className="btn btn-primary btn-floating m-1"
										style={{ backgroundColor: "#ac2bac" }}
										href="#!"
										role="button"
									>
										<i className="fab fa-instagram"></i>
									</a>

									{/* <!-- Linkedin --> */}
									<a
										className="btn btn-primary btn-floating m-1"
										style={{ backgroundColor: "#0082ca" }}
										href="#!"
										role="button"
									>
										<i className="fab fa-linkedin-in"></i>
									</a>
									{/* <!-- Github --> */}
									<a
										className="btn btn-primary btn-floating m-1"
										style={{ backgroundColor: "#333333" }}
										href="#!"
										role="button"
									>
										<i className="fab fa-github"></i>
									</a>
								</div>
							</div>
							{/* <!--Grid row--> */}
						</section>
						{/* <!-- Section: Links --> */}
					</div>
					{/* <!-- Grid container --> */}

					{/* <!-- Copyright --> */}
					<div className="text-center p-3">
						© 2022 Copyright:&nbsp;
						<a className="text-white" href="/">
							Sparework
						</a>
					</div>
					{/* <!-- Copyright --> */}
				</footer>
				{/* <!-- Footer --> */}
			</div>
			{/* <!-- End of .container --> */}
		</>
	);
}

export default Footer;
