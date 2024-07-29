// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Container } from '../../framework/ui';

// export default function TopNav() {
//   return (
//     <div className="ui fixed inverted teal menu">
//       <Container>
//         <Link to="/" className="header item">
//           My React App
//         </Link>
//         <Link to="/courses" className="item">Courses</Link>
//         <Link to="/students" className="item">Students</Link>
//         <Link to="/lecturers" className="item">Lecturers</Link>
//       </Container>
//     </div>
//   );
// }
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">MyLogo</div>
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/students">Students</a></li>
          </ul>
        </nav>
        <div className="menu-icon" onClick={toggleMenu}>
          &#9776;
        </div>
      </div>
    </header>
  );
};

export default Header;

