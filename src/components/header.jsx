import {Link} from "react-router-dom";

function Header(){
    return(
        <>
        <header>
            <div className="header">
                <div className="logo">
                <Link to="/"><h3>App name</h3></Link>
                </div>
                <div className="navbars">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About</Link></li>
                        <li><Link to="/Contact">Contact</Link></li>
                    </ul>
                </div>
            </div>
        </header>
        </>
    );
};

export default Header; 