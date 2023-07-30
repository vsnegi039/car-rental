import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import './FAQ.scss';

function FAQ() {
	const [show1, setShow1] = useState(true);
	const [show2, setShow2] = useState(false);
	const [show3, setShow3] = useState(false);
	const [animate1, setAnimate1] = useState(false);
	const [animate2, setAnimate2] = useState(false);

	const handleToggle1 = () => {
		setShow1(!show1);
		setShow2(false);
		setShow3(false);
		setAnimate1(true);
		setAnimate2(false);
	};

	const handleToggle2 = () => {
		setShow2(!show2);
		setShow1(false);
		setShow3(false);
		setAnimate1(false);
		setAnimate2(true);
	};

	const handleToggle3 = () => {
		setShow3(!show3);
		setShow1(false);
		setShow2(false);
		setAnimate1(true);
		setAnimate2(true);
	};

	return (
		<div className="FAQ">
			<div className="content">
				<b style={{ fontSize: "15pt", fontWeight: "800" }}>FAQ</b>
				<h1> Frequently Asked Questions</h1>
				<p className="QQQ">
					Frequently asked questions about the Car Rental Booking
					process on Our Website Answer to <br />
					Common concerns and inquiries.
				</p>
				<div
					className={`ques ${animate1 ? "animate1" : ""} ${
						animate2 ? "animate2" : ""
					}`}
					onClick={handleToggle1}
				>
					1. What is special about comparing rental car deals?
					<div className="icon">
						<BsChevronDown />
					</div>
				</div>
				{show1 && (
					<div className="ans">
						Comparing rental car deals is important as it helps find
						the best deals that fit your budget and requirements,
						ensuring you get the most value for your money. By
						comparing more options, you can find deals that offer
						low prices, additional services, or better car models.
						You can find car rental deals by researching online and
						comparing prices from different rental companies.
					</div>
				)}
				<div className="ques" onClick={handleToggle2}>
					2. How do I find the car rental deals?
					<div className="icon">
						<BsChevronDown />
					</div>
				</div>
				<div className={`ans ${show2 ? "" : "hide"}`}>
					You can find car rental deals by researching online and
					comparing prices from different rental companies. Websites
					such as Expedia, Kayak, and Travelocity allow you to compare
					prices and view available rental options. It is also
					recommended to sign up for email newsletters and follow
					rental car companies on social media to be informed of any
					special deals and promotions.
				</div>
				<div className="ques" onClick={handleToggle3}>
					3. How do I find such low rental car prices?
					<div className="icon">
						<BsChevronDown />
					</div>
				</div>
				<div className={`ans ${show3 ? "" : "hide"}`}>
					Book in advance: Booking your rental car ahead of time can
					often result in lower prices. Compare prices from multiple
					companies: Use websites like Kayak, Expedia, or Travelocity
					to compare prices from multiple rental car companies. Look
					for discount codes and coupons: Search for discount codes
					and coupons that you can use to lower the rental price.
					Renting from an off-airport location can sometimes result in
					lower prices.
				</div>
			</div>
		</div>
	);
}

export default FAQ;
