import React from 'react';
import Nav from './Nav.jsx'
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Layout(){
    return(
        <>
            <div className='layout'>
                <aside>
                    <Nav />
                </aside>
                <main>
                    <Outlet/>
                </main>
            </div>
        </>
    )
}