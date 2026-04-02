import express from "express";
import cors from "cors";

const app = express();

// ===== MIDDLEWARE =====
app.use(cors({ origin: "*" }));
app.use(express.json());

// ===== ROUTES =====
app.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

app.get("/matches", (req, res) => {
  res.json([
    { team1: "Team A", team2: "Team B", score: "2 - 1" }
  ]);
});

app.get("/chat", (req, res) => {
  res.json([
    { user: "Ahmed", message: "Hello" }
  ]);
});

// ===== 404 =====
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// ===== START SERVER =====
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
