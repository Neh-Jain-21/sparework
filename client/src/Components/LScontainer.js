import React, { useState } from "react";
import "./LScontainer.css";
import axios from "axios";
import authActions from "../redux/actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const LScontainer = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [tick, setTick] = useState(0);
	const [panel, setPanel] = useState(0);

	const userData = useSelector((state) => {
		return state.authReducer;
	});

	const handleLogin = async (event) => {
		try {
			event.preventDefault();

			const response = await axios.post("http://localhost:5000/auth/login", {
				email: event.target[0].value,
				password: event.target[1].value,
			});

			if (response.data.status === 1) {
				toast.success(response.data.message, { position: "bottom-left" });
				dispatch(authActions.LOGIN(response.data.data));
				setTick(0);
			} else {
				toast.error(response.data.message, { position: "bottom-left" });
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleSignUp = async (event) => {
		try {
			event.preventDefault();

			const response = await axios.post("http://localhost:5000/auth/sign-up", {
				name: event.target[0].value,
				email: event.target[1].value,
				password: event.target[2].value,
			});

			if (response.data.status === 1) {
				toast.success(response.data.message, { position: "bottom-left" });
				setTick(0);
			} else {
				toast.error(response.data.message, { position: "bottom-left" });
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="containers">
				<div
					className={`button right__btn ${!tick && "show"} d-flex justify-content-between align-items-center`}
				>
					<div className="d-flex flex-column">
						<h5 className="text-white mb-0">Welcome!</h5>
						{userData.name && <p className="text-white mb-0">{userData.name}</p>}
					</div>
					{userData.email === null ? (
						<div className="d-flex">
							<button onClick={() => setTick(1)} className="btn btn-outline-primary">
								Sign Up
							</button>
							<button onClick={() => setTick(1)} className="btn btn-primary ms-2">
								Log In
							</button>
						</div>
					) : (
						<div className="d-flex">
							{location.pathname === "/profile" ? (
								<button className="btn btn-primary" onClick={() => navigate("/")}>
									Home
								</button>
							) : (
								<button className="btn btn-primary" onClick={() => navigate("/profile")}>
									Profile
								</button>
							)}
							<button
								onClick={() => {
									dispatch(authActions.LOGOUT());
									navigate("/");
								}}
								className="btn btn-outline-primary ms-4"
							>
								Log Out
							</button>
						</div>
					)}
				</div>
				<div className={`contain ${tick && "anime"}`}>
					<i className="bi bi-chevron-double-left ani__icon" onClick={() => setTick(0)}></i>
					<div className={`contains show ${panel && "right-panel-active"}`} id="contains">
						<div className="form-container sign-up-container">
							<form onSubmit={handleSignUp} className="login__form">
								<h1>Create Account</h1>
								<div className="social-container">
									<a href="/" className="social">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a href="/" className="social">
										<i className="fab fa-google-plus-g"></i>
									</a>
									<a href="/" className="social">
										<i className="fab fa-linkedin-in"></i>
									</a>
								</div>
								<span>or use your email for registration</span>
								<input className="login__input" type="text" placeholder="Name" />
								<input className="login__input" type="email" placeholder="Email" />
								<input className="login__input" type="password" placeholder="Password" />
								<button type="submit" className="login__btn">
									Sign Up
								</button>
							</form>
						</div>
						<div className="form-container sign-in-container">
							<form onSubmit={handleLogin} className="login__form">
								<h1>Sign in</h1>
								<div className="social-container">
									<a href="/" className="social">
										<i className="fab fa-facebook-f"></i>
									</a>
									<a href="/" className="social">
										<i className="fab fa-google-plus-g"></i>
									</a>
									<a href="/" className="social">
										<i className="fab fa-linkedin-in"></i>
									</a>
								</div>
								<span>or use your account</span>
								<input className="login__input" type="email" placeholder="Email" />
								<input className="login__input" type="password" placeholder="Password" />
								<a href="/" className="social">
									Forgot your password?
								</a>
								<button className="login__btn">Sign In</button>
							</form>
						</div>
						<div className="overlay-container">
							<div className="overlay">
								<div className="overlay-panel overlay-left">
									<h1>Welcome Back!</h1>
									<p className="text-white login__para">
										To keep connected with us please login with your personal info
									</p>
									<button className="ghost login__btn" id="signIn" onClick={() => setPanel(0)}>
										Sign In
									</button>
								</div>
								<div className="overlay-panel overlay-right">
									<h1>Hello, Friend!</h1>
									<p className="text-white login__para">
										Enter your personal details and start journey with us
									</p>
									<button className="ghost login__btn" id="signUp" onClick={() => setPanel(1)}>
										Sign Up
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LScontainer;
