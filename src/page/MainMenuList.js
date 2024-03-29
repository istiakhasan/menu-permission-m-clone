import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SecondLayerMenuModal from "./SecondLayerMenuModal";
import SecondLayerMenuTable from "./SecondLayerMenuTable";
import { firstLayerMenu } from "./api/action";
import { getBaseUrl } from "../helpers/config/envConfig";

const MainMenuList = () => {
  const [menuList, setMenuList] = useState([]);
  const location = useLocation();
  const [menuId, setMenuId] = useState("");

  const getMenu = () => {
    firstLayerMenu(location.state, setMenuList);
  };
  useEffect(() => {
    getMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location?.state]);

  const userWiseFirstMenuPermission = (id) => {
    const url = `${getBaseUrl()}/routelisttwo/permission/${id}?email=${location.state}`;
    fetch(url, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        getMenu();
      });
  };
  const userWiseRemoveMenuPermission = (id) => {
    const url = `${getBaseUrl()}/routelisttwo/remove-first-layer/permission/${id}?email=${location.state}`;
    fetch(url, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        getMenu();
      });
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white h-screen container mx-auto ">
      <h1 className="text-green-600 font-bold text-2xl underline">
        First Layer Menu({menuList.length})
      </h1>
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
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Sub Menu Permission
              </th>
            </tr>
          </thead>
          <tbody>
            {menuList?.map((item, i) => (
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
                    <span onClick={() => userWiseRemoveMenuPermission(item?._id)} className="bg-green-700 cursor-pointer text-white text-[12px] font-semibold px-5 py-[2px] rounded-[3px]">
                      Active
                    </span>
                  ) : (
                    <span
                      onClick={() => userWiseFirstMenuPermission(item?._id)}
                      className="bg-gray-700 cursor-pointer text-white text-[12px] font-semibold px-5 py-[2px] rounded-[3px]"
                    >
                      Not Active
                    </span>
                  )}
                </td>
                <td className="px-6 py-4 bg-gray-50 dark:bg-gray-800 text-center">
                  {item?.isActive ? (
                    <span
                      onClick={() => {
                        setIsOpen(true);
                        setMenuId(item?._id);
                      }}
                      className="bg-green-700 cursor-pointer text-white text-[12px] font-semibold px-5 py-[2px] rounded-[3px]"
                    >
                      Sub menu Permission
                    </span>
                  ) : (
                    "--"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <SecondLayerMenuModal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <SecondLayerMenuTable menuId={menuId} />
      </SecondLayerMenuModal>
    </div>
  );
};

export default MainMenuList;
