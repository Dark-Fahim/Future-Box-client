import React, { useState } from "react";
import { User, Mail, Lock, Image } from "lucide-react";
import { Link, useNavigate } from "react-router";
import useAuth from "../hooks/useAuth";
import useDynamicTitle from "../hooks/useDynamicTitle";

const Register = () => {
    useDynamicTitle('Register || EventSphere')
    const {createUser, update, loading, user, googleSignIn} = useAuth()
    const navigate = useNavigate()
    const [fullName, setFullName] = useState("");
    const [image, setImage] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    if(loading) {
        return <p>Loading Please Wait.......!</p>
    }
    if(user){
        return navigate('/')
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            console.log(result.user);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(email, password)
        .then((result) => {
            console.log(result.user);
            update(image, fullName)
            .then(() => {
                console.log('Profile Updated');
            })
            .catch(err => {
                console.log(err);
            })
        })
        .catch(err => {
            console.log(err);
        })

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-[#121212] transition-colors duration-500 px-4">
            <div className="max-w-md w-full bg-white dark:bg-[#1c1c1e] rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-6">
                    Create Your Account
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
                    Join EventSphere and start exploring events
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    
                    <div className="relative">
                        <User className="absolute top-3 left-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#121212] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>
                    
                    <div className="relative">
                        <Image className="absolute top-3 left-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
                        <input
                            type="text"
                            placeholder="Photo url"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#121212] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    
                    <div className="relative">
                        <Mail className="absolute top-3 left-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#121212] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    
                    <div className="relative">
                        <Lock className="absolute top-3 left-3 w-5 h-5 text-gray-400 dark:text-gray-500" />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#121212] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </div>

                    

                    
                    <button
                        type="submit"
                        className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition"
                    >
                        Sign Up
                    </button>
                </form>

                
                <div className="flex items-center my-6">
                    <hr className="flex-1 border-gray-300 dark:border-gray-700" />
                    <span className="mx-3 text-gray-500 dark:text-gray-400 text-sm">OR</span>
                    <hr className="flex-1 border-gray-300 dark:border-gray-700" />
                </div>

                
                <button onClick={handleGoogleSignIn}
                    type="button"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-[#1c1c1e] text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-[#2a2a2a] transition font-medium"
                >
                    
                    <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 533.5 544.3"
                    >
                        <path
                            fill="#4285F4"
                            d="M533.5 278.4c0-17.4-1.5-34.1-4.4-50.4H272.1v95.4h146.7c-6.3 34-25.3 62.9-54 82.2v68.2h87.2c51-47 80.5-116 80.5-195.4z"
                        />
                        <path
                            fill="#34A853"
                            d="M272.1 544.3c72.7 0 133.8-24.1 178.4-65.3l-87.2-68.2c-24.3 16.3-55.3 25.8-91.2 25.8-70 0-129.3-47.1-150.6-110.4H32.2v69.5C76.7 481 167.1 544.3 272.1 544.3z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M121.3 347.2c-11.5-34.1-11.5-70.7 0-104.8v-69.5H32.2C-6.5 223.3-6.5 321 32.2 400.3l89.1-53.1z"
                        />
                        <path
                            fill="#EA4335"
                            d="M272.1 107.1c38.8-.6 75.6 14.1 103.8 40.4l77.8-77.8C406.1 24.2 347.4-.2 272.1 0 167.1 0 76.7 63.3 32.2 160.4l89.1 69.5c21.3-63.3 80.6-110.4 150.8-122.8z"
                        />
                    </svg>
                    Sign in with Google
                </button>


                
                <p className="text-center text-gray-600 dark:text-gray-400 mt-6">
                    Already have an account?{" "}
                    <Link
                        to="/login"
                        className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
