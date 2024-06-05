/* eslint-disable */
import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNavbar = ({ collapsed, setCollapsed }) => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleProfileDropdownToggle = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  return (
    <div className="w-full shadow-lg ">
      <div className="navbar">
        <div className="flex-none lg:flex items-center space-x-4 ">
          <button onClick={() => setCollapsed(!collapsed)} className="btn btn-ghost custom-dark font-bold rounded-full">
            {collapsed ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
            </svg>}
          </button>


          <button className="btn btn-ghost custom-dark lg:hidden " onClick={handleMobileMenuToggle}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

               <div className="flex items-center justify-center p-4  font-bold custom-blue">
          <Link to="/" className=" normal-case text-xl ">
            GOINNOVIOR LIMITED
          </Link>
        </div>

        <div className="flex-1 flex justify-end items-center space-x-4">
          <button className="btn btn-ghost custom-dark">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26c.4.27.91.27 1.31 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </button>
          <button className="btn btn-ghost custom-dark">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
            </svg>

          </button>
          <div className="relative">
            <button className="btn btn-ghost custom-dark" onClick={handleProfileDropdownToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

            </button>
            {isProfileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
                <Link to="/register" className="block px-4 py-2 hover:bg-gray-200">Register</Link>
                <Link to="/login" className="block px-4 py-2 hover:bg-gray-200">Login</Link>
                <Link to="/settings" className="block px-4 py-2 hover:bg-gray-200">Settings</Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="bg-blue-600 custom-dark lg:hidden">
          <div className="p-2">
            <button className="btn btn-ghost w-full text-left custom-dark">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26c.4.27.91.27 1.31 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Messages
            </button>
            <button className="btn btn-ghost w-full text-left custom-dark">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14V11a6 6 0 10-12 0v3a2.032 2.032 0 01-.595 1.595L4 17h5m6 0v5m0 0h-6m6 0h6"></path>
              </svg>
              Notifications
            </button>
            <div className="relative">
              <button className="btn btn-ghost w-full text-left custom-dark" onClick={handleProfileDropdownToggle}>
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A7 7 0 0117.657 5.27M17.657 17.657a7 7 0 01-12.53-6.362M12 7v4l2 2"></path>
                </svg>
                Profile
              </button>
              {isProfileDropdownOpen && (
                <div className="pl-4">
                  <Link to="/register" className="block py-1 text-left hover:bg-gray-200">Register</Link>
                  <Link to="/login" className="block py-1 text-left hover:bg-gray-200">Login</Link>
                  <Link to="/settings" className="block py-1 text-left hover:bg-gray-200">Settings</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopNavbar;