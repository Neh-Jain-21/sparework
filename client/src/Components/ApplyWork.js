import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import "./ApplyWork.css";
import { toast } from "react-toastify";

export default function ApplyWork({ setApplyWorkVisible }) {
	const userData = useSelector((state) => {
		return state.authReducer;
	});

	const [workData, setWorkData] = useState([]);

	useEffect(() => {
		(async function () {
			const response = await axios.get("http://localhost:5000/work/getWork");

			if (response.data.status === 1) {
				toast.success(response.data.message, { position: "bottom-left" });
				setWorkData(response.data.data);
			} else if (response.status === 500) {
				toast.error(response.data.message, { position: "bottom-left" });
			}
		})();
	}, []);

	const handleApplyWork = (work) => async () => {
		const apply = window.confirm("Are you sure?");

		if (apply) {
			const response = await axios.post("http://localhost:5000/work/apply", {
				id: work._id,
				email: userData.email,
				posted_by: work.posted_by_email,
			});

			if (response.data.status) {
				toast.success(response.data.message, { position: "bottom-left" });
			} else if (!response.data.status) {
				toast.error(response.data.message, { position: "bottom-left" });
			} else if (response.status === 500) {
				toast.error(response.data.message, { position: "bottom-left" });
			}
		}
	};

	return (
		<>
			<div className="tabel-wrapper" onClick={() => setApplyWorkVisible(false)}>
				<div className="tabel-section" onClick={(e) => e.stopPropagation()}>
					<div className="table-header">
						<h1 className="table-header-title">Apply to work</h1>
						<button onClick={() => setApplyWorkVisible(false)}>
							<i className="bi bi-x-lg"></i>
						</button>
					</div>
					<div className="tbl-header">
						<table cellPadding={0} cellSpacing={0} border={0}>
							<thead>
								<tr>
									<th>Name</th>
									<th>Work Type</th>
									<th>Work Duration</th>
									<th>Work Description</th>
									<th>Pay Rate</th>
									<th></th>
								</tr>
							</thead>
						</table>
					</div>
					<div className="tbl-content">
						<table cellPadding={0} cellSpacing={0} border={0}>
							<tbody>
								{workData.map((value, index) => (
									<tr key={index}>
										<th>{value.name}</th>
										<th>{value.work_type}</th>
										<th>{value.work_duration}</th>
										<th>{value.work_description}</th>
										<th>{value.pay_rate}</th>
										<th style={{ cursor: "pointer" }} onClick={handleApplyWork(value)}>
											Apply
										</th>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}
