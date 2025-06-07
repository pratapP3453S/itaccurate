import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiSun,
    FiMoon,
    FiMenu,
    FiX,
    FiSearch,
    FiBookOpen,
    FiUser,
    FiFileText,
    FiBriefcase,
    FiAward,
    FiUsers,
    FiMail,
    FiChevronDown,
    FiChevronUp,
    FiArrowRight
} from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { HeaderSkeleton } from '../ui/SkeletonEffects/HeaderSkeleton';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeMainMenu, setActiveMainMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
    const [mobileActiveSubMenu, setMobileActiveSubMenu] = useState(null);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [isHoveringSubmenu, setIsHoveringSubmenu] = useState(false);

    // Check for saved theme preference
    useEffect(() => {
        const savedMode = localStorage.getItem('darkMode') === 'true';
        setDarkMode(savedMode);
        document.documentElement.classList.toggle('dark', savedMode);
    }, []);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('darkMode', newMode);
        document.documentElement.classList.toggle('dark', newMode);
    };

    const menuItems = useSelector((state) => state.navbar.menuItems);
    const loading = useSelector((state) => state.navbar.status);
    const error = useSelector((state) => state.navbar.error);

    const placementsSubMenu = [
        "Placements",
        "Jobs",
        "Career",
    ];

    const navItems = [
        { name: 'Courses', icon: <FiBookOpen />, path: '#courses', hasDropdown: true },
        { name: 'About', icon: <FiUser />, path: '#about' },
        { name: 'Blog', icon: <FiFileText />, path: '#blog' },
        {
            name: 'Placements',
            icon: <FiAward />,
            path: '#placements',
            hasDropdown: true,
            subMenu: placementsSubMenu
        },
        { name: 'Contact', icon: <FiMail />, path: '#contact' },
    ];

    if (loading === 'loading') {
        return <HeaderSkeleton />;
    }

    if (error) {
        return <div className="text-center text-red-500">Error: {error}</div>;
    }

    return (
        <header
            className={`fixed top-0 z-50 transition-all duration-300 px-2 md:px-0 ${scrolled
                ? 'dark:bg-gray-800/90 bg-gray/80 backdrop-blur-xl md:w-[96%] md:mx-8 md:mt-3 mt-0 w-full md:rounded-xl'
                : 'dark:bg-gray-900 bg-white shadow-md backdrop-blur-sm w-full'
                }`}
        >
            <div
                className={`transition-all duration-300 ${scrolled
                    ? 'max-w-screen-xl mx-auto md:px-10 md:rounded-none'
                    : 'w-full md:px-4 rounded-xl'
                    }`}
            >
                <div className="container mx-auto px-4 py-3">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="/" className="flex items-center">
                                <img
                                    src="./logo.webp"
                                    alt="IT Accurate Logo"
                                    className="h-12 w-auto"
                                />
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-1">
                            {navItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative group" // Added group class
                                >
                                    <a
                                        href={item.path}
                                        className="px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 text-gray-700 hover:dark:bg-gray-800 hover:bg-gray-100 transition-colors flex items-center"
                                        onMouseEnter={() => item.hasDropdown && setActiveMainMenu(item.name)}
                                        onMouseLeave={() => item.hasDropdown && setActiveMainMenu(null)}
                                    >
                                        <span className="mr-2">{item.icon}</span>
                                        {item.name}
                                        {item.hasDropdown && (
                                            <span className="ml-1">
                                                {activeMainMenu === item.name ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                                            </span>
                                        )}
                                    </a>

                                    {/* Courses Dropdown */}
                                    {item.hasDropdown && item.name === 'Courses' && (
                                        <div
                                            className={`absolute left-0 lg:left-[-30vh] mt-0 w-[700px] bg-slate-50/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-lg shadow-xl p-4 grid grid-cols-2 gap-2 z-50 
                                                ${activeMainMenu === item.name ? 'block' : 'hidden'}`}
                                            onMouseEnter={() => {
                                                clearTimeout(hoverTimeout);
                                                setActiveMainMenu(item.name);
                                                setIsHoveringSubmenu(true);
                                            }}
                                            onMouseLeave={() => {
                                                const timeout = setTimeout(() => {
                                                    if (!isHoveringSubmenu) {
                                                        setActiveMainMenu(null);
                                                        setActiveSubMenu(null);
                                                    }
                                                }, 300); // 300ms delay
                                                setHoverTimeout(timeout);
                                            }}
                                        >
                                            {menuItems.map((course) => (
                                                <div
                                                    key={course.title}
                                                    className="relative group" // Added group class
                                                    onMouseEnter={() => course.subMenu && setActiveSubMenu(course.title)}
                                                    onMouseLeave={() => setActiveSubMenu(null)}
                                                >
                                                    <a
                                                        href={`#${course.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                        className={`p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors flex items-start ${activeSubMenu === course.title ? 'bg-gray-100 dark:bg-gray-700' : ''}`}
                                                    >
                                                        <span className="text-2xl mr-3">{course.icon}</span>
                                                        <div className="flex-1">
                                                            <h3 className="font-medium dark:text-white text-gray-800">{course.title}</h3>
                                                            <p className="text-sm text-gray-500 dark:text-gray-400">{course.description}</p>
                                                        </div>
                                                        {course.subMenu && (
                                                            <FiArrowRight className="ml-2 text-gray-400" />
                                                        )}
                                                    </a>

                                                    {/* Sub-menu Dropdown */}
                                                    {course.subMenu && (
                                                        <div
                                                            className={`absolute ${course.position === 'left' ? 'right-full mr-2' : 'left-full ml-2'
                                                                } top-0 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 z-50 
    ${activeSubMenu === course.title ? 'block' : 'hidden'} 
    max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800`}
                                                            onMouseEnter={() => {
                                                                clearTimeout(hoverTimeout);
                                                                setIsHoveringSubmenu(true);
                                                            }}
                                                            onMouseLeave={() => {
                                                                setIsHoveringSubmenu(false);
                                                                const timeout = setTimeout(() => {
                                                                    setActiveSubMenu(null);
                                                                }, 200);
                                                                setHoverTimeout(timeout);
                                                            }}
                                                        >
                                                            <h4 className="font-semibold text-gray-800 dark:text-white mb-2 px-2">
                                                                {course.title} Courses
                                                            </h4>
                                                            <ul className="space-y-1">
                                                                {course.subMenu.map((subItem) => (
                                                                    <li key={subItem.title}>
                                                                        <Link
                                                                            to={subItem.link}
                                                                            className="block px-3 py-2 rounded-md text-sm dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100 transition-colors"
                                                                        >
                                                                            {subItem.title}
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    )}

                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Placements Dropdown */}
                                    {item.hasDropdown && item.name === 'Placements' && (
                                        <div
                                            className={`absolute left-0 mt-0 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-2 z-50 
                                                ${activeMainMenu === item.name ? 'block' : 'hidden'}`}
                                            onMouseEnter={() => setActiveMainMenu(item.name)}
                                            onMouseLeave={() => setActiveMainMenu(null)}
                                        >
                                            <ul className="space-y-1">
                                                {item.subMenu.map((subItem) => (
                                                    <li key={subItem}>
                                                        <a
                                                            href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                                            className="block px-3 py-2 rounded-md text-sm dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100 transition-colors"
                                                        >
                                                            {subItem}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {/* Search Bar */}
                            <div className="relative ml-4">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FiSearch className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 dark:bg-gray-700 bg-gray-100 dark:text-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                                    placeholder="Search..."
                                />
                            </div>

                            {/* Dark/Light Mode Toggle */}
                            <button
                                onClick={toggleDarkMode}
                                className="ml-4 p-2 rounded-full dark:text-yellow-300 text-gray-700 hover:dark:bg-gray-800 hover:bg-gray-100 transition-colors"
                                aria-label="Toggle dark mode"
                            >
                                <motion.div
                                    animate={{ rotate: darkMode ? 180 : 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                                </motion.div>
                            </button>
                        </nav>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={toggleDarkMode}
                                className="mr-4 p-2 rounded-full dark:text-yellow-300 text-gray-700 hover:dark:bg-gray-800 hover:bg-gray-100 transition-colors"
                                aria-label="Toggle dark mode"
                            >
                                {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                            </button>

                            <button
                                onClick={() => {
                                    setIsOpen(!isOpen);
                                    if (isOpen) {
                                        setMobileActiveMenu(null);
                                        setMobileActiveSubMenu(null);
                                    }
                                }}
                                className="p-2 rounded-md dark:text-gray-300 text-gray-700 hover:dark:bg-gray-800 hover:bg-gray-100 focus:outline-none transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="md:hidden mt-2 overflow-hidden"
                            >
                                <div className="pt-2 pb-4 space-y-1">
                                    {navItems.map((item) => (
                                        <div key={item.name}>
                                            <button
                                                className={`w-full text-left px-3 py-2 rounded-md text-base font-medium dark:text-gray-300 text-gray-700 hover:dark:bg-gray-800 hover:bg-gray-100 transition-colors flex items-center justify-between ${mobileActiveMenu === item.name ? 'dark:bg-gray-800 bg-gray-100' : ''}`}
                                                onClick={() => {
                                                    if (item.hasDropdown) {
                                                        if (mobileActiveMenu === item.name) {
                                                            setMobileActiveMenu(null);
                                                            setMobileActiveSubMenu(null);
                                                        } else {
                                                            setMobileActiveMenu(item.name);
                                                            setMobileActiveSubMenu(null);
                                                        }
                                                    } else {
                                                        setIsOpen(false);
                                                    }
                                                }}
                                            >
                                                <div className="flex items-center">
                                                    <span className="mr-2">{item.icon}</span>
                                                    {item.name}
                                                </div>
                                                {item.hasDropdown && (
                                                    <span>
                                                        {mobileActiveMenu === item.name ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                                                    </span>
                                                )}
                                            </button>

                                            {/* Mobile Courses Dropdown */}
                                            {item.hasDropdown && mobileActiveMenu === item.name && item.name === 'Courses' && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="ml-6 mt-1 mb-2 space-y-2"
                                                >
                                                    {menuItems.map((course) => (
                                                        <div key={course.title}>
                                                            <button
                                                                className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100 transition-colors flex items-center justify-between ${mobileActiveSubMenu === course.title ? 'dark:bg-gray-700 bg-gray-100' : ''}`}
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    if (course.subMenu) {
                                                                        if (mobileActiveSubMenu === course.title) {
                                                                            setMobileActiveSubMenu(null);
                                                                        } else {
                                                                            setMobileActiveSubMenu(course.title);
                                                                        }
                                                                    } else {
                                                                        setIsOpen(false);
                                                                    }
                                                                }}
                                                            >
                                                                <div className="flex items-center">
                                                                    <span className="mr-2">{course.icon}</span>
                                                                    <div>
                                                                        <div className="font-medium">{course.title}</div>
                                                                        <div className="text-xs text-gray-500 dark:text-gray-400">{course.description}</div>
                                                                    </div>
                                                                </div>
                                                                {course.subMenu && (
                                                                    <FiArrowRight className="ml-2 text-gray-400" />
                                                                )}
                                                            </button>

                                                            {/* Mobile Sub-menu Dropdown */}
                                                            {course.subMenu && mobileActiveSubMenu === course.title && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, height: 0 }}
                                                                    animate={{ opacity: 1, height: 'auto' }}
                                                                    exit={{ opacity: 0, height: 0 }}
                                                                    transition={{ duration: 0.2 }}
                                                                    className="ml-4 mt-1 space-y-1"
                                                                >
                                                                    <h4 className="px-3 py-1 text-sm font-semibold text-gray-800 dark:text-white">{course.title} Courses</h4>
                                                                    {course.subMenu.map((subItem) => (
                                                                        <Link
                                                                            key={subItem.title}
                                                                            to={subItem.link}
                                                                            // href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                                                            className="block px-3 py-2 rounded-md text-sm dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100 transition-colors"
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                setIsOpen(false);
                                                                            }}
                                                                        >
                                                                            {subItem.title}
                                                                        </Link>
                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </motion.div>
                                            )}

                                            {/* Mobile Placements Dropdown */}
                                            {item.hasDropdown && mobileActiveMenu === item.name && item.name === 'Placements' && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="ml-6 mt-1 mb-2 space-y-1"
                                                >
                                                    {item.subMenu.map((subItem) => (
                                                        <a
                                                            key={subItem}
                                                            href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                                            className="block px-3 py-2 rounded-md text-sm dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100 transition-colors"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {subItem}
                                                        </a>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </div>
                                    ))}

                                    {/* Mobile Search */}
                                    <div className="px-3 pt-2 relative">
                                        <div className="absolute inset-y-0 left-5 pl-3 flex items-center pointer-events-none">
                                            <FiSearch className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 dark:bg-gray-700 bg-gray-100 dark:text-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm"
                                            placeholder="Search..."
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
};

export default NavBar;