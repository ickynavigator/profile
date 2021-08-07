import axios from "axios";

const funcLink = "/.netlify/functions";

// netlify functions
export const readAllMessages = async () => {
  return await axios.get(`${funcLink}/viewAllMessage`);
};
export const readMessage = async (id: string) => {
  return await axios.get(`${funcLink}/viewMessage/${id}`);
};
export const reviewMessage = async (id: string, data: typeMessage) => {
  return await axios.post(`${funcLink}/reviewMessage/${id}`, data);
};
export const userLogin = async (data: any) => {
  return await axios.post(`${funcLink}/UserLogin`, data);
};

//
export const userLogout = () => {
  localStorage.clear();
};
export const userDetails = () => {
  const user = localStorage.getItem("secret");
  return user === null ? { secret: undefined } : JSON.parse(user);
};
export const userCheck = () => {
  return userDetails().secret === process.env.USER_LOGIN ? true : false;
};
