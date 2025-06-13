import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
import { HeaderSkeleton } from '../../ui/SkeletonEffects/HeaderSkeleton';
import { Link } from 'react-router-dom';
import MobileNavBar from './MobileNavBar';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeMainMenu, setActiveMainMenu] = useState(null);
    const [activeSubMenu, setActiveSubMenu] = useState(null);
    const [mobileActiveMenu, setMobileActiveMenu] = useState(null);
    const [mobileActiveSubMenu, setMobileActiveSubMenu] = useState(null);
    const [isHoveringSubmenu, setIsHoveringSubmenu] = useState(false);
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubMenuEnter = (courseTitle) => {
        clearTimeout(hoverTimeout);
        setActiveSubMenu(courseTitle);
        setIsHoveringSubmenu(true);
    };

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

    useEffect(() => {
        const handleClickOutside = () => {
            setActiveMainMenu(null);
            setActiveSubMenu(null);
            setIsHoveringDropdown(false);
            setIsHoveringSubmenu(false);
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const handleMainMenuEnter = (menuName) => {
        clearTimeout(hoverTimeout);
        setActiveMainMenu(menuName);
    };

    const handleMainMenuLeave = () => {
        // Start timeout when leaving main menu item
        const timeout = setTimeout(() => {
            if (!isHoveringSubmenu) {
                setActiveMainMenu(null);
                setActiveSubMenu(null);
            }
        }, 200);
        setHoverTimeout(timeout);
    };

    const handleDropdownEnter = () => {
        clearTimeout(hoverTimeout);
        setIsHoveringDropdown(true);
    };

    const handleDropdownLeave = () => {
        const timeout = setTimeout(() => {
            if (!isHoveringSubmenu) {
                setActiveMainMenu(null);
                setActiveSubMenu(null);
            }
            setIsHoveringDropdown(false);
        }, 200);
        setHoverTimeout(timeout);
    };


    const handleSubMenuLeave = () => {
        setIsHoveringSubmenu(false);
        // Don't close immediately - let parent handle it
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
                            <Link to="/" className="flex items-center">
                                <img
                                    src="./logo.webp"
                                    alt="IT Accurate Logo"
                                    className="h-12 w-auto"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-1 relative z-50">
                            {navItems.map((item) => (
                                <div
                                    key={item.name}
                                    className="relative group"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <a
                                        href={item.path}
                                        className="px-3 py-2 rounded-md text-sm font-medium dark:text-gray-300 text-gray-700 hover:dark:bg-gray-800 hover:bg-gray-100 transition-colors duration-200 flex items-center"
                                        onMouseEnter={() => item.hasDropdown && handleMainMenuEnter(item.name)}
                                        onMouseLeave={() => item.hasDropdown && handleMainMenuLeave()}
                                    >
                                        <span className="mr-2">{item.icon}</span>
                                        {item.name}
                                        {item.hasDropdown && (
                                            <span className="ml-1">
                                                {activeMainMenu === item.name ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
                                            </span>
                                        )}
                                    </a>

                                    {/* Dropdown Container */}
                                    {item.hasDropdown && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{
                                                opacity: activeMainMenu === item.name ? 1 : 0,
                                                y: activeMainMenu === item.name ? 0 : 10,
                                                visibility: activeMainMenu === item.name ? 'visible' : 'hidden'
                                            }}
                                            transition={{ duration: 0.2, ease: 'easeOut' }}
                                            className={`absolute left-0 mt-1 ${item.name === 'Courses'
                                                ? 'lg:left-[-30vh] w-[700px] p-4 grid grid-cols-2 gap-2'
                                                : 'w-56 p-2'
                                                } bg-slate-50/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-lg shadow-xl z-50 border border-gray-200/50 dark:border-gray-700/50`}
                                            onMouseEnter={handleDropdownEnter}
                                            onMouseLeave={handleDropdownLeave}
                                        >
                                            {/* Courses Dropdown */}
                                            {item.name === 'Courses' && (
                                                <>
                                                    {menuItems.map((course) => (
                                                        <div
                                                            key={course.title}
                                                            className="relative group"
                                                            onMouseEnter={() => course.subMenu && handleSubMenuEnter(course.title)}
                                                            onMouseLeave={handleSubMenuLeave}
                                                        >
                                                            <a
                                                                href={`#${course.title.toLowerCase().replace(/\s+/g, '-')}`}
                                                                className={`p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-start ${activeSubMenu === course.title ? 'bg-gray-100 dark:bg-gray-700' : ''
                                                                    }`}
                                                            >
                                                                <span className="text-2xl mr-3 text-purple-600 dark:text-purple-400">{course.icon}</span>
                                                                <div className="flex-1">
                                                                    <h3 className="font-medium dark:text-white text-gray-800">{course.title}</h3>
                                                                    <p className="text-sm text-gray-500 dark:text-gray-400">{course.description}</p>
                                                                </div>
                                                                {course.subMenu && (
                                                                    <FiArrowRight className="ml-2 text-gray-400 self-center" />
                                                                )}
                                                            </a>

                                                            {/* Sub-menu Dropdown */}
                                                            {course.subMenu && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, x: course.position === 'left' ? 10 : -10 }}
                                                                    animate={{
                                                                        opacity: activeSubMenu === course.title ? 1 : 0,
                                                                        x: activeSubMenu === course.title ? 0 : (course.position === 'left' ? 10 : -10),
                                                                        visibility: activeSubMenu === course.title ? 'visible' : 'hidden'
                                                                    }}
                                                                    transition={{ duration: 0.2, ease: 'easeOut' }}
                                                                    className={`absolute ${course.position === 'left' ? 'right-full mr-2' : 'left-full ml-2'
                                                                        } top-0 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-3 z-50 border border-gray-200/50 dark:border-gray-700/50 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800`}
                                                                    onMouseEnter={() => setIsHoveringSubmenu(true)}
                                                                    onMouseLeave={handleSubMenuLeave}
                                                                >
                                                                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2 px-2">
                                                                        {course.title} Courses
                                                                    </h4>
                                                                    <ul className="space-y-1">
                                                                        {course.subMenu.map((subItem) => (
                                                                            <li key={subItem.title}>
                                                                                <Link
                                                                                    to={subItem.link}
                                                                                    className="block px-3 py-2 rounded-md text-sm dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                                                                >
                                                                                    {subItem.title}
                                                                                </Link>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </motion.div>
                                                            )}
                                                        </div>
                                                    ))}
                                                </>
                                            )}

                                            {/* Placements Dropdown */}
                                            {item.name === 'Placements' && (
                                                <ul className="space-y-1">
                                                    {item.subMenu.map((subItem) => (
                                                        <li key={subItem}>
                                                            <a
                                                                href={`#${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                                                                className="block px-3 py-2 rounded-md text-sm dark:text-gray-300 text-gray-700 hover:dark:bg-gray-700 hover:bg-gray-100 transition-colors duration-200"
                                                            >
                                                                {subItem}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </motion.div>
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
                                    className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 dark:bg-gray-700 bg-gray-100 dark:text-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm transition-all duration-200"
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
 
                                />
                            </div>

                            {/* Dark/Light Mode Toggle */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    toggleDarkMode();
                                }}
                                className="ml-4 p-2 rounded-full dark:text-yellow-300 text-gray-700 hover:dark:bg-gray-800 hover:bg-gray-100 transition-colors duration-200"
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

                    {/* Mobile Navigation - Now using the separate component */}
                    <MobileNavBar
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        navItems={navItems}
                        mobileActiveMenu={mobileActiveMenu}
                        setMobileActiveMenu={setMobileActiveMenu}
                        mobileActiveSubMenu={mobileActiveSubMenu}
                        setMobileActiveSubMenu={setMobileActiveSubMenu}
                    />
                </div>
            </div>
        </header>
    );
};

export default NavBar;