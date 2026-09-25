import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import rateLimit from "express-rate-limit";

import contactRoutes from "./routes/contact.routes.js";
import projectRoutes from "./routes/project.routes.js";
import githubRoutes from "./routes/github.routes.js";

import {
  notFoundHandler,
} from "./middleware/notFound.middleware.js";

import {
  errorHandler,
} from "./middleware/error.middleware.js";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin:
      process.env.CLIENT_URL ||
      "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(compression());

if (
  process.env.NODE_ENV === "development"
) {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: {
    success: false,
    message:
      "Too many requests. Please try again later.",
  },
});

app.use("/api", limiter);

app.get("/", (_req, res) => {
  res.json({
    success: true,
    message:
      "MERN Portfolio API is running",
  });
});

app.get("/api/health", (_req, res) => {
  res.json({
    success: true,
    message: "Server is healthy",
  });
});

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
*/

app.use(
  "/api/contact",
  contactRoutes
);

app.use(
  "/api/projects",
  projectRoutes
);

app.use(
  "/api/github",
  githubRoutes
);

/*
|--------------------------------------------------------------------------
| Error Handling
|--------------------------------------------------------------------------
*/

app.use(notFoundHandler);

app.use(errorHandler);

export default app;