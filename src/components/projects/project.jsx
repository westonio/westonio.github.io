import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
	const { title, description, linkText, link, technologies } = props;

	return (
		<React.Fragment>
			<div className="project">
				<Link to={link} target="_blank" rel="noreferrer">
					<div className="project-container">
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="homepage-article-description">
							<p>___</p>
							<p> {technologies}</p>
						</div>
						<div className="project-link">
							<div className="project-link-icon">
								<FontAwesomeIcon icon={faLink} />
							</div>

							<div className="project-link-text">{linkText}</div>
						</div>
					</div>
				</Link>
			</div>
		</React.Fragment>
	);
};

export default Project;
