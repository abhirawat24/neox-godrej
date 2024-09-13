// Register.js
import React from 'react';

const Register = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="companyName">Company Name</label>
                        <input 
                            className="w-full px-4 py-2 border rounded" 
                            type="text" 
                            id="companyName" 
                            placeholder="Enter your company name"
                        />
                    </div>
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
                            placeholder="Create a password"
                        />
                    </div>
                    <button className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
                        Register
                    </button>
                </form>
                <p className="mt-6 text-center">
                    Already have an account? <a href="/login" className="text-blue-500">Login</a>
                </p>
            </div>
        </div>
    );
};

export default Register;
