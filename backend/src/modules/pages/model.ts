import { Schema, model, Types } from "mongoose";

export interface Page {
  chapterId: Types.ObjectId;
  pageNumber: number;
  imagePath: string;

  status: "pending" | "processing" | "completed" | "failed";
}

const pageSchema = new Schema<Page>(
  {
    chapterId: {
      type: Schema.Types.ObjectId,
      ref: "Chapter",
      required: true,
    },

    pageNumber: {
      type: Number,
      required: true,
      min: 1,
    },

    imagePath: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["pending", "processing", "completed", "failed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

pageSchema.index({ chapterId: 1, pageNumber: 1 }, { unique: true });

export const PageModel = model<Page>("Page", pageSchema);
