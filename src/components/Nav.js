// Imports

import React from 'react';
import {NavLink} from 'react-router-dom';

/*
 Function for displaying navigation links for fixed search phrases
*/

const Nav = () => {

        return (
            <nav className={'main-nav'}>
                <ul>
                    <li><NavLink to={`/search/Lake`}>Lake</NavLink></li>
                    <li><NavLink to={`/search/mountains`}>Mountains</NavLink></li>
                    <li><NavLink to={`/search/forest`}>Forest</NavLink></li>
                    <li><NavLink to={`/search/sea`}>Sea</NavLink></li>
                </ul>
            </nav>
        )
}

// Export

export default Nav;