import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Login = () => {
    return (
        <div>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <div className="min-h-screen flex justify-center items-center">
                <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl p-8">
                    <h2 className="text-2xl text-center mt-6 font-bold">Login your account</h2>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type='password' placeholder="password" className="input input-bordered" required />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-primary font-bold w-full">Login</button>
                        </div>
                    </form>
                    <p className="text-center font-semibold">Do not Have An Account ? <Link className="text-red-600 font-bold" to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;