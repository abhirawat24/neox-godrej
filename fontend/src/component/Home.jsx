// Homepage.js
import React from 'react';

const Homepage = () => {
    return (
        <div className="min-h-screen bg-gray-100 text-gray-800">
           

            <main className="p-10 text-center">
                <h2 className="text-4xl font-bold mb-6">Efficient Hiring Made Easy</h2>
                <p className="text-lg mb-4">
                    Discover a fast and effective way to manage candidates and streamline your recruitment process.
                </p>
                <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700">
                    Get Started
                </button>
            </main>

            <section className="p-10 bg-gray-200 text-center">
                <h3 className="text-2xl font-bold mb-4">Key Features</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6 bg-white shadow-md rounded">
                        <h4 className="text-xl font-semibold mb-2">Automated Hiring</h4>
                        <p>Reduce manual efforts with our automated workflows and candidate screening.</p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded">
                        <h4 className="text-xl font-semibold mb-2">Candidate Search</h4>
                        <p>Find the best talent using our advanced search tools based on location and role.</p>
                    </div>
                    <div className="p-6 bg-white shadow-md rounded">
                        <h4 className="text-xl font-semibold mb-2">Analytics Dashboard</h4>
                        <p>Gain insights into your hiring process with detailed reports and analytics.</p>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-800 text-white text-center p-4">
                <p>&copy; 2024 Recruitment Solution</p>
            </footer>
        </div>
    );
};

export default Homepage;
