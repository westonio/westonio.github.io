import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faTwitter,
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import INFO from "../../data/user";

import "./styles/socials.css";

const Socials = () => {
	return (
		<div className="socials">
			<div className="social">
				<a
					href={INFO.socials.github}
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon
						icon={faGithub}
						className="social-icon"
					/>
				</a>
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon
						icon={faLinkedin}
						className="social-icon"
					/>
				</a>
				<a
					href={INFO.socials.twitter}
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon
						icon={faTwitter}
						className="social-icon"
					/>
				</a>
			</div>

			<div className="email">
				<div className="email-wrapper">
				<a
					href={`mailto:${INFO.main.email}`}
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon
						icon={faEnvelope}
						className="social-icon"
					/>

						<div className="social-text"> {INFO.main.email} </div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
