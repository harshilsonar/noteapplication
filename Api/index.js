const express = require("express");
require("dotenv").config(); // ✅ Always at the top
const connect = require("./utlis/db"); // ✅ now using db.js
const cookieParser = require("cookie-parser");
const cors = require("cors")

const app = express();
const port = process.env.PORT || 3000;

app.use(cors({
  origin:" http://localhost:5173/",
  credentials:true
}))
app.use(cookieParser()),
app.use(express.json());

// ✅ Correct route path (URL, not file path)
app.use("/api/users", require("./routes/user.routes"));
app.use("/api/notes",require("./routes/note.routes"))
app.listen(port, async () => {
  try {
    await connect(); // 👈 this uses db.js now
    console.log("✅ Connected to database");
  } catch (error) {
    console.log("❌ Error connecting to database:", error.message);
  }

  console.log(`🚀 Server is running on port ${port}`);
});
