import React from 'react';
import logo from './logo.svg';
import '../styles/header.css';
import { Button } from 'react-bootstrap';



const Header = () => {
    return <div> 
        <h1 className="Title" > Welcome to Grub Scrub! </h1>
        <Button variant="outline-primary">Search</Button>{' '}
    </div>
}

export default Header;
