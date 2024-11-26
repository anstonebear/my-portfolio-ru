import './styles/main.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import Home from './components/Home';
import Projects from './components/Projects';
import Contacts from './components/Contacts';

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<Projects />
			<Contacts />
			<Footer />
		</>
	);
}

export default App;
