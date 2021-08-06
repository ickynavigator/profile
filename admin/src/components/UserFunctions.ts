export const UserLogin = (secret: string) => {
  if (process.env.USER_LOGIN === secret) {
    const userDetails = JSON.stringify({ secret });
    localStorage.setItem("secret", userDetails);
  } else {
    return "Wrong Secret";
  }
};

export const UserLogout = () => {
  localStorage.clear();
};

export const UserDetails = () => {
  const user = localStorage.getItem("secret");
  return user === null ? { secret: undefined } : JSON.parse(user);
};

export const UserCheck = () => {
  return UserDetails().secret === process.env.USER_LOGIN ? true : false;
};
