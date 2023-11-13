import React from "react";

import Project from "./project";

import INFO from "../../data/user";

import "./styles/allProjects.css";

const TopProjects = () => {
	return (
    <div className="all-projects-container">
			{INFO.topProjects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						technologies={project.technologies}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default TopProjects;