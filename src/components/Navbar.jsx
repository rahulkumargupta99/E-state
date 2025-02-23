import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        if (showMobileMenu || showSignupModal || showLoginModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [showMobileMenu, showSignupModal, showLoginModal]);

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        setShowSignupModal(false);
        alert("🎉 Your registration was successful! Welcome aboard! 🚀");
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setShowLoginModal(false);
        alert("✅ Logged in successfully! Welcome back! 🔥");
    };

    return (
        <div className="absolute top-0 left-0 w-full z-50 bg-transparent">
            <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32">
                <img src={assets.logo} alt="Logo" className="w-24" />
                <ul className="hidden md:flex gap-7 text-white">
                    <li><a href="#Header" className="cursor-pointer hover:text-gray-400">Home</a></li>
                    <li><a href="#About" className="cursor-pointer hover:text-gray-400">About</a></li>
                    <li><a href="#Projects" className="cursor-pointer hover:text-gray-400">Projects</a></li>
                    <li><a href="#Testimonials" className="cursor-pointer hover:text-gray-400">Testimonials</a></li>
                </ul>
                <div className="hidden md:flex gap-4">
                    <button 
                        className="bg-white text-black px-6 py-2 rounded-full transition duration-300 hover:bg-gray-200"
                        onClick={() => setShowLoginModal(true)}
                    >
                        Login
                    </button>
                    <button 
                        className="bg-white text-black px-6 py-2 rounded-full transition duration-300 hover:bg-gray-200"
                        onClick={() => setShowSignupModal(true)}
                    >
                        Sign up
                    </button>
                </div>
                <img onClick={() => setShowMobileMenu(true)} src={assets.menu_icon} className="md:hidden w-7 cursor-pointer" alt="" />
            </div>

            {/* ------------ Mobile Menu -------------- */}
            {showMobileMenu && (
                <div className="md:hidden fixed w-full h-full right-0 top-0 bg-white transition-all">
                    <div className="flex justify-end p-6 cursor-pointer">
                        <img onClick={() => setShowMobileMenu(false)} src={assets.cross_icon} className="w-6" alt="Close" />
                    </div>
                    <ul className="flex flex-col items-center gap-5 mt-5 px-5 text-lg font-medium">
                        <li><a href="#Header" className="px-4 py-2" onClick={() => setShowMobileMenu(false)}>Home</a></li>
                        <li><a href="#About" className="px-4 py-2" onClick={() => setShowMobileMenu(false)}>About</a></li>
                        <li><a href="#Projects" className="px-4 py-2" onClick={() => setShowMobileMenu(false)}>Projects</a></li>
                        <li><a href="#Testimonials" className="px-4 py-2" onClick={() => setShowMobileMenu(false)}>Testimonials</a></li>
                    </ul>
                </div>
            )}

            {/* ------------ Signup Modal -------------- */}
            {showSignupModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Sign Up</h2>
                            <button onClick={() => setShowSignupModal(false)} className="text-gray-500 text-lg">✖</button>
                        </div>
                        <form className="space-y-4" onSubmit={handleSignupSubmit}>
                            <input type="text" placeholder="Full Name" className="w-full px-3 py-2 border rounded-md" required />
                            <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md" required />
                            <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md" required />
                            <input type="password" placeholder="Confirm Password" className="w-full px-3 py-2 border rounded-md" required />
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">Sign Up</button>
                        </form>
                        <p className="text-sm text-gray-600 mt-3">Already have an account? 
                            <span onClick={() => { setShowSignupModal(false); setShowLoginModal(true); }} className="text-blue-500 cursor-pointer"> Login</span>
                        </p>
                    </div>
                </div>
            )}

            {/* ------------ Login Modal -------------- */}
            {showLoginModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Login</h2>
                            <button onClick={() => setShowLoginModal(false)} className="text-gray-500 text-lg">✖</button>
                        </div>
                        <form className="space-y-4" onSubmit={handleLoginSubmit}>
                            <input type="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md" required />
                            <input type="password" placeholder="Password" className="w-full px-3 py-2 border rounded-md" required />
                            <button type="submit" className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600">Login</button>
                        </form>
                        <p className="text-sm text-gray-600 mt-3">Don't have an account? 
                            <span onClick={() => { setShowLoginModal(false); setShowSignupModal(true); }} className="text-blue-500 cursor-pointer"> Sign Up</span>
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
