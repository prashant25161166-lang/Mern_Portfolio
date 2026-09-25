import mongoose, { Document, Schema } from "mongoose";

export interface IProject extends Document {
  title: string;
  slug: string;
  description: string;
  image?: string;
  technologies: string[];
  features: string[];
  liveDemo?: string;
  github?: string;
  category: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
      trim: true,
    },

    slug: {
      type: String,
      required: [true, "Project slug is required"],
      unique: true,
      trim: true,
      lowercase: true,
    },

    description: {
      type: String,
      required: [true, "Project description is required"],
      trim: true,
    },

    image: {
      type: String,
      default: "",
    },

    technologies: {
      type: [String],
      required: true,
      default: [],
    },

    features: {
      type: [String],
      required: true,
      default: [],
    },

    liveDemo: {
      type: String,
      default: "",
    },

    github: {
      type: String,
      default: "",
    },

    category: {
      type: String,
      default: "Web Development",
      trim: true,
    },

    featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model<IProject>(
  "Project",
  projectSchema
);

export default Project;