import React from 'react';
import Banner from './Banner';
import NavBar from './NavBar';

/**
 * Component for page header
 */
const Header: React.FC = () => {
    return (
        <>
            <Banner />
            <NavBar />
        </>
    );
};

export default Header;
