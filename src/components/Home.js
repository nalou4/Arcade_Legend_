import '../style.css';
import Header from './Header';
import Welcome from './Welcome';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Header />
            <Welcome />
        </>

    )
};

export default Home;