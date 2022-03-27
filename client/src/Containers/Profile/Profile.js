import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Profile.css";

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
	const [worksData, setWorksData] = useState([]);
	const [worksFilteredData, setFilteredWorksData] = useState([]);

	useEffect(() => {
		if (userData.email === null) {
			navigate("/");
		}

		getUserData();
		getWorksData();
	}, []);

	const getUserData = async () => {
		const response = await axios.post("http://localhost:5000/auth/profile", { email: userData.email });

		setDetails(response.data.data);
	};

	const getWorksData = async () => {
		const response = await axios.post("http://localhost:5000/work/getWork", { type: userData.type, email: userData.email });

		if (response.data.status) {
			setWorksData(response.data.data);
			setFilteredWorksData(response.data.data);
		}
	};

	const handleFilterWork = (filter, completed) => () => {
		if (filter) {
			if (completed) {
				setFilteredWorksData(worksData.filter((value) => value.completed));
			} else {
				setFilteredWorksData(worksData.filter((value) => !value.completed));
			}
		} else {
			setFilteredWorksData(worksData);
		}
	};

	const handleWorkCompleted = (workId) => async () => {
		const complete = window.confirm("Are you sure?");

		if (complete) {
			const response = await axios.post("http://localhost:5000/work/completed", { id: workId });

			if (response.data.status) {
				setWorksData((prev) => {
					const index = prev.findIndex((value) => value._id === workId);
					prev[index].completed = true;

					return [...prev];
				});
				setFilteredWorksData((prev) => {
					const index = prev.findIndex((value) => value._id === workId);
					prev[index].completed = true;

					return [...prev];
				});
			}
		}
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
							<button className="profile-nav-btn" onClick={handleFilterWork(false, false)}>
								All
							</button>
							<button className="profile-nav-btn" onClick={handleFilterWork(true, false)}>
								{userData.type === "Provider" ? "Pending" : "Applied"}
							</button>
							<button className="profile-nav-btn" onClick={handleFilterWork(true, true)}>
								Completed
							</button>
						</ul>
						<div className="row gallery">
							{worksFilteredData.length === 0 ? (
								<div className="col-12 text-center">
									<p>No work available</p>
								</div>
							) : (
								worksFilteredData.map((value) => (
									<div key={value._id} className="col-md-6">
										<p>Posted By: {value.name}</p>
										<p>Pay Rate: {value.pay_rate}</p>
										<p>Work Type: {value.work_type}</p>
										<p>Work Duration: {value.work_duration}</p>
										<p>Work Description: {value.work_description}</p>
										{userData.type === "Provider" && !value.completed && (
											<button className="btn btn-primary" onClick={handleWorkCompleted(value._id)}>
												Mark as completed
											</button>
										)}
									</div>
								))
							)}
						</div>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Profile;
