import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input
                            className="w-full px-4 py-2 border rounded"
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2" htmlFor="password">Password</label>
                        <input
                            className="w-full px-4 py-2 border rounded"
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                        />
                    </div>
                    <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Login
                    </button>
                </form>
                <button
                    className="w-full mt-4 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
                    onClick={onClose}
                >
                    Close
                </button>
                <div className='flex justify-center gap-10'>
                    <p className='text-blue-600'>Forgot Password?</p>
                    <NavLink to={'/register'}>   
                    <p className='text-blue-600'>Sign Up?</p>
                        </NavLink> 
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
