import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Avery's Organic Produce</h1>
      <Link to="/">Home</Link> | <Link to="/locations">Find Us</Link> | <Link to="/selection">What we Sell</Link>
    </div>
  );
}

export default Header;
