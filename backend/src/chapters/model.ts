import { Schema, model } from "mongoose";

export interface Chapter {
  title: string;
  chapterNumber: number;
  sourceUrl?: string;
  sourceType: "url" | "upload";

  detectedLanguage?: string;
  detectionConfidence?: number;

  status:
    | "pending"
    | "downloading"
    | "ocr_processing"
    | "language_detecting"
    | "translating"
    | "rendering"
    | "completed"
    | "failed";
}

const chapterSchema = new Schema<Chapter>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    chapterNumber: {
      type: Number,
      required: true,
    },

    sourceUrl: {
      type: String,
      trim: true,
    },

    sourceType: {
      type: String,
      enum: ["url", "upload"],
      required: true,
    },

    detectedLanguage: {
      type: String,
      trim: true,
    },

    detectionConfidence: {
      type: Number,
      min: 0,
      max: 1,
    },

    status: {
      type: String,
      enum: [
        "pending",
        "downloading",
        "ocr_processing",
        "language_detecting",
        "translating",
        "rendering",
        "completed",
        "failed",
      ],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

export const ChapterModel = model<Chapter>("Chapter", chapterSchema);
