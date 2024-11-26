import React from 'react';

const Contacts = () => {
	return (
		<>
			<main class='section' id='contacts'>
				<div class='container'>
					<h1 class='title-1'>Контакты</h1>

					<ul class='content-list'>
						<li class='content-list__item'>
							<h2 class='title-2'>Локация</h2>
							<p>Санкт-Петербург, Россия</p>
						</li>
						<li class='content-list__item'>
							<h2 class='title-2'>Telegram / WhatsApp</h2>
							<p
								style={{
									display: 'flex',
									gap: '5px',
									justifyContent: 'center',
								}}
							>
								<a href='https://t.me/anstxne'>@anstxne</a>
								<span>/</span>
								<a href='tel:+79819794719'> +7 (981) 979-47-19</a>
							</p>
						</li>
						<li class='content-list__item'>
							<h2 class='title-2'>Email</h2>
							<p>
								<a href='mailto:anstxne@gmail.com'>anstxne@gmail.com</a>
							</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
};

export default Contacts;
