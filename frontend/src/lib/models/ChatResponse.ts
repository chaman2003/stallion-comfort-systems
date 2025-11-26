import mongoose, { Schema, Document, Model } from "mongoose";

export interface IChatResponse extends Document {
  question: string;
  answer: string;
  createdAt: Date;
  updatedAt: Date;
}

const ChatResponseSchema: Schema<IChatResponse> = new Schema(
  {
    question: {
      type: String,
      required: [true, "Please provide a question"],
      trim: true,
    },
    answer: {
      type: String,
      required: [true, "Please provide an answer"],
    },
  },
  {
    timestamps: true,
  }
);

const ChatResponse: Model<IChatResponse> =
  mongoose.models.ChatResponse ||
  mongoose.model<IChatResponse>("ChatResponse", ChatResponseSchema);

export default ChatResponse;
