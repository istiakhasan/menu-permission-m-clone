import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const LandingPage = () => {
  const [users, setUser] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:8080/api/v1/user")
      .then((res) => res.json())
      .then((data) => setUser(data?.data));
  }, []);
  return (
    <div className="bg-white h-screen container mx-auto p-10">
      <h1 className="text-green-600 font-bold text-2xl underline">All Authentic Users({users.length})</h1>
      <input
        className=" border-[1px] border-gray-400 rounded-md ml-auto block my-3 px-3 py-[5px] min-w-[250px]"
        placeholder="Search user"
        type="text"
      />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                SL
              </th>
              <th scope="col" className="px-6 py-3">
                User Name
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Email
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {users?.map((item, i) => (
              <tr
                key={i}
                className="border-b border-gray-200 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  {i + 1}
                </th>
                <td className="px-6 py-4">{item?.name}</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  {item?.email}
                </td>
                <td className="px-6 py-4 text-end">
                  <span
                    onClick={() =>
                      navigate("/mainmenu", { state: item?.email })
                    }
                    title="Menu permission"
                    className="bg-green-700 cursor-pointer text-white text-[12px] font-semibold px-5 py-[2px] rounded-[3px]"
                  >
                    Main Route
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LandingPage;
