export const firstLayerMenu = (email, setter) => {
  fetch(`http://localhost:8080/api/v1/routelisttwo/permission?email=${email}`)
    .then((res) => res.json())
    .then((data) => setter(data?.data));
};

export const getSecondLayerMenu = async (menuId, email, setter) => {
  const url = `http://localhost:8080/api/v1/routelisttwo/secondlayer/?id=${menuId}&email=${email}`;
  const res = await fetch(url);
  const data = await res.json();
  console.log(data, "data");
  if (data?.status) {
    setter(data?.data[0]);
  }
};

export const getAllBranches = (setter, cb) => {
  fetch("http://localhost:8080/api/v1/branch/allbranch")
    .then((res) => res.json())
    .then((data) => {
      setter(data?.data);
      cb && cb();
    });
};
