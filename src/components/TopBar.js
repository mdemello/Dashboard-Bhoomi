import React from 'react';
import micaela from '../assets/img/micaela.jpg';

function TopBar(){

    return(
        <React.Fragment>
                    {/* Topbar */}
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                    {/* Sidebar Toggle (Topbar) */}
                    <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <       i className="fa fa-bars" />
                    </button>
            {/* Topbar Navbar */}
            <ul className="navbar-nav ml-auto">
                {/* Nav Item - Alerts */}
                <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
                    <i className="fas fa-bell fa-fw" />
                    {/* Counter - Alerts */}
                    <span className="badge badge-danger badge-counter">3+</span>
                </a>
                </li>
                {/* Nav Item - Messages */}
                <li className="nav-item dropdown no-arrow mx-1">
                <a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
                    <i className="fas fa-envelope fa-fw" />
                    {/* Counter - Messages */}
                    <span className="badge badge-danger badge-counter">7</span>
                </a>
                </li>
                <div className="topbar-divider d-none d-sm-block" />
                {/* Nav Item - User Information */}
                <li className="nav-item dropdown no-arrow">
                <a className="nav-link dropdown-toggle" href="/" id="userDropdown">
                    <span className="mr-2 d-none d-lg-inline text-gray-600 small">Micaela de Mello</span>
                    <img className="img-profile rounded-circle" src={micaela} alt="Micaela" width={60} />
                </a>
                </li>
            </ul>
            </nav>
            {/* End of Topbar */}

        </React.Fragment>

    )
    
}

export default TopBar;