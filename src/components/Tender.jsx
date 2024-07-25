import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";

const Tender = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const tenders = [
    {
      id: 1,
      number: 'HORC/HRIDC/IC-01/2024',
      work: 'Request for Expression of Interest (REoI) for “Appointment of Contract Monitoring Consultant in connection with Contract Package C-4 of HORC Project”.',
      startDate: '20.06.2024',
      endDate: '03.07.2024',
      corrigendum: 'Corrigendum No. 1',
      remarks: ['Tender Notice', 'Terms of Reference'],
      status: 'Open',
    },
    {
      id: 2,
      number: 'HRIDC/HORC/GGN/Kharkhoda/2024/01R',
      work: 'Construction and Erection of Site office at proposed Kharkhoda station yard in connection with Palwal – Sonipat BG double Rail line electrified (HORC) project.',
      startDate: '04.06.2024',
      endDate: '02.07.2024',
      corrigendum: '',
      remarks: ['Tender Notice', 'Tender Document'],
      status: 'Open',
    },
    {
        id: 3,
        number: 'HORC/HRIDC/IC-01/2024',
        work: 'Request for Expression of Interest (REoI) for “Appointment of Contract Monitoring Consultant in connection with Contract Package C-4 of HORC Project”.',
        startDate: '20.06.2024',
        endDate: '03.07.2024',
        corrigendum: 'Corrigendum No. 1',
        remarks: ['Tender Notice', 'Terms of Reference'],
        status: 'Open',
      },
      {
        id: 4,
        number: 'HRIDC/HORC/GGN/Kharkhoda/2024/01R',
        work: 'Construction and Erection of Site office at proposed Kharkhoda station yard in connection with Palwal – Sonipat BG double Rail line electrified (HORC) project.',
        startDate: '04.06.2024',
        endDate: '02.07.2024',
        corrigendum: '',
        remarks: ['Tender Notice', 'Tender Document'],
        status: 'Open',
      },
      {
        id: 5,
        number: 'HORC/HRIDC/IC-01/2024',
        work: 'Request for Expression of Interest (REoI) for “Appointment of Contract Monitoring Consultant in connection with Contract Package C-4 of HORC Project”.',
        startDate: '20.06.2024',
        endDate: '03.07.2024',
        corrigendum: 'Corrigendum No. 1',
        remarks: ['Tender Notice', 'Terms of Reference'],
        status: 'Open',
      },
      {
        id: 6,
        number: 'HRIDC/HORC/GGN/Kharkhoda/2024/01R',
        work: 'Construction and Erection of Site office at proposed Kharkhoda station yard in connection with Palwal – Sonipat BG double Rail line electrified (HORC) project.',
        startDate: '04.06.2024',
        endDate: '02.07.2024',
        corrigendum: '',
        remarks: ['Tender Notice', 'Tender Document'],
        status: 'Open',
      },
  ];

  const filteredTenders = tenders.filter(
    (tender) =>
      tender.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.work.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="Search for tenders"
          className="p-2 border rounded-lg w-[20%]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg flex justify-center">
        <table className="text-sm text-left text-gray-500 dark:text-gray-400 w-[90%]">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">S.No.</th>
              <th scope="col" className="px-6 py-3">Tender Number</th>
              <th scope="col" className="px-6 py-3">Name of Work</th>
              <th scope="col" className="px-6 py-3">Start Date</th>
              <th scope="col" className="px-6 py-3">End Date</th>
              <th scope="col" className="px-6 py-3">Corrigendum</th>
              <th scope="col" className="px-6 py-3">Remarks</th>
              <th scope="col" className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredTenders.map((tender, index) => (
              <tr key={tender.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {tender.number}
                </td>
                <td className="px-6 py-4">{tender.work}</td>
                <td className="px-6 py-4">{tender.startDate}</td>
                <td className="px-6 py-4">{tender.endDate}</td>
                <td className="px-6 py-4">{tender.corrigendum}</td>
                <td className="px-6 py-4">
                  <ul>
                    {tender.remarks.map((remark, idx) => (
                      <li key={idx} className="text-blue-600 hover:underline">
                        {remark}
                      </li>
                    ))}
                  </ul>
                </td>
                <td className="px-6 py-4">{tender.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tender;
