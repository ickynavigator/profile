import axios from "axios";

const readAllMessages = async () => {
  return fetch("/.netlify/functions/viewAllMessage").then((response) => {
    return response.json();
  });

  //   const { data } = await axios.get(`/.netlify/functions/viewAllMessage`);
  //   return data;
  // return fetch("/.netlify/functions/viewAllMessage")
  //   .then((res) => {
  //     return res.json();
  //   })
  //   .then((res) => {
  //     return res;
  //   });
};

export { readAllMessages };
