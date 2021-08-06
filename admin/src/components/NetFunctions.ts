import axios from "axios";

const funcLink = "/.netlify/functions";

export const readAllMessages = async () => {
  return await axios.get(`${funcLink}/viewAllMessage`);
};
export const readMessage = async (id: string) => {
  return await axios.get(`${funcLink}/viewMessage/${id}`);
};
export const reviewMessage = async (id: string, data: typeMessage) => {
  return await axios.post(`${funcLink}/reviewMessage/${id}`, data);
};

export const checkPassword = async (data: typeUser) => {
  return await axios.post(`${funcLink}/checkPassword`, data);
};
