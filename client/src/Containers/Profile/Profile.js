import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./Profile.css";
import { useNavigate } from "react-router-dom";

const Profile = () => {
	const navigate = useNavigate();
	const userData = useSelector((state) => state.authReducer);

	const [details, setDetails] = useState({
		description: "",
		email: "",
		image: "",
		name: "",
		title: "",
		type: "",
	});

	useEffect(() => {
		if (userData.email === null) {
			navigate("/");
		}

		getUserData();
	}, []);

	const getUserData = async () => {
		const response = await axios.post("http://localhost:5000/auth/profile", { email: userData.email });

		setDetails(response.data.data);
	};

	return (
		<div className="profile-container">
			<header></header>
			<main>
				<div className="row">
					<div className="left col-lg-4">
						<div className="photo-left">
							<img className="photo" src={details.image} />
						</div>
						<h4 className="name">{details.name}</h4>
						<p className="info">{details.title}</p>
						<p className="info">{details.email}</p>
						<div className="stats row">
							<div className="stat col-xs-4">
								<p className="desc-stat">Type</p>
								<p className="number-stat">{details.type}</p>
							</div>
						</div>
						<p className="desc">{details.description}</p>
					</div>
					<div className="right col-lg-8">
						<ul className="profile-nav">
							<button className="profile-nav-btn">All</button>
							<button className="profile-nav-btn">Pending</button>
							<button className="profile-nav-btn">Completed</button>
						</ul>
						<div className="row gallery">
							<div className="col-md-4">
								<img src="https://images.pexels.com/photos/1036371/pexels-photo-1036371.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
							</div>
							<div className="col-md-4">
								<img src="https://images.pexels.com/photos/861034/pexels-photo-861034.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
							</div>
							<div className="col-md-4">
								<img src="https://images.pexels.com/photos/113338/pexels-photo-113338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
							</div>
							<div className="col-md-4">
								<img src="https://images.pexels.com/photos/5049/forest-trees-fog-foggy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
							</div>
							<div className="col-md-4">
								<img src="https://images.pexels.com/photos/428431/pexels-photo-428431.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
							</div>
							<div className="col-md-4">
								<img src="https://images.pexels.com/photos/50859/pexels-photo-50859.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Profile;
