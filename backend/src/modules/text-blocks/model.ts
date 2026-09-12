import { Schema, model, Types } from "mongoose";

interface Point {
  x: number;
  y: number;
}

interface Region {
  points: Point[];
}

export interface TextBlock {
  pageId: Types.ObjectId;

  sourceText: string;
  language: string;
  confidence: number;

  region: Region;
}

const pointSchema = new Schema<Point>(
  {
    x: {
      type: Number,
      required: true,
      min: 0,
      max: 1,
    },

    y: {
      type: Number,
      required: true,
      min: 0,
      max: 1,
    },
  },
  {
    _id: false,
  },
);

const textBlockSchema = new Schema<TextBlock>(
  {
    pageId: {
      type: Schema.Types.ObjectId,
      ref: "Page",
      required: true,
    },

    sourceText: {
      type: String,
      required: true,
      trim: true,
    },

    language: {
      type: String,
      required: true,
      trim: true,
    },

    confidence: {
      type: Number,
      required: true,
      min: 0,
      max: 1,
    },

    region: {
      points: {
        type: [pointSchema],
        required: true,
      },
    },
  },
  {
    timestamps: true,
  },
);

export const TextBlockModel = model<TextBlock>("TextBlock", textBlockSchema);
