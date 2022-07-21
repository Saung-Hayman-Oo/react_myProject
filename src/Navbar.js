import { Link } from "react-router-dom";
const Nav = () => {
    return ( 
        <div className="nav bg-gray-300 text-white py-5 px-3 flex justify-around items-center">
            <h2 className="text-3xl font-bold ">Logo</h2>
            <nav className="links text-2xl flex justify-around items-center w-2/4">
                <Link to="/shop">Shop</Link>
                <Link to="/new-item">New Item</Link>
                <Link to="/login">Login</Link>
                
            </nav>
        </div>
     );
}
 
export default Nav;