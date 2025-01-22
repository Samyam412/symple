import Link from "next/link";
import "../../styles/footer/footer.css";
import SympleIcon from "./_icon/SympleIcon";

const Footer = () => {
  return (
    <div className="footer">
      <Link className="footer-link" href="/auth">
        Sign up or sign in
      </Link>
      <div className="footer-icon"><SympleIcon/></div>
    </div>
  );
};

export default Footer;
