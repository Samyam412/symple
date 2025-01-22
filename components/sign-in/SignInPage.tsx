import "../../styles/sign-in/sign-in.css";
import ChevronLeft from "./_icons/ChevronLeft";
import SectionDivider from "./_icons/SectionDivider";
import IconCluster from "./IconCluster";
import SearchBar from "./SearchBar";

const SignInPage = () => {
  return (
    <section className="sign-in-body">
      <h1 className="sign-in-title">
        <span className="sign-in-chevron">
          <ChevronLeft />
        </span>
        Sign In
      </h1>
      <div className="search-bar-container">
        <SearchBar />
        <div className="section-divider">
          <SectionDivider />
        </div>
        <IconCluster />
      </div>
      <h1 className="sign-in-title">Symple</h1>
    </section>
  );
};

export default SignInPage;
