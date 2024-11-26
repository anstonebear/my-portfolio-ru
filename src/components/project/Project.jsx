import React from 'react';

import './style.css';

import project01 from './../../img/projects/01.jpg';
const Project = props => {
	return (
		<li className='project'>
			<a href={props.githubLink}>
				<img src={props.image} alt='Project img' className='project__img' />
				<h3 className='project__title'>{props.title}</h3>
			</a>
		</li>
	);
};

export default Project;
