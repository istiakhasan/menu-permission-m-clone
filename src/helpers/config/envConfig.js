export const getBaseUrl = () => {
  console.log(process.env.REACT_APP_BASE_URL,"asfdsa");
  return process.env.REACT_APP_BASE_URL || "http://localhost:8080/api/v1";
};
