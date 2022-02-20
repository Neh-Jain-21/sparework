import React, { useState } from "react";
import "./ModalWindow.css";

const ModalWindow = ({ isActive, setIsActive, details, type, setPostWorkVisible, setApplyWorkVisible }) => {
	return (
		<div className={`modal-window ${isActive ? "show" : ""}`}>
			{details.map((item, index) => {
				return (
					<React.Fragment key={index}>
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
											setIsActive(false);
										} else {
											setApplyWorkVisible(true);
											setIsActive(false);
										}
									}}
									className="btn btn-primary"
								>
									{type === "Provider" ? "Post Work" : "Find Work"}
								</a>
							</div>
						</div>
						<hr />
						<button className="btn-modal" onClick={() => setIsActive(false)}>
							<i className="bi bi-x-lg"></i>
						</button>
					</React.Fragment>
				);
			})}
		</div>
	);
};

export default ModalWindow;
{
	/* <div
            key={item.id}
            className={`row d-flex  modal-window ${isActive ? "show" : ""}`}
          >
            <div className="col-12 col-md-6 mb-3 mb-md-0">
               <img
                src={require(`${item.image}`)}
                className="img-fluid modal-img"
              /> 
              <p>{item.desc}</p>
            </div>
            <div className="col-12 col-md-6">
              <h2>{item.name}</h2>
              <p>{item.desc}</p>
              <a href="#0" className="btn btn-primary">
                Read more
              </a>
            </div>
            <button className="btn-modal" onClick={() => setIsActive(false)}>
              <i className="bi bi-x-lg"></i>
            </button>
          </div> */
}
