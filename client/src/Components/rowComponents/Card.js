import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalData from "../../Data/ModalData";
import Carddata from "../../Data/Servicedata";
import ModalWindow from "../ModalWindow";
import "./Card.css";

function Card({ setPostWorkVisible, setApplyWorkVisible }) {
	const [index, setIndex] = useState(0);
	const [isActive, setIsActive] = useState(false);

	const type = useSelector((state) => {
		return state.authReducer.type;
	});

	const handleClick = (id) => {
		setIsActive(true);
		setIndex(id);
	};

	return (
		<>
			{Carddata.map((item, i) => {
				return (
					<div
						data-aos="flip-left"
						data-aos-easing="ease-out-cubic"
						data-aos-duration="2000"
						className="col col-sm-6 col-md-4 col-lg-3 mb-2"
						key={item.id}
					>
						<div className="flip-card-container">
							<div className="flip-card">
								<div className="card-front">
									<figure>
										<div className="img-bg"></div>
										{/* <img
											src="https://images.unsplash.com/photo-1486162928267-e6274cb3106f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
											alt="Brohm Lake"
										/> */}
										<img
											src={require(`../../img/photos/${item.image}`)}
											className="card-img"
											alt="Brohm Lake"
										/>
										<figcaption>{item.name}</figcaption>
									</figure>

									<div className="list">
										{item.category.map((data, i) => {
											return (
												<p key={i} className="list-group text-white">
													{data}
												</p>
											);
										})}
									</div>
									{/* <div className="list">
                <p className="list-group">{props.details[0]}</p>
                <p className="list-group">{props.details[1]}</p>
                <p className="list-group">{props.details[2]}</p>
              </div>*/}
								</div>

								<div className="card-back">
									<figure>
										<div className="img-bg"></div>
										<img
											src={require(`../../img/photos/${item.image}`)}
											className="card-img"
											alt="Brohm Lake"
										/>
									</figure>

									<button onClick={() => handleClick(i)}>
										{type === "Provider" ? "Post Work" : "Find Work"}
									</button>

									<div className="design-container">
										<span className="design design--1"></span>
										<span className="design design--2"></span>
										<span className="design design--3"></span>
										<span className="design design--4"></span>
										<span className="design design--5"></span>
										<span className="design design--6"></span>
										<span className="design design--7"></span>
										<span className="design design--8"></span>
									</div>
								</div>
							</div>
						</div>
						{/* <!-- /flip-card-container --> */}
					</div>
				);
			})}

			<ModalWindow
				isActive={isActive}
				setIsActive={setIsActive}
				details={ModalData[index]}
				type={type}
				setPostWorkVisible={setPostWorkVisible}
				setApplyWorkVisible={setApplyWorkVisible}
			/>
		</>
	);
}

export default Card;
