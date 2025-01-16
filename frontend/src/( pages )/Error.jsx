import React from "react";
import NavigationBar from "../NavigationBar";
import Footer from "../( components )/Footer";
import Breadcrumb from "../( components )/Breadcrumb";

const ErrorPage = () => {
  return (
    <>
    <NavigationBar />
    <Breadcrumb title="Error" />
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-96 h-auto">
        {/* Replace with your image source */}
        <img
          src="/images/rb_1921.png"
          alt="Error"
          className="w-full object-cover"
        />
      </div>
      <h1 className="mt-6 text-xl font-semibold text-gray-800">Error</h1>
      <p className="text-gray-600 mt-2 text-center">
        Something went wrong. Please try again later.
      </p>
      <button
        onClick={() => window.location.href = '/'}
        className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Go Back to Home
      </button>
    </div>
    <Footer />
    </>
  );
};

export default ErrorPage;
