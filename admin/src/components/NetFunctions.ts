import axios from "axios";

const funcLink = "/.netlify/functions";

// netlify functions
export const readAllMessages = async () => {
  return await axios.get(`${funcLink}/viewAllMessage`);
};
export const readMessage = async (id: string) => {
  return await axios.get(`${funcLink}/viewMessage/${id}`);
};
export const reviewMessage = async (
  id: string,
  data: { Reviewed: boolean }
) => {
  return await axios.post(`${funcLink}/reviewMessage/${id}`, data);
};
export const userLogin = async (foo: {
  secret: string | undefined;
}): Promise<boolean> => {
  if (foo.secret === undefined) return false;

  return await axios
    .post(`${funcLink}/UserLogin`, foo)
    .then((res) => {
      if (res.data.value) {
        localStorage.setItem("secret", JSON.stringify(foo));
        return true;
      } else {
        localStorage.clear();
        return false;
      }
    })
    .catch((err) => {
      if (process.env.NODE_ENV !== "production") console.log(err);
      return false;
    });
};

//
export const userCheck = async () => {
  const path = window.location;
  const user = localStorage.getItem("secret");
  const foo: { secret: string } =
    user === null ? { secret: undefined } : JSON.parse(user);

  if (await userLogin(foo)) {
    if (path.pathname === `/`) {
      path.pathname = `/message`;
      return;
    }
  } else {
    // const currentPath = path.pathname;
    // if (path.pathname !== `/`) path.href = `/?redirect=${currentPath}`;
    return;
  }
};
export const userLogout = () => {
  localStorage.clear();
  window.location.pathname = "/";
};
