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
export const userLogin = async (foo: { secret: string }) => {
  await axios
    .post(`${funcLink}/UserLogin`, foo)
    .then((res) => {
      if (res.data.value) {
        localStorage.setItem("secret", JSON.stringify(foo));
        return true;
      }
      localStorage.clear();
      return false;
    })
    .catch((err) => {
      if (process.env.NODE_ENV !== "production") console.log(err);
      return false;
    });
};

//
export const userCheck = async () => {
  const user = localStorage.getItem("secret");
  const foo: { secret: string } =
    user === null ? { secret: undefined } : JSON.parse(user);
  if (typeof foo.secret !== undefined && userLogin(foo)) {
    const path = window.location;
    if (path.href.split(`/?redirect=`)[1] && path.pathname !== "/") {
      const redirect_path = path.href.split(`/?redirect=`)[1];
      path.href = `/?redirect=${redirect_path}`;
    }
  }
};
export const userLogout = () => {
  localStorage.clear();
  window.location.href = "/";
  window.location.reload();
};
