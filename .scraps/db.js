import colors from "colors";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const MessageSchema = mongoose.model(
  "Message",
  new mongoose.Schema(
    {
      Name: { type: String, required: true },
      Email: { type: Number, required: true },
      Message: { type: String, required: true },
      Reviewed: { type: Boolean, required: true },
      Created: { type: Date, required: true },
    },
    { timestamps: true }
  )
);

const connectMONGO = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`\nMongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (err) {
    console.error(`\nError: ${err.message}`.red.underline.bold);
    process.exit(1);
  }
};

export { connectMONGO, MessageSchema };
