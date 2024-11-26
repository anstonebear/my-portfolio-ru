import React from 'react';

import './style.css';

import tg from '../../img/icons/telegram.svg';
import mail from '../../img/icons/gmail.svg';

import github from '../../img/icons/gitHub.svg';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__wrapper'>
					<ul className='social'>
						<li className='social__item'>
							<a href='https://t.me/anstxne'>
								<img src={tg} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='https://github.com/anstonebear'>
								<img src={github} alt='Link' />
							</a>
						</li>
						<li className='social__item'>
							<a href='mailto:anstxne@gmail.com'>
								<img src={mail} alt='Link' />
							</a>
						</li>
					</ul>
					<div className='copyright'>
						<p>© 2024 Mikhailov Anton All Rights Reserved.</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
