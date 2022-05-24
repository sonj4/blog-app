import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return ( 
        <div className="header">
            <img src="blog.png" alt="logo" className="logo"/>
            <button>Add blog</button>
        </div>
    );
}
 
export default Header;