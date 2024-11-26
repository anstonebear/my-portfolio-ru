import React from 'react';

import Header from './header/Header';

const Home = () => {
	return (
		<>
			<Header />
			<main className='section'>
				<div className='container'>
					<ul className='content-list'>
						<li className='content-list__item'>
							<h2 className='title-2' id='about'>
								Обо мне
							</h2>
							<p>
								Меня зовут Михайлов Антон, мне 24 года. Профессионально
								занимаюсь frontend-разработкой более двух лет. За это время
								успешно решил множество задач и прошел ряд курсов, что
								существенно расширило мои знания и отточило навыки. Готов
								реализовывать интересные проекты в команде с талантливыми
								людьми.
							</p>
						</li>
						<li className='content-list__item'>
							<h2 className='title-2' id='skills'>
								Навыки
							</h2>
							<p>
								JavaScript, TypeScript, ReactJS, NextJS, Redux Toolkit, HTML,
								CSS, Sass, NPM, BootStrap, MaterialUI, Yarn, TailwindCSS,
								StyledComponents, NGINX, Webpack Module Federation, Jest.js, RTK
								Query, React Query, Apollo GraphQL, Git, Rx.js
							</p>
						</li>
					</ul>
				</div>
			</main>
		</>
	);
};

export default Home;
