import express from "express";
import cors from "cors";
import helmet from "helmet";

import loanRoutes from "./routes/loanRoutes.js";
import lenderRoutes from "./routes/lenderRoutes.js";
import applicationRoutes from "./routes/applicationRoutes.js";
import { errorHandler } from "./middleware/error.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api/loans", loanRoutes);
app.use("/api/lenders", lenderRoutes);
app.use("/api/applications", applicationRoutes);

app.use(errorHandler);

export default app;