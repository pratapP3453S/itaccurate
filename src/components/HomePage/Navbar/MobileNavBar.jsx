import { motion, AnimatePresence } from 'framer-motion';
import {
    FiSearch,
    FiBookOpen,
    FiUser,
    FiFileText,
    FiAward,
    FiMail,
    FiChevronDown,
    FiChevronUp,
    FiArrowRight
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MobileNavBar = ({ 
    isOpen, 
    setIsOpen, 
    navItems, 
    mobileActiveMenu, 
    setMobileActiveMenu, 
    mobileActiveSubMenu, 
    setMobileActiveSubMenu 
}) => {
    const menuItems = useSelector((state) => state.navbar.menuItems);
    const placementsSubMenu = ["Placements", "Jobs", "Career"];

    return (
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
                                        {placementsSubMenu.map((subItem) => (
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
    );
};

export default MobileNavBar;