import {FaShoppingCart} from "react-icons/fa"
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
    <div className="flex justify-between bg-blue-500">
        
        <NavLink to="/">
            <div>
                <img src="https://via.placeholder.com/100X50" alt="Shopping Cart" />
            </div>
        </NavLink>
        
        <div>
            <NavLink to="/">
                <p>Home</p>
            </NavLink>
            {/* <NavLink to="/cart">
                <div>
                  <FaShoppingCart/>
                </div>
            </NavLink> */}
        </div>
    </div>
  </div>
  )
};

export default Navbar;
