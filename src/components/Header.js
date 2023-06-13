import '../style.css';
import { Link } from 'react-router-dom';
import { resetDropdown } from './Animations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

    const handleClick = function () {
        window.onload.then(resetDropdown())
    }
    return (
        <>
            <header>
                <div className="navbar">
                    <div className="header-logo">
                        <Link onClick={handleClick} to="/">
                            <FontAwesomeIcon on icon={faGamepad} />
                        </Link>
                    </div>
                    <ul className="links">
                        <li><a href="https://nikki-lou.netlify.app/">About</a></li>
                        <li><Link to="/games">Games</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><a href='https://bmc.link/nikkilou'>Support</a></li>
                    </ul>

                    <Link className='action_btn' to="/feedback">Leave Feedback</Link>
                    <div className="toggle_btn">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </div>
                <div className="dropdown_menu">
                    <li><Link onClick={handleClick} to="/">Home</Link></li>
                    <li><Link onClick={handleClick} to="/games">Games</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href='https://bmc.link/nikkilou'>Support</a></li>
                    <li><Link className='action_btn' to="/feedback">Leave Feedback</Link></li>
                </div>
            </header>
        </>
    )
};

export default Header;