import { getBaseUrl } from "../../helpers/config/envConfig";
export const firstLayerMenu = (email, setter) => {
  fetch(`${getBaseUrl()}/routelisttwo/permission?email=${email}`)
    .then((res) => res.json())
    .then((data) => setter(data?.data));
};

export const getSecondLayerMenu = async (menuId, email, setter) => {
  const url = `${getBaseUrl()}/routelisttwo/secondlayer/?id=${menuId}&email=${email}`;
  const res = await fetch(url);
  const data = await res.json();
  if (data?.status) {
    setter(data?.data[0]);
  }
};

export const getAllBranches = (setter, cb) => {
  fetch(`${getBaseUrl()}/branch/allbranch`)
    .then((res) => res.json())
    .then((data) => {
      setter(data?.data);
      cb && cb();
    });
};
