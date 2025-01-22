import "../../styles/sign-in/sign-in.css";
import ChevronLeft from "./_icon/chevronLeft";
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
      </div>
    </section>
  );
};

export default SignInPage;
