import { connectMONGO, MessageSchema } from "./db";
import mt from "../src/myTypes";
// import "encoding";

connectMONGO();

exports.handler = async (event, context) => {
  try {
    const data: mt.typeMessage = JSON.parse(event.body);
    const product = new MessageSchema(data);

    // const { Name, Email, Message, Reviewed, Created } = data;
    // const product = new MessageSchema({
    //   Name,
    //   Email,
    //   Message,
    //   Reviewed,
    //   Created,
    // });

    const res = await product.save();
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
