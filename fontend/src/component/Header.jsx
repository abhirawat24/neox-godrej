import React, { useState } from 'react';

const Header = () => {
    // State to handle login/logout
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Toggle login/logout state
    const handleAuth = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <header className="bg-gray-800 text-white flex justify-between items-center p-4">
            <div className="navbar-logo">
                {/* Replace the src with the path to your logo */}
                <img src="/path-to-logo/logo.png" alt="Logo" className="h-12 cursor-pointer" />
            </div>
            <div className="navbar-buttons">
                {isLoggedIn ? (
                    <button
                        onClick={handleAuth}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Logout
                    </button>
                ) : (
                    <button
                        onClick={handleAuth}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Login
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;
