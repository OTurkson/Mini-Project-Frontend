import { useState } from "react";
import { SideNav } from "../components/SideNavBar"; // Custom styles for better alignment.
import { Button } from "rsuite";

interface User {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  postcode: string;
  email: string;
}

const mockUsers = (num: number): User[] => {
  const users: User[] = [];
  for (let i = 1; i <= num; i++) {
    users.push({
      id: i,
      firstName: `FirstName${i}`,
      lastName: `LastName${i}`,
      gender: i % 2 === 0 ? "Male" : "Female",
      age: Math.floor(Math.random() * 60) + 18,
      postcode: `100${i}`,
      email: `user${i}@example.com`,
    });
  }
  return users;
};

const data = mockUsers(20);

export const Patients = () => {
  const [selectedRow, setSelectedRow] = useState<User | null>(null);

  const handleRowClick = (rowData: User) => {
    setSelectedRow(rowData);
    console.log(rowData);
  };

  return (
    <div className="flex">
      <div className="justify-center items-center">
        <SideNav />
        <Button appearance="primary" className="mt-5 ml-10" size="lg">
          Add Patient
        </Button>
      </div>

      <div className="flex-1 p-6">
        <div className="bg-white shadow-lg rounded-lg border border-gray-200">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-2xl font-semibold text-center">Patients</h1>
          </div>
          <div className="p-4">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Id
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    First Name
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Name
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Gender
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Age
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Postcode
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((row) => (
                  <tr
                    key={row.id}
                    className="hover:bg-gray-50 cursor-pointer"
                    onClick={() => handleRowClick(row)}
                  >
                    <td className="px-4 py-2 text-sm text-gray-900">
                      {row.id}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      {row.firstName}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      {row.lastName}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      {row.gender}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      {row.age}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      {row.postcode}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      {row.email}
                    </td>
                    <td className="px-4 py-2 text-sm text-gray-900">
                      <button
                        className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent row click event
                          alert(`Editing patient with id: ${row.id}`);
                        }}
                      >
                        View Records
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Patients;
