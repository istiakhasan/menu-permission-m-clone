import React, { useEffect, useState } from "react";
import { getAllBranches } from "../api/action";

const BusinessUnitList = () => {
  const [branchs, setBranches] = useState([]);
  useEffect(() => {
    getAllBranches(setBranches, () => {
      console.log("fetch successfully");
    });
  }, []);
  return (
    <div className="bg-white h-screen container mx-auto p-10">
      <div className="flex justify-between items-center">
        <h1 className="text-green-600 font-bold text-2xl underline">
          Business Unit List({branchs?.length})
        </h1>

        <button className="bg-green-800  text-white font-semibold text-[12px] px-4 py-1 rounded-[3px] uppercase">
          + Create Branch
        </button>
      </div>
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
                Email
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Branch Name
              </th>

              <th scope="col" className="px-6 py-3 text-center">
                Branch Code
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {branchs?.map((branch, i) => (
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
                <td className="px-6 py-4 ">{branch?.accountOwnerEmail}</td>
                <td className="px-6 py-4">{branch?.label}</td>
                <td className="px-6 py-4 text-center bg-gray-50 dark:bg-gray-800">
                  {branch?.value}
                </td>
                <td className="text-center">
                  <span
                    title="under construction "
                    className="bg-red-500 text-white text-[12px] font-semibold cursor-pointer px-3 rounded-[4px] py-[2px]"
                  >
                    Delete
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

export default BusinessUnitList;
