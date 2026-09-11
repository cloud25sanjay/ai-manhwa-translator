import { Schema, model, Types } from "mongoose";

export interface Translation {
  chapterId: Types.ObjectId;
  targetLanguage: string;
  status: "pending" | "translating" | "rendering" | "completed" | "failed";
}

const translationSchema = new Schema<Translation>(
  {
    chapterId: {
      type: Schema.Types.ObjectId,
      ref: "Chapter",
      required: true,
    },

    targetLanguage: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["pending", "translating", "rendering", "completed", "failed"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

translationSchema.index({ chapterId: 1, targetLanguage: 1 }, { unique: true });

export const TranslationModel = model<Translation>(
  "Translation",
  translationSchema,
);
