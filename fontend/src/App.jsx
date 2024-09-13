import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Homepage from './component/Home';
import Register from './component/Register';
import CandidateSearch from './component/CandidateSearch';
import LoginModal from './component/Login';

const App = () => {
    const [isLoginOpen, setIsLoginOpen] = useState(false);

    const openLoginModal = () => {
        setIsLoginOpen(true);
    };

    const closeLoginModal = () => {
        setIsLoginOpen(false);
    };

    return (
        <Router>
            <div className="min-h-screen bg-gray-100 text-gray-800">
                {/* Navigation Bar */}
                <nav className="bg-gray-800 text-white p-4">
                    <ul className="flex justify-between items-center">
                        <li>
                            <Link to="/" className="px-3 py-2 hover:bg-gray-700 rounded">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="px-3 py-2 hover:bg-gray-700 rounded">
                                Register
                            </Link>
                        </li>
                        <li>
                            <Link to="/candidate-search" className="px-3 py-2 hover:bg-gray-700 rounded">
                                Candidate Search
                            </Link>
                        </li>
                        <li>
                            {/* Button to open login modal */}
                            <button onClick={openLoginModal} className="px-3 py-2 bg-blue-500 rounded hover:bg-blue-700">
                                Login
                            </button>
                        </li>
                    </ul>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/candidate-search" element={<CandidateSearch />} />
                </Routes>

                {/* Login Modal */}
                <LoginModal isOpen={isLoginOpen} onClose={closeLoginModal} />
            </div>
        </Router>
    );
};

export default App;
