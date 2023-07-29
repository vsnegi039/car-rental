import React from "react"; 
import { AiOutlineTeam } from "react-icons/ai";
import { AiFillCar } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";
import './Features.scss';

const feature = () => {
    return (
		<div className="feature">
			<p>
				<b>Plan your trip now</b>
			</p>
			<h1>Quick & easy car rental</h1>
			<div className="row">
				<div>
					<div className="icon">
						<AiFillCar />
					</div>
					<h3>Select car</h3>
					<p>We offer a big range of vehicle for all<br />your driving needs. We have the<br />perfect car to meet your needs</p>
				</div>

				<div>
					<div className="icon">
						<AiOutlineTeam />
					</div>
					<h3>Contact operator</h3>
					<p>Our knowladgeable and friendly<br /> operators are always ready to help<br />with any question and concerns</p>
				</div>
				
				<div>
					<div className="icon">
						<AiOutlineEnvironment />
					</div>
					<h3>Let's Drive</h3>
					<p>Whether you're hitting the open road. <br />We've got you covered with our wide <br />range of cars</p>
				</div>
			</div>
		</div>
	);
}

export default feature;