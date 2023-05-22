import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const SecondLayerMenuTable = ({ menuId }) => {
  const [subMenuList, seSubMenuList] = useState([]);
  const location = useLocation();
  useEffect(() => {
    const url = `http://localhost:8080/api/v1/routelisttwo/secondlayer/?id=${menuId}&email=${location.state}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => seSubMenuList(data?.data[0]));
  }, [location?.state, menuId]);

  const userWiseSecondMenuPermission = (id) => {
    const url = `http://localhost:8080/api/v1/routelisttwo/secondlayer/permission/?id=${menuId}&email=${location.state}&secondLayerId=${id}`;
    console.log(url);
    fetch(url, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => console.log(data, "data"));
  };
  console.log(subMenuList, "location");
  return (
    <div className="bg-white container mx-auto">
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
                Menu Title
              </th>
              <th scope="col" className="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                Email
              </th>

              <th scope="col" className="px-6 py-3 text-center">
                Action
              </th>

            </tr>
          </thead>
          <tbody>
            {subMenuList?.children?.map((item, i) => (
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
                <td className="px-6 py-4">{item?.title}</td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                  {location.state}
                </td>
                <td className="px-6 py-4 text-center">
                  {item?.isActive ? (
                    <span className="bg-green-700 cursor-pointer text-white text-[12px] font-semibold px-5 py-[2px] rounded-[3px]">
                      Active
                    </span>
                  ) : (
                    <span
                      onClick={() => userWiseSecondMenuPermission(item?.id)}
                      className="bg-gray-700 cursor-pointer text-white text-[12px] font-semibold px-5 py-[2px] rounded-[3px]"
                    >
                      Not Active
                    </span>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SecondLayerMenuTable;
