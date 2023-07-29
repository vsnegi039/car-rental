import React from "react";
import c1 from '../Assets/c1.jpg';
import c2 from '../Assets/c2.jpg';
import { AiOutlineDoubleRight } from "react-icons/ai";
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
				<p className="hm">
					Discover the positive impact we have made on the our clients
					by reading through their <br /> testimonials. Our client
					have experienced our service and results, and they are eager
					to share <br /> their positive experience with you.
				</p>
			</div>
			<div className="flex">
				<div>
					<p>
						<b className="comment">
							We rented a car from this website and <br /> had an
							amazing experience! The <br /> booking was easy and
							the rental rates <br /> were very affordable. "
						</b>
					</p>
					<div style={{ display: "flex", marginTop: "25px" }}>
						<img src={c1} alt="" />
						<p className="vm">
							<h4>Parry Hotter</h4>
							<p>Belgrade</p>
						</p>
						<div className="icon">
							<FaQuoteRight />
						</div>
					</div>
				</div>
				<div>
					<p>
						<b className="comment">
							The car was in great condition and <br /> made our
							trip even better. Highly <br /> recommended for this
							car rental <br /> website!"
						</b>
					</p>
					<div style={{ display: "flex", marginTop: "25px" }}>
						<img src={c2} alt="" />
						<p className="vm">
							<h4>Ron Rizzly</h4>
							<p>Novi Sad</p>
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