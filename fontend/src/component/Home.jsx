import React from "react";
import Footer from "./Footer";
import Efficiency from "./Efficiency";

const Homepage = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-300 text-gray-800">
        {/* Hero section */}
        <div className="flex flex-col md:flex-row justify-center h-[400px]">
          <div className="w-full md:w-[50%] h-full flex flex-col items-center mx-auto">
            <h2 className="text-4xl font-bold mb-6 mt-20 text-center">
              Efficient Hiring Made Easy
            </h2>
            <div className="flex flex-col items-center">
              <p className="text-lg mb-4 text-center">
                Discover a fast and effective way to manage candidates and
                streamline your recruitment process.
              </p>
              <div className="w-full flex justify-center">
                <button className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-700">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          <div className="w-full md:w-[50%] bg-black">
            <img
              src="https://careers.buyerforesight.com/wp-content/uploads/2022/11/IT-Support-Engineer.png"
              alt="Hiring Illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Key feature section */}
        <section className="p-10 bg-gray-200 text-center">
          <h3 className="text-2xl font-bold mb-4">Key Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded">
              <h4 className="text-xl font-semibold mb-2">Automated Hiring</h4>
              <p>
                Reduce manual efforts with our automated workflows and candidate
                screening.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded">
              <h4 className="text-xl font-semibold mb-2">Candidate Search</h4>
              <p>
                Find the best talent using our advanced search tools based on
                location and role.
              </p>
            </div>
            <div className="p-6 bg-white shadow-md rounded">
              <h4 className="text-xl font-semibold mb-2">
                Analytics Dashboard
              </h4>
              <p>
                Gain insights into your hiring process with detailed reports and
                analytics.
              </p>
            </div>
          </div>
        </section>

        {/* Efficiency section */}
        <section className="my-4">
          <Efficiency />
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
