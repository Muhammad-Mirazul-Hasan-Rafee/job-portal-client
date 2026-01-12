import Lottie from "lottie-react";
import SignInAnimation from "../../assets/signin.json";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext/AuthContext";
import SocialLogin from "../shared/SocialLogin";


const SignIn = () => {
const {signInUser} = useContext(AuthContext);
    


  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInUser(email , password)
    .then((result)=>{
        console.log("signed in" , result.user);
    })
    .catch((error)=>{
        console.log("Oh no!!" , error.message);
    })



  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left mx-6 p-4">
          <Lottie animationData={SignInAnimation} className=""></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="mx-auto mt-4 text-5xl font-bold">Sign in now!</h1>
          <form onSubmit={handleSignIn} className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Sign in</button>
            </fieldset>
          </form>
          <SocialLogin/>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
