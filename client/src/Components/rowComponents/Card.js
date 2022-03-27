import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ModalData from "../../Data/ModalData";
import Carddata from "../../Data/Servicedata";
import "./Card.css";

function Card() {
	const navigate = useNavigate();

	const type = useSelector((state) => {
		return state.authReducer.type;
	});

	const handleClick = (i) => {
		navigate("/work", { state: ModalData[i] });
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
										<img src={require(`../../img/photos/${item.image}`)} className="card-img" alt="Brohm Lake" />
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
								</div>

								<div className="card-back">
									<figure>
										<div className="img-bg"></div>
										<img src={require(`../../img/photos/${item.image}`)} className="card-img" alt="Brohm Lake" />
									</figure>

									<button onClick={() => handleClick(i)}>{type === "Provider" ? "Post Work" : "Find Work"}</button>

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
					</div>
				);
			})}
		</>
	);
}

export default Card;
