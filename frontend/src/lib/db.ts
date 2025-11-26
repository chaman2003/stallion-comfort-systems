import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI_STALLION || "mongodb+srv://root:123@stallion.infrtax.mongodb.net/?appName=stallion";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

interface MongooseCache {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
}

let cached: MongooseCache = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    console.log("[MongoDB] Using cached connection");
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    console.log("[MongoDB] Creating new connection...");
    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log("[MongoDB] Connection successful");
      return mongoose;
    });
  }

  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    console.error("[MongoDB] Connection error:", e);
    throw e;
  }

  return cached.conn;
}

export default connectDB;
