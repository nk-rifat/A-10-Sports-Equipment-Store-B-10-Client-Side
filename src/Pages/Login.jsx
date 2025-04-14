import { useContext, useState } from "react";
import { Link} from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import Navbar from "../Components/Navbar";
import { toast } from "react-toastify";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const { loginUser, setUser, signInWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState('');

    const handleLogin = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Login successful!');
                setUser(user);
                e.target.reset();
            })
            .catch(error => {
                const err = error.message;
                setError(err);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                const user = result.user;
                setUser(user);
            })
            .catch(error => {
                const err = error.message;
                setError(err);
            })
    };

    return (
        <div>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <div className="min-h-screen flex justify-center items-center">
                <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl p-8">
                    <h2 className="text-2xl text-center mt-6 font-bold">Login your account</h2>
                    <form onSubmit={handleLogin} className="card-body">
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
                            <input name="password" type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />

                            <button type="button" onClick={() => setShowPassword(!showPassword)} className="btn btn-ghost absolute right-0.5 top-6">
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </button>

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>

                        {
                            error && <p className="text-red-500">{error}</p>
                        }

                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-primary font-bold w-full">Login</button>
                            <Link onClick={handleGoogleSignIn} className="btn btn-outline btn-primary font-bold w-full mt-3">Login With Google</Link>
                        </div>
                    </form>
                    <p className="text-center font-semibold">Do not Have An Account ? <Link className="text-red-600 font-bold" to='/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;