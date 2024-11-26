import React from 'react';

import BtnDarkMode from '../btnDarkMode/BtnDarkMode';

import './style.css';

const Navbar = () => {
	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav-row'>
					<a href='./index.html' className='logo'>
						<strong>Портфолио</strong> frontend
					</a>

					<BtnDarkMode />

					<ul className='nav-list'>
						<li className='nav-list__item'>
							<a
								href='#about'
								className='nav-list__link nav-list__link--active'
							>
								Обо мне
							</a>
						</li>
						<li className='nav-list__item'>
							<a href='#skills' className='nav-list__link'>
								Навыки
							</a>
						</li>
						<li className='nav-list__item'>
							<a href='#projects' className='nav-list__link'>
								Проекты
							</a>
						</li>
						<li className='nav-list__item'>
							<a href='#contacts' className='nav-list__link'>
								Контакты
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
