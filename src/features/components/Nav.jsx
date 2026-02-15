import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    const setActive = ({ isActive }) => (isActive ? 'active-link' : 'pending-link');
    return(
        <>
            <nav>
                <div>
                    <NavLink className={setActive} to="/" end>
                        Dashboard
                    </NavLink>
                </div>
                    <div className='other-links'>
                        <NavLink className={setActive} to="/applications" end>
                            Applications
                        </NavLink>
                        <NavLink className={setActive} to="/applications/new" end>
                            New Application
                        </NavLink>
                    </div>
            </nav>
        </>
    )
}