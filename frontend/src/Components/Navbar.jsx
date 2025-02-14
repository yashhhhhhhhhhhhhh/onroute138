import "../App.css";

export default function Navbar() {
  return (
    <div>
      <nav className="NavBar">
        <div className="NavLeftSide">ONRoute 138 </div>
        <div className="NavLeftSide"> Hello Admin</div>
        <div className="NavbarItems">
          <ul>
            <li className="NavBarLink">
              <a href="">Home</a>
            </li>
            <li className="NavBarLink">
              <a href="">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
