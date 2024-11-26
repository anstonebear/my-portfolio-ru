import React from 'react';

import Project from './project/Project';

import { projects } from '../helpers/ProjectsList';

const Projects = () => {
	return (
		<>
			<main className='section' id='projects'>
				<div className='container'>
					<h2 className='title-1'>Проекты</h2>
					<ul className='projects'>
						{projects.map(({ title, id, image, githubLink }) => {
							return (
								<Project
									key={id}
									title={title}
									image={image}
									githubLink={githubLink}
								/>
							);
						})}
					</ul>
				</div>
			</main>
		</>
	);
};

export default Projects;
