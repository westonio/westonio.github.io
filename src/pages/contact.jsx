import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							Get in Touch &#129309;
						</div>

						<div className="subtitle contact-subtitle">
							<p> &#128172; Let’s connect and discuss how we can create technical 
								solutions together that empower people and make the world a better 
								place!</p>

							<p>&#9749; If you have any questions or would like to schedule a coffee chat with me, please feel free to 
								message me on <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a> or 
								email me directly at <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>. 
								I make an effort to respond to all messages within
								24 hours, although it may take me longer during busy
								periods. </p>
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
							<Socials />
						</div>
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Contact;
