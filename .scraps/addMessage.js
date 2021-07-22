import { connectMONGO, MessageSchema } from "./db";
// import "encoding";

exports.handler = async (event) => {
  await connectMONGO();
  try {
    const data = JSON.parse(event.body);
    const product = new MessageSchema(data);
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

// const { Name, Email, Message, Reviewed, Created } = data;
// const product = new MessageSchema({
//   Name,
//   Email,
//   Message,
//   Reviewed,
//   Created,
// });
