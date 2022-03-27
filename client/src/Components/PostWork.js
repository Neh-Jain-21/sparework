import { useSelector } from "react-redux";
import axios from "axios";
import "./PostWork.css";
import { toast } from "react-toastify";

export default function PostWork({ setPostWorkVisible }) {
	const userData = useSelector((state) => {
		return state.authReducer;
	});

	const handleSubmit = async (event) => {
		try {
			event.preventDefault();

			const response = await axios.post("http://localhost:5000/work/addWork", {
				name: event.target[1].value,
				posted_by_email: userData.email,
				work_type: event.target[2].value,
				work_duration: event.target[3].value,
				work_description: event.target[4].value,
				pay_rate: event.target[5].value,
			});

			if (response.data.status === 1) {
				toast.success(response.data.message, { position: "bottom-left" });
			} else if (response.status === 500) {
				toast.error(response.data.message, { position: "bottom-left" });
			}
		} catch (error) {
			toast.error(error, { position: "bottom-left" });
		}
	};

	return (
		<>
			<div className="frame" onClick={() => setPostWorkVisible(false)}>
				<form className="form-signin" onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
					<button className="close-btn" onClick={() => setPostWorkVisible(false)}>
						<i className="bi bi-x-lg text-light"></i>
					</button>
					<label for="ProviderName">Provider Name</label>
					<input className="form-styling" type="text" name="ProviderName" placeholder="" />
					<label for="workType">Work Type</label>
					<input className="form-styling" type="text" name="workType" placeholder="" />
					<label for="workDuration">Work Duration</label>
					<input className="form-styling" type="text" name="workDuration" placeholder="" />
					<label for="workDescription">Work Description</label>
					<input className="form-styling" type="text" name="workDescription" placeholder="" />
					<label for="payRate">Pay Rate</label>
					<input className="form-styling" type="text" name="payRate" placeholder="" />
					<button type="submit" className="btn-animate btn-signin">
						Post Work
					</button>
				</form>
			</div>
		</>
	);
}
