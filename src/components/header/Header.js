import React from 'react';

import tg from '../../img/icons/tg.svg';
import git from '../../img/icons/gitHub.svg';
import mail from '../../img/icons/mail.svg';

import './style.css';
const Header = () => {
	return (
		<header className='header'>
			<div className='header__wrapper'>
				<h1 className='header__title'>
					<strong>
						Привет, меня зовут <em>Михайлов Антон</em>
					</strong>
					<br />я фронтенд-разработчик
				</h1>
				<div className='header__text'>
					<p>со страстью к обучению и творчеству.</p>
				</div>
				<div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
					<a href='mailto:anstxne@gmail.com'>
						<img src={mail} alt='mail' className='' />
					</a>
					<a href='https://github.com/anstonebear'>
						<img src={git} alt='github' className='' />
					</a>
					<a href='https://t.me/anstxne'>
						<button style={{ backgroundColor: 'white', borderRadius: 5 }}>
							<img src={tg} alt='tg' className='' />
						</button>
					</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
