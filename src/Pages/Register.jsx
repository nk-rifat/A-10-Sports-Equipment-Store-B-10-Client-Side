import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Register = () => {
    const location = useLocation();

    // Set the title dynamically based on the route
    useEffect(() => {
        document.title = 'Register | Equip Zone';
    }, [location]);

    const { setUser, registerUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();

        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            setError('password length should be 6 with one Uppercase and one Lowercase');
            toast.error('Invalid password format!');
            return;
        }

        registerUser(email, password)
            .then(result => {
                const user = result.user;
                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                    })
                toast.success('Registration successful!');
                setUser(user);
                navigate('/');
            })
            .catch(error => {
                const err = error.message;
                setError(err);
            });
        e.target.reset();
    }

    return (
        <div>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
            <div className="min-h-screen flex justify-center items-center">
                <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-2xl p-8">
                    <h2 className="text-2xl text-center mt-6 font-bold">Register your account</h2>
                    <form onSubmit={handleRegister} className="card-body">
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

                        {
                            error && <p className="text-red-500">{error}</p>
                        }

                        <div className="form-control mt-6">
                            <button className="btn btn-outline btn-primary font-bold w-full">Register</button>
                        </div>
                    </form>
                    <p className="text-center font-semibold">Already Have An Account ? <Link className="text-red-600 font-bold" to='/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;