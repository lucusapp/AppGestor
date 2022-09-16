import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';


export const Navbar = () => {

    
    const {user} = useContext(AuthContext)



    const navegate = useNavigate();
    const handelLogout = () => {
        navegate('/login',{ replace: true });
        console.log('logout');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/fiscal"
                    >
                        Fiscal
                    </NavLink>

                    <NavLink 
                        className="nav-item nav-link" 
                        to="/laboral"
                    >
                        Laboral
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info">
                        {user?.name}
                    </span>
                

                    <button
                        className="btn btn-primary" 
                        onClick={handelLogout}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}