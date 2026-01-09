import Lottie from 'lottie-react';
import RegisterLottieData from "../../assets/register.json";

const Register = () => {

  const handleRegister = (e) =>{
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email , password);
  };


    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left mx-6 p-4">
     
      <Lottie animationData={RegisterLottieData}></Lottie>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
         <h1 className="mx-auto mt-4 text-5xl font-bold">Register now!</h1>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;