import axios from "axios";

const readAllMessages = async () => {
  const req = await axios.get("/.netlify/functions/viewAllMessage");
  return req;
};

const readMessage = async (id) => {
  const req = await axios.get(`/.netlify/functions/ViewMessage/${id}`);
  return req;
};

export { readAllMessages, readMessage };
