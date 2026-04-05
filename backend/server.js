import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from the frontend during development.
app.use(cors());

// Parse incoming JSON request bodies.
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Contact form backend is running.");
});

app.use("/api/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
