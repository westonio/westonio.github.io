import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				body={
					<div className="works-body">
						<div class="work">
							<h3> I'm Experienced With: </h3>
							<div>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg"
									alt="ruby"
									className="work-image"
								/>

								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-original-wordmark.svg"
									alt="rails"
									className="work-image"
								/>

								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg"
									alt="postgresql"
									className="work-image"
								/>

								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rspec/rspec-original-wordmark.svg"
									alt="ruby specification (RSpec)"
									className="work-image"
								/>

								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
									alt="html5"
									className="work-image"
								/>
								
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
									alt="CSS3"
									className="work-image"
								/>
							</div>

							<div>
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
									alt="git"
									className="work-image"
								/>

								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
									alt="github"
									className="work-image"
								/>
								
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original-wordmark.svg"
									alt="visual studio code (VSCode)"
									className="work-image"
								/>
				
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg"
									alt="slack"
									className="work-image"
								/>
								
								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original-wordmark.svg"
									alt="jira"
									className="work-image"
								/>

								<img
									src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg"
									alt="salesforce"
									className="work-image"
								/>
							</div>	
						</div>

						<h3>I'm Learning:</h3>
						<div class="work">
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
								alt="javascript"
								className="work-image"
							/>

							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
								alt="bootstrap"
								className="work-image"
							/>
							
						</div>

						<h3>I Want to Learn:</h3>
						<div>
							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg"
								alt="docker"
								className="work-image"
							/>

							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
								alt="amazon web services (AWS)"
								className="work-image"
							/>

							<img
								src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
								alt="react"
								className="work-image"
							/>
						</div>
					</div>
					
				}
			/>
		</div>
	);
};

export default Works;
