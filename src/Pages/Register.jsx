import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const Register = () => {
    return (
        <div>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <div className="min-h-screen flex justify-center items-center">
                <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl p-8">
                    <h2 className="text-2xl text-center mt-6 font-bold">Register your account</h2>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="user name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type="text" placeholder="photo url" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-primary font-bold w-full">Register</button>
                        </div>
                        <p className="text-center font-semibold mt-5">Already Have An Account ? <Link className="text-red-600 font-bold" to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;