import '../style.css';
import Home from './Home';
import Games from './Games';
import About from './About';
import { loadPage } from './Animations';
import { Routes, Route } from 'react-router-dom';
import Feedback from './Feedback';

const App = () => {
    window.onload = loadPage;

    return (
        <>
            <Routes>
                <Route exact path="/" element={<Home />} /> 
                <Route path="/games" element={<Games />} />
                <Route path="/feedback" element={<Feedback />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}

export default App;