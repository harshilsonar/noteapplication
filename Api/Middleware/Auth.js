const jwt = require("jsonwebtoken");
require("dotenv").config();

function checkIsAuth(req, res, next) {
    // 🔍 Log all incoming cookies
    console.log("🔐 Incoming cookies:", req.cookies);

    const { access_token } = req.cookies;

    if (!access_token) {
        console.log("❌ No access_token found in cookies");
        return res.status(401).json({ message: "Unauthorized access: No token" });
    }

    try {
        const decoded = jwt.verify(access_token, process.env.JWT_SECRET_KEY);
        req.user = decoded;
        console.log("✅ Token verified. User:", decoded);
        next();
    } catch (err) {
        console.error("❌ Token verification failed:", err.message);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
}

module.exports = checkIsAuth;