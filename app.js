const express = require("express");
const app = express();
const passport = require("passport");
const cors = require("cors");
const { localStrategy, jwtStrategy } = require("./middleware/passport");

//routes
const usersRoutes = require("./routes/usersRoutes");
//middleware
app.use(cors());

app.use(express.json());

app.use(passport.initialize());

passport.use(localStrategy);

passport.use(jwtStrategy);

app.use(usersRoutes);
//error middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error",
  });
});
//Path not found middleware
app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.listen(8080, () => {
  console.log("The application is running on localhost:8000");
});
