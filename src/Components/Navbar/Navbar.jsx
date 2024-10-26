import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
<img src="/Group 2.png" alt="" />
<Link to={'/login'}><button className="btn -mt-5">Login</button></Link>
        </div>
    );
};

export default Navbar;