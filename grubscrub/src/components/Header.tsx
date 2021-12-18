import React from 'react';
import logo from './logo.svg';
import './styles/header.css';

const Header = (Elem: React.ComponentClass<any>) => {
    return <div> <h1 className="Title" > GrubScrub <Elem /></h1></div>
}

export default Header;
