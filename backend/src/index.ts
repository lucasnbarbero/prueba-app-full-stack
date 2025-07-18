import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.json({ message: "API is working!" });
});

app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Doe", email: "jane.doe@example.com" },
    { id: 3, name: "Alice Smith", email: "alice.smith@example.com" },
    { id: 4, name: "Bob Johnson", email: "bob.johnson@example.com" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
