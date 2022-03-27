import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import ApplyWork from "./ApplyWork";
import PostWork from "./PostWork";
import "./WorkPage.css";

function WorkPage() {
	const location = useLocation();

	const type = useSelector((state) => {
		return state.authReducer.type;
	});

	const [postWorkVisible, setPostWorkVisible] = useState(false);
	const [applyWorkVisible, setApplyWorkVisible] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<>
			<div className="modal-window">
				{location.state.map((item, index) => {
					return (
						<Fragment key={index}>
							<div className={`row d-flex align-items-center justify-content-center ${item.aClass} p-2`}>
								<div className="col-12 col-md-6 col-lg-6 modal-img">
									<img src={require(`../img/${item.image}`)} alt={item.name} className="img-fluid " />
								</div>
								<div className="col-12 col-md-6 col-lg-6">
									<h2>{item.name}</h2>
									<p className="text-dark">{item.desc}</p>
									<a
										onClick={() => {
											if (type === "Provider") {
												setPostWorkVisible(true);
											} else {
												setApplyWorkVisible(true);
											}
										}}
										className="btn btn-primary"
									>
										{type === "Provider" ? "Post Work" : "Find Work"}
									</a>
								</div>
							</div>
							<hr />
						</Fragment>
					);
				})}
			</div>

			{postWorkVisible && <PostWork setPostWorkVisible={setPostWorkVisible} />}
			{applyWorkVisible && <ApplyWork setApplyWorkVisible={setApplyWorkVisible} />}
		</>
	);
}

export default WorkPage;
