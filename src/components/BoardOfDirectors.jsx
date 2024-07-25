import React, { useState } from 'react';

const BoardOfDirectors = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const directors = [
    {
      id: 1,
      role: 'CHAIRPERSON',
      name: 'Sh. T.V.S.N. Prasad, IAS',
      designation: 'Chief Secretary, Govt. of Haryana',
      image: '/path/to/image1.jpg',
    },
    {
      id: 2,
      role: 'MANAGING DIRECTOR',
      name: 'Sh. Rajesh Agarwal, IRSE',
      designation: 'Managing Director, HRIDC',
      image: '/path/to/image2.jpg',
    },
    {
      id: 3,
      role: 'DIRECTOR',
      name: 'Sh. Anurag Rastogi, IAS',
      designation: 'ACS PWD(B&R) & Finance, Govt. of Haryana',
      image: '/path/to/image3.jpg',
    },
    {
      id: 4,
      role: 'DIRECTOR',
      name: 'Sh. V. Umashankar, IAS',
      designation: 'PSCM, Govt. of Haryana',
      image: '/path/to/image4.jpg',
    },
  ];

  const filteredDirectors = directors.filter(
    (director) =>
      director.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      director.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      director.designation.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="Search for board members"
          className="p-2 border rounded-lg w-[20%]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg flex justify-center mb-10">
        <table className="text-sm text-left text-gray-500 dark:text-gray-400 w-[90%]">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Board Members</th>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Designation</th>
              <th scope="col" className="px-6 py-3">Image</th>
            </tr>
          </thead>
          <tbody>
            {filteredDirectors.map((director, index) => (
              <tr key={director.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">{director.role}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {director.name}
                </td>
                <td className="px-6 py-4">{director.designation}</td>
                <td className="px-6 py-4">
                  <img className="w-10 h-10 rounded-full" src={director.image} alt={`${director.name}`} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BoardOfDirectors;
