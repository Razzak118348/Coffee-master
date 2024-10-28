import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/ContextApi";

const Navbar = () => {
    const { LogOut, user } = useContext(AuthContext)

    return (
        <div>
            <img src="/Group 2.png" alt="" />
            <div className="flex justify-start items-center -mt-12 text-white space-x-5 md:space-x-12 ml-2 md:ml-5 font-bold">
    <NavLink to={'/'}>Home</NavLink>
    <NavLink to={'/user'}>All Users</NavLink>

</div>
            <div className="flex justify-end items-end -mt-4 md:-mt-12">
                {
                    user ? <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full " title={user?.displayName || 'User name not found'}>
                                <img className="" src={user?.photoURL ? user.photoURL : "https://cdn-icons-png.flaticon.com/512/219/219986.png"} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1000] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm  btn-ghost"><Link to={'/profile'}>{user?.displayName || 'user name not found'}</Link></button>

                            </li>
                            <li>
                                <button
                                    onClick={LogOut}
                                    className="btn btn-sm  btn-ghost">Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to={'/login'} className="btn bg-yellow-400 font-bold text-base md:text-xl">Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;