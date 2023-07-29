import React from 'react'
import banner from '../Assets/banner.jpg'
import { AiFillCheckCircle } from "react-icons/ai"; 
import { BsChevronRight } from "react-icons/bs";

import './Headers.scss';

export default function header() {
  return (
		<div className="header">
			<div className="left">
				<p style={{ fontWeight: 600 }}>Plan your trip now</p>
				<h1 style={{ display: "flex" }}>
					Save&nbsp;<h4 style={{ color: "#FF3615" }}>big</h4>{" "}
					&nbsp;with our{" "}
				</h1>
				<h1>car rental</h1>
				<p className="hm" style={{ fontSize: "10pt" }}>
					Rent the car of your dreams, unbeatable prices, unlimited
					miles, flexble pick-up option and much more
				</p>
				<div className="buttons hm">
					<button
						style={{ backgroundColor: "#FF3615", border: "none" }}
					>
						Book Ride
						<AiFillCheckCircle
							style={{
								marginLeft: "5px",
								position: "absolute",
								marginTop: "1px",
							}}
						/>
					</button>
					<button className="vm" style={{ backgroundColor: "black" }}>
						Learn More
						<BsChevronRight
							style={{
								marginLeft: "5px",
								position: "absolute",
								marginTop: "1px",
							}}
						/>
					</button>
				</div>
			</div>
			<img src={banner} alt="" />
		</div>
  );
}
