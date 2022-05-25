import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {

    return ( 
        <div className="header">
            <Link to='/'><img src="blog.png" alt="logo" className="logo"/></Link>
            <Link to='/add-post'><button>Add blog</button></Link>
        </div>
    );
}
 
export default Header;