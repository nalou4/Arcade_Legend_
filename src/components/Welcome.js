import '../style.css';
import { Link } from 'react-router-dom';

const Welcome = () => {

    return (
        <>
            <section className="hidden">
                <div className="container">
                    <h1>Arcade Legend</h1>
                    <Link to="/games">
                        <p id='link'>Play a game</p>
                    </Link>
                    
                </div>
            </section>
        </>
    )
};

export default Welcome;