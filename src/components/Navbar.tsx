
import { Link, useLocation } from "react-router-dom";
import { NavItems } from "../helper/NavItems";
import "../styles/navbar.css";
import ListManager from "./ListManager";


const Navbar = () => {
    const location = useLocation();

    return ( 
        <aside className="aside">
            <nav className="navbar nav-color">
                <Link to='/' id="logo">
                    <div>
                        <div></div>
                    </div>
                    <h1>Spa<span>ce</span></h1>
                </Link>

                <ListManager 
                    data={NavItems}
                    renderer={(_navItem => (
                        <Link 
                            to={_navItem.route} 
                            className={`nav-item ${location.pathname === _navItem.route ? 'active' : ''}`}
                        >
                            <img src={_navItem.icon} alt={_navItem.name} />
                            <span>{_navItem.name}</span>
                        </Link>
                    ))}
                    className={{
                        container: 'nav-list',
                        item: 'nav-item'
                    }}
                />
                
                <button className="profile">
                    <div></div>
                    <span>Profile</span>
                </button>
            </nav>
        </aside>
     );
}
 
export default Navbar;
