import { Router } from "express";

import {
  getProjects,
  getFeaturedProjects,
  getProjectBySlug,
  createProject,
} from "../controllers/project.controller.js";

const router = Router();

router.get("/", getProjects);

router.get(
  "/featured",
  getFeaturedProjects
);

router.get(
  "/:slug",
  getProjectBySlug
);

router.post("/", createProject);

export default router;