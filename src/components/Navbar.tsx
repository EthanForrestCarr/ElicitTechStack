import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition duration-300 ${isScrolled
                    ? 'bg-white/70 backdrop-blur-md shadow-md'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="text-2xl font-bold text-gray-800">
                            Elicit Tech Stack Demo
                        </a>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-6">
                        <a
                            href="#section1"
                            className="text-gray-800 hover:text-gray-600 transition duration-300"
                        >
                            Section 1
                        </a>
                        <a
                            href="#section2"
                            className="text-gray-800 hover:text-gray-600 transition duration-300"
                        >
                            Section 2
                        </a>
                        <a
                            href="#section3"
                            className="text-gray-800 hover:text-gray-600 transition duration-300"
                        >
                            Section 3
                        </a>
                        <a
                            href="#section4"
                            className="text-gray-800 hover:text-gray-600 transition duration-300"
                        >
                            Section 4
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            type="button"
                            className="text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;