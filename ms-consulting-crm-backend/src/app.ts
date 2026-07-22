import express from "express";
import cors from "cors";
import helmet from "helmet";

import clientRoutes from "./routes/clients.js";
import authRoutes from "./routes/auth.routes.js";

const app = express();


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://mscrm-frontend-test.vercel.app"
  ],
  credentials: true
}));


app.use(express.json());

app.use(helmet());


app.get("/", (req, res) => {
  res.json({
    message: "MS Consulting CRM API"
  });
});


app.use("/api/clients", clientRoutes);

app.use("/api/auth", authRoutes);


export default app;