import "../../styles/sign-in/sign-in.css";
import ChevronLeft from "./_icon/chevronLeft";

const SignInPage = () => {
  return (
    <div className="sign-in-body">
      <h1 className="sign-in-title">
        <span className="sign-in-chevron">
          <ChevronLeft />
        </span>
        Sign In
      </h1>
    </div>
  );
};

export default SignInPage;
