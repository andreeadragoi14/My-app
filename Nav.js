import './App.css';
import {Link} from 'react-router-dom';

function Navigation() {
  return (
    <header className="Navigation">
    <nav>
        <Link to="/" className="nav-items">Home</Link>
        <Link to="/about" className="nav-items">About</Link>
        <Link to="/menu" className="nav-items">Menu</Link>
        <Link to="/reservations" className="nav-items">Reservations</Link>
        <Link to="/order-online" className="nav-items">Order Online</Link>
        <Link to="/login" className="nav-items">Login</Link>
    </nav>
    </header>
  );
}

export default Navigation;