import React from 'react';
import Banner from './Banner';
import Menu from './Menu';

/**
 * Component for page header
 */
const Header: React.FC = () => {
    return (
        <>
            <Banner />
            <Menu />
        </>
    );
};

export default Header;
