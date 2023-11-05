import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDebounced } from "../hooks/useDebounced";
import Refresh from "../assets/refresh.png";
const LandingPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUser] = useState([]);
  const navigate = useNavigate();
  const [rotation, setRotation] = useState(0);

  const handleClick = () => {
    setRotation(rotation + 180);
    setSearchTerm("");
  };
  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });
  useEffect(() => {
    fetch(`http://localhost:8080/api/v1/user?searchTerm=${debouncedTerm}`)
      .then((res) => res.json())
      .then((data) => setUser(data?.data));
  }, [debouncedTerm]);
  return (
    <div className="bg-white h-screen container mx-auto p-10">
      <h1 className="text-green-600 font-bold text-2xl underline">
        All Authentic Users({users.length})
      </h1>
      <div className="flex items-center justify-between">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" border-[1px] border-gray-400 rounded-md  my-3 px-3 py-[5px] min-w-[250px]"
          placeholder="Search user"
          type="text"
        />
        <button
          onClick={handleClick}
          className="flex text-sm text-white bg-green-700 font-semibold  items-center gap-3 border-[1px] rounded-md border-gray-400 px-5 py-2"
        >
          {"Reset "}
          <img
            style={{
              transition: ".5s ease",
              transform: `rotate(${rotation}deg)`,
            }}
            id="img"
            className="h-4 w-4 cursor-pointer"
            src={Refresh}
            alt=""
          />
        </button>
      </div>
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
