import "../../styles/navbar/navbar.css";
import SympleColorLogo from "./_icons/SympleColorLogo";
import UserIcon from "./_icons/UserIcon";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <div className="symple-logo">
        <SympleColorLogo />
      </div>
      <div className="user-icon">
        <UserIcon />
      </div>
    </nav>
  );
};

export default Navbar;
