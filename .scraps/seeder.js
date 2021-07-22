import dotenv from "dotenv";
import colors from "colors";

import { connectMONGO, MessageSchema } from "./db.js";
dotenv.config();

await connectMONGO();

const importData = async () => {
  try {
    await MessageSchema.deleteMany();

    console.log(`Data Imported!`.green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await MessageSchema.deleteMany();

    console.log(`Data Destroyed!`.red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  //   importData();
  destroyData();
}
