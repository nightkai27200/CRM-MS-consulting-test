import express from "express";
import cors from "cors";

import clientRoutes from "./routes/clients.js";


const app = express();


const corsOptions = {
  origin: "http://localhost:5173",
  methods: [
    "GET",
    "POST",
    "PUT",
    "DELETE",
    "OPTIONS"
  ],
  allowedHeaders: [
    "Content-Type",
    "Authorization"
  ]
};


app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://housing-currencies-vincent-amazing.trycloudflare.com"
  ],
  credentials: true
}));

app.use(cors(corsOptions));


// répondre aux requêtes OPTIONS
app.options("/api/clients", cors(corsOptions));


app.use(express.json());


app.get("/", (req, res) => {

  res.json({
    message:"MS Consulting CRM API"
  });

});


app.use(
  "/api/clients",
  clientRoutes
);

export default app;