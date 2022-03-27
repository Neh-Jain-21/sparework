import React, { useState } from "react";
import "./AboutUs.css";

const AboutUs = () => {
	const [zid, setZid] = useState(false);
	return (
		<section id="aboutUs" className="aboutUs">
			<div className="container-fluid" data-aos="fade-up">
				<div className="mt-5 title text-center">
					<h1>About Us</h1>
					<div className="underline">
						<div className="left-line"></div>
						<div className="mid-icon"></div>
						<div className="right-line"></div>
					</div>
					<p className="mt-4">Know us Well</p>
				</div>

				{/* <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <img
              src={require("../img/photos/grid-1.png")}
              className="img-fluid aboutUs-img"
              alt=""
            />
          </div>
          <div
            className="col-lg-6 pt-4 pt-lg-0 aboutUs-content"
            data-aos="fade-left"
          >
            <h3>
              Voluptatem dignissimos provident quasi corporis voluptates sit
              assumenda.
            </h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="aboutUs-ul">
              <div className="aboutUs-li">
                <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </div>
              <div className="aboutUs-li">
                <i className="bi bi-check-circle"></i> Duis aute irure dolor in
                reprehenderit in voluptate velit.
              </div>
              <div className="aboutUs-li">
                <i className="bi bi-check-circle"></i> Ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate trideta storacalaperda mastiro dolore
                eu fugiat nulla pariatur.
              </div>
            </div>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
              irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </p>
          </div>
        </div> */}

				<div className="neo p-5">
					<div className="neo1 ms-5" style={{ zIndex: `${zid ? "1" : "0"}` }} onMouseOver={() => setZid(true)}>
						<h1>Provider</h1>
						<div className="about-content">
							<img src={require("../img/about.jpg")} alt="" className="img-fluid about-img" />
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ullam quod, minima ab quibusdam id vero tenetur
								nisi? Quam labore deleniti, dolore veniam cumque eligendi est. Repudiandae dicta hic quos itaque quae. Animi
								praesentium voluptatum, sequi, explicabo magni minima autem sit dignissimos, eos distinctio amet eum molestias commodi
								ad quo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo hic aliquid dolore autem ratione reprehenderit
								laborum optio animi rem eveniet!
							</p>
						</div>
					</div>

					<div className="middle">
						<p className="text-white">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad doloremque nobis eligendi iusto assumenda sunt iste
							repellendus hic similique obcaecati.
						</p>
					</div>
					<div className="neo2" style={{ zIndex: `${zid ? "0" : "1"}` }} onMouseOver={() => setZid(false)}>
						<h1>Worker</h1>
						<div className="about-content">
							<p>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum ullam quod, minima ab quibusdam id vero tenetur
								nisi? Quam labore deleniti, dolore veniam cumque eligendi est. Repudiandae dicta hic quos itaque quae. Animi
								praesentium voluptatum, sequi, explicabo magni minima autem sit dignissimos, eos distinctio amet eum molestias commodi
								ad quo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo hic aliquid dolore autem ratione reprehenderit
								laborum optio animi rem eveniet!
							</p>
							<img src={require("../img/about.jpg")} alt="" className="img-fluid about-img" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
