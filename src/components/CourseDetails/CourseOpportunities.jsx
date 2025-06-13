import coursesData from "../PlacementOpportunites";
import { useModal } from "../context/ModelContext";
import DialogContact from "./DialogContact";

const CourseOpportunities = ({ pageName }) => {
    const course = coursesData[pageName];
    const { openModal } = useModal();

    const handleClick = () => {
        openModal(<DialogContact />);
    };

    if (!course) {
        return <p className="text-center text-gray-600">No data available for this page.</p>;
    }

    return (
        <div className="p-4 md:p-6">
            <h2
                className="text-xl md:text-2xl font-bold text-center text-white"
                style={{ fontFamily: "Poppins, sans-serif" }}
            >
                Career Opportunities in <span>{course.title}</span>
            </h2>

            <p className="mt-3 md:mt-5 text-sm md:text-base text-center text-white">
                {course.description}
            </p>

            <div className="mt-4 md:mt-6 flex flex-col lg:flex-row gap-4">
                {/* Salaries Section */}
                <div className="flex-1 bg-[#E1D9FF] p-4 md:p-6 rounded-lg">
                    <h2 className="text-lg md:text-xl font-semibold text-[#7B1FA2]">
                        Salary Package in {course.title}
                    </h2>
                    <table className="mt-4 w-full text-sm border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 py-2 text-left text-[#7B1FA2] border-b">Job Title</th>
                                <th className="px-2 py-2 text-left text-[#7B1FA2] border-b">Salary Range</th>
                            </tr>
                        </thead>
                        <tbody>
                            {course.salaries.map((salary, index) => (
                                <tr key={index} className="border-b border-gray-300">
                                    <td className="py-2 text-gray-700">{salary.role}</td>
                                    <td className="py-2 text-gray-700">{salary.range}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-4 flex flex-wrap gap-2">
                        <button
                            onClick={handleClick}
                            className="px-4 py-2 bg-[#7B1FA2] text-white rounded-lg hover:bg-purple-800"
                        >
                            <a href="/contact">Contact Us</a>
                        </button>
                        <button
                            onClick={handleClick}
                            className="px-4 py-2 bg-[#7B1FA2] text-white rounded-lg hover:bg-purple-800"
                        >
                            <a href="/placed">Check Placements</a>
                        </button>
                    </div>
                </div>

                {/* Roles Section */}
                <div className="flex-1 bg-[#AE99FB] p-4 md:p-6 rounded-lg">
                    <h2 className="text-lg md:text-xl font-semibold text-[#7B1FA2]">
                        Work Opportunities for {course.title}
                    </h2>
                    <ul className="mt-3 flex flex-wrap gap-5">
                        {course.roles.map((role, index) => (
                            <li key={index} className="inline-block">
                                <a
                                    className="px-3 py-2 bg-[#E1D9FF] text-[#7B1FA2] rounded-md text-sm"
                                    href={role.link}
                                >
                                    {role.title}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <h2 className="mt-6 text-lg md:text-xl font-semibold text-[#7B1FA2]">
                        Popular Jobs on the Rise
                    </h2>
                    <ul className="mt-3 flex flex-wrap gap-5">
                        {course.upcomingRoles.map((role, index) => (
                            <li key={index} className="inline-block">
                                <a
                                    className="px-3 py-2 bg-[#E1D9FF] text-[#7B1FA2] rounded-md text-sm"
                                    href={role.link}
                                >
                                    {role.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CourseOpportunities;
