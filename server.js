const express = require("express");
const cors = require("cors");

const app = express();

// ===== MIDDLEWARE =====
app.use(cors({
  origin: "*"
}));

app.use(express.json());

// ===== HOME ROUTE (TEST) =====
app.get("/", (req, res) => {
  res.json({ message: "API is working fine" });
});

// ===== MATCHES ROUTE =====
app.get("/matches", (req, res) => {
  res.json([
    {
      id: 1,
      team1: "Team A",
      team2: "Team B",
      score: "2 - 1"
    },
    {
      id: 2,
      team1: "Team C",
      team2: "Team D",
      score: "0 - 0"
    }
  ]);
});

// ===== CHAT ROUTE =====
app.get("/chat", (req, res) => {
  res.json([
    {
      user: "Ahmed",
      message: "Hello 👋"
    },
    {
      user: "Youssef",
      message: "Welcome!"
    }
  ]);
});

// ===== 404 HANDLER (IMPORTANT) =====
app.use((req, res) => {
  res.status(404).json({
    error: "Route not found"
  });
});

// ===== START SERVER =====
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
