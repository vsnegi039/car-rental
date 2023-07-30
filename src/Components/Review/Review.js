import React from "react";
import c1 from '../Assets/c1.jpg';
import c2 from '../Assets/c2.jpg';
import { FaQuoteRight } from "react-icons/fa6";

import './Review.scss';

const Review = () => {
    return (
		<div className="Review">
			<div style={{ textAlign: "center" }}>
				<p>
					<b>Reviewed by People</b>
				</p>
				<h2 className="hm">Client's Testimonials</h2>
				<div className="sp">
					<p className="hm ssp">
						Discover the positive impact we have made on the our
						clients by reading through their testimonials. Our
						client have experienced our service and results, and
						they are eager to share their positive experience with
						you.
					</p>
				</div>
			</div>
			<div className="flex">
				<div className="mrl">
					<p>
						<b className="comment">
							We rented a car from this website and had an amazing
							experience! The booking was easy and the rental
							rates were very affordable. "
						</b>
					</p>
					<div className="user">
						<img src={c1} alt="" />
						<p className="vm">
							<span style={{ fontWeight: "bold" }}>
								Parry Hotter
							</span>
							<br />
							<span>Belgrade</span>
						</p>
						<div className="icon">
							<FaQuoteRight />
						</div>
					</div>
				</div>
				<div className="mrl">
					<p>
						<b className="comment">
							The car was in great condition and made our trip
							even better. Highly recommended for this car rental
							website!"
						</b>
					</p>
					<div className="user">
						<img src={c2} alt="" />
						<p className="vm">
							<span style={{ fontWeight: "bold" }}>
								Ron Rizzly
							</span>
							<br />
							<span>Novi Sad</span>
						</p>
						<div className="icon">
							<FaQuoteRight />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Review;