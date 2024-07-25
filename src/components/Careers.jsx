import React, { useState } from 'react';
import { IoIosDocument } from "react-icons/io";
import { VscGitStashApply } from "react-icons/vsc";

const jobData = [
    {
        id: 1,
        title: 'Executive/General',
        location: 'Anywhere in the State of Haryana',
        posts: 2,
        issueDate: '28.06.2024',
        closingDate: '31.07.2024',
        status: 'Open'
    },
    {
        id: 2,
        title: 'Executive (Finance)',
        location: 'Anywhere in the State of Haryana',
        posts: 2,
        issueDate: '28.06.2024',
        closingDate: '31.07.2024',
        status: 'Open'
    },
    {
        id: 3,
        title: 'Assistant Manager (Finance)',
        location: 'Gurugram',
        posts: 1,
        issueDate: '28.06.2024',
        closingDate: '31.07.2024',
        status: 'Open'
    }
];

const Careers = () => {
    const [filters, setFilters] = useState({
        profile: '',
        location: '',
        workFromHome: false,
        partTime: false,
        stipend: 0
    });

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;
        setFilters({
            ...filters,
            [id]: type === 'checkbox' ? checked : value
        });
    };

    const clearFilters = () => {
        setFilters({
            profile: '',
            location: '',
            workFromHome: false,
            partTime: false,
            stipend: 0
        });
    };

    const filteredJobs = jobData.filter(job => {
        return (
            (!filters.profile || job.title.toLowerCase().includes(filters.profile.toLowerCase())) &&
            (!filters.location || job.location.toLowerCase().includes(filters.location.toLowerCase())) &&
            (filters.workFromHome ? job.location.toLowerCase().includes('home') : true) &&
            (filters.partTime ? job.location.toLowerCase().includes('hybrid') : true) &&
            (filters.stipend === 0 || job.posts <= filters.stipend)
        );
    });

    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="md:w-1/4 p-4">
                    <h2 className="text-xl font-bold mb-4">Filters</h2>
                    <div className="mb-4">
                        <label htmlFor="profile" className="block text-sm font-medium text-gray-700">Profile</label>
                        <input
                            type="text"
                            id="profile"
                            value={filters.profile}
                            onChange={handleInputChange}
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                        <input
                            type="text"
                            id="location"
                            value={filters.location}
                            onChange={handleInputChange}
                            className="mt-1 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="checkbox"
                            id="workFromHome"
                            checked={filters.workFromHome}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        <label htmlFor="workFromHome" className="text-sm font-medium text-gray-700">On-site</label>
                    </div>
                    <div className="mb-4">
                        <input
                            type="checkbox"
                            id="partTime"
                            checked={filters.partTime}
                            onChange={handleInputChange}
                            className="mr-2"
                        />
                        <label htmlFor="partTime" className="text-sm font-medium text-gray-700">Hybrid</label>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="stipend" className="block text-sm font-medium text-gray-700">Desired salary (₹)</label>
                        <input
                            type="range"
                            id="stipend"
                            min="0"
                            max="10000"
                            step="1000"
                            value={filters.stipend}
                            onChange={handleInputChange}
                            className="w-full"
                        />
                        <span className="block text-sm font-medium text-gray-700">₹{filters.stipend}</span>
                    </div>
                    <button onClick={clearFilters} className="w-full bg-blue-500 text-white py-2 rounded-md">Clear all</button>
                </div>
                <div className="md:w-3/4 p-4">
                    {filteredJobs.map(job => (
                        <div key={job.id} className="mb-4 pl-4 py-4 bg-white shadow-md rounded-md flex flex-row justify-between">
                            <div className='flex flex-col'>
                                <h3 className="text-lg font-bold">{job.title}</h3>
                                <p className="text-sm text-gray-700">{job.location}</p>
                                <p className="text-sm text-gray-700 font-semibold">Number of Posts: {job.posts}</p>
                                <p className="text-sm text-gray-700 font-semibold">Issue Date: {job.issueDate}</p>
                                <p className="text-sm text-gray-700 font-semibold">Closing Date: {job.closingDate}</p>
                                <p className="text-sm text-green-700 font-semibold">{job.status}</p>
                            </div>
                            <div className='flex flex-col justify-center'>
                                <div className=' hover:bg-blue-300 duration-300 border-[1px] w-fit h-fit p-6'>
                                    <IoIosDocument className='text-[1rem]'/>
                                </div>
                                <div className=' hover:bg-blue-300 duration-300 border-[1px] w-fit h-fit p-6'>
                                    <VscGitStashApply className='text-[1rem]'/>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Careers;
