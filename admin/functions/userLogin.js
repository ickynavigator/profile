import dotenv from "dotenv";
import "encoding";

dotenv.config();

exports.handler = async (event) => {
  const { secret } = JSON.parse(event.body);
  try {
    const res = { value: process.env.USER_LOGIN === secret ? true : false };
    return {
      statusCode: 200,
      body: JSON.stringify(res),
    };
  } catch (err) {
    return {
      statusCode: 400,
      body: JSON.stringify(err),
    };
  }
};
