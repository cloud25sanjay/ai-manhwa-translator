import mongoose from "mongoose";
import { env } from "../config/env.js";

export const connectDatabase = async (): Promise<void> => {
  await mongoose.connect(env.mongodbUri);

  console.log("MongoDb Connected");
};
