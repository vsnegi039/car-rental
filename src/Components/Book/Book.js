import React from "react";
import { AiFillCar } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { MdOutlineDateRange } from "react-icons/md";

import './Book.scss';


const book = () => {
    return (
		<div className="book">
			<h1>Book a car</h1>
			<div className="row ">
				<div>
					<h3>
						<div className="icon">
							<AiFillCar />
						</div>
						&nbsp;Select your car type&nbsp;
						<h3 style={{ color: "#FF3615" }}>*</h3>
					</h3>
					<select name="" id="">
						<option value="1">Select your car type</option>
						<option value="2"></option>
					</select>
				</div>
				<div>
					<h3>
						<div className="icon">
							<HiLocationMarker />
						</div>
						&nbsp;Pick-up location&nbsp;
						<h3 style={{ color: "#FF3615" }}>*</h3>
					</h3>
					<input type="text" placeholder="Pick-up location" />
				</div>
				<div>
					<h3>
						<div className="icon">
							<HiLocationMarker />
						</div>
						&nbsp;Drop-of location&nbsp;
						<h3 style={{ color: "#FF3615" }}>*</h3>
					</h3>
					<input type="text" placeholder="Drop-of location" />
				</div>
			</div>
			<div className="row ">
				<div>
					<h3>
						<div className="icon">
							<MdOutlineDateRange />
						</div>
						&nbsp;Pick-up&nbsp;
						<h3 style={{ color: "#FF3615" }}>*</h3>
					</h3>
					<input type="date" />
				</div>
				<div>
					<h3>
						<div className="icon">
							<MdOutlineDateRange />
						</div>
						&nbsp;Drop-of&nbsp;
						<h3 style={{ color: "#FF3615" }}>*</h3>
					</h3>
					<input type="date" />
				</div>
				<div>
					<button
						style={{
							backgroundColor: "#FF3615",
							color: "#fff",
							border: "hidden",
							cursor: "pointer",
						}}
					>
						Search
					</button>
				</div>
			</div>
		</div>
	);
}
export default book;