import { useState, useEffect } from 'react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

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

                    {/* Navigation Links (Desktop) */}
                    <div className="hidden md:flex space-x-6">
                        <a
                            href="#react-re-render"
                            className="text-gray-800 hover:text-gray-600 transition duration-300"
                        >
                            React Re-Render
                        </a>
                        <a
                            href="#flexbox-vs-grid"
                            className="text-gray-800 hover:text-gray-600 transition duration-300"
                        >
                            Flexbox vs Grid
                        </a>
                        <a
                            href="#web-worker"
                            className="text-gray-800 hover:text-gray-600 transition duration-300"
                        >
                            Web Worker
                        </a>
                        <a
                            href="#tailwind-card"
                            className="text-gray-800 hover:text-gray-600 transition duration-300"
                        >
                            Tailwind Card
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-800"
                            aria-label="Toggle menu"
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

            {/* Sliding Mobile Menu */}
            <div
                className={`fixed top-0 right-0 w-64 h-screen bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}
            >
                <div className="flex flex-col p-4 space-y-4">
                    <button
                        onClick={toggleMenu}
                        className="self-end text-gray-800 hover:text-gray-600 focus:outline-none"
                        aria-label="Close menu"
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
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <a
                        href="#react-re-render"
                        onClick={toggleMenu}
                        className="text-gray-800 hover:text-gray-600 transition duration-300"
                    >
                        React Re-Render
                    </a>
                    <a
                        href="#flexbox-vs-grid"
                        onClick={toggleMenu}
                        className="text-gray-800 hover:text-gray-600 transition duration-300"
                    >
                        Flexbox vs Grid
                    </a>
                    <a
                        href="#web-worker"
                        onClick={toggleMenu}
                        className="text-gray-800 hover:text-gray-600 transition duration-300"
                    >
                        Web Worker
                    </a>
                    <a
                        href="#tailwind-card"
                        onClick={toggleMenu}
                        className="text-gray-800 hover:text-gray-600 transition duration-300"
                    >
                        Tailwind Card
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;