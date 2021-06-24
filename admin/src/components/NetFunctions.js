import axios from "axios";

const readAllMessages = async () => {
  const req = await axios.get("/.netlify/functions/viewAllMessage");
  return req;
};

const readMessage = async (id) => {
  const req = await axios.get(`/.netlify/functions/viewMessage/${id}`);
  return req;
};

const reviewMessage = async (id, data) => {
  const req = await axios.post(`/.netlify/functions/reviewMessage/${id}`, data);
  return req;
};

export { readAllMessages, readMessage, reviewMessage };
