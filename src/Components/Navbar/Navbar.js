import { useState, useEffect } from "react";
import logo from "../Assets/logo.jpg";
import "./Navbar.scss";
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () => {
	const [showMenu, setShowMenu] = useState(true);
	const [showClose, setShowClose] = useState(false);
	const toHome = () => {
		if (window.innerWidth <= 1024) {
			showNavbar();
		}
		window.scrollTo({
			top: 0 - window.pageYOffset,
			behavior: "smooth",
		});
	};

	const toContact = () => {
		if (window.innerWidth <= 1024) {
			showNavbar();
		}
		window.scrollTo(0, 0);
		window.scrollTo({
			top: 4500 - window.pageYOffset,
			behavior: "smooth",
		});
	};

	const toclient = () => {
		if (window.innerWidth <= 1024) {
			showNavbar();
			window.scrollTo(0, 0);
			window.scrollTo({
				top: 3140 - window.pageYOffset,
				behavior: "smooth",
			});
		} else {
			window.scrollTo(0, 0);
			window.scrollTo({
				top: 3600 - window.pageYOffset,
				behavior: "smooth",
			});
		}
	};

	const toModels = () => {
		if (window.innerWidth <= 1024) {
			showNavbar();
			window.scrollTo(0, 0);
			window.scrollTo({
				top: 1350 - window.pageYOffset,
				behavior: "smooth",
			});
		} else {
			window.scrollTo(0, 0);
			window.scrollTo({
				top: 1650 - window.pageYOffset,
				behavior: "smooth",
			});
		}
	};

	const toabout = () => {
		if (window.innerWidth <= 1024) {
			showNavbar();
			window.scrollTo(0, 0);
			window.scrollTo({
				top: 750 - window.pageYOffset,
				behavior: "smooth",
			});
		} else {
			window.scrollTo(0, 0);
			window.scrollTo({
				top: 1050 - window.pageYOffset,
				behavior: "smooth",
			});
		}
	};

	const showNavbar = () => {
		setShowMenu(prevShowMenu => !prevShowMenu);
		setShowClose(prevshowClose => !prevshowClose);
	};

	useEffect(() => {
		const updateShowMenu = () => {
			setShowMenu(window.innerWidth >= 1024);
		};

		updateShowMenu();
		window.addEventListener("resize", updateShowMenu);
		return () => {
			window.removeEventListener("resize", updateShowMenu);
		};
	}, []);

	return (
		<>
			<div className="nav">
				<div className="left">
					<ul>
						<li id="logo">
							<img src={logo} alt="Error: Image not found" />
						</li>
						<li style={{ marginLeft: "-20px" }}>
							{" "}
							<b style={{ fontSize: "15pt" }}>CAR</b>
							<br /> <p style={{ marginTop: "-5px" }}>Rental</p>
						</li>
					</ul>
				</div>

				{/* Conditionally render the menu items based on the state */}
				{showMenu && (
					<div className="mid">
						<ul>
							<li className="menu-item" onClick={toHome}>
								Home
							</li>
							<li className="menu-item" onClick={toabout}>
								About
							</li>
							<li className="menu-item" onClick={toModels}>
								Vehicle Models
							</li>
							<li className="menu-item" onClick={toclient}>
								Testimonials
							</li>
							<li className="menu-item" onClick={toContact}>
								Contact
							</li>
							{showClose && (
								<li className="menu-item" onClick={showNavbar}>
									Close
								</li>
							)}
						</ul>
					</div>
				)}

				<div className="right">
					<ul>
						<li className="menu-item">Sign In</li>
						<li className="menu-item">
							<button>Register</button>
						</li>
						<GiHamburgerMenu
							className="burger"
							onClick={showNavbar}
						/>
					</ul>
				</div>
			</div>
		</>
	);
};

export default Nav;
