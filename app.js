const express = require("express");
const { Message } = require("./db/models");
const path = require("path");
const app = express();
const passport = require("passport");
const cors = require("cors");
const { localStrategy, jwtStrategy } = require("./middleware/passport");

//socket
const server = require("http").createServer(app);
const socketio = require("socket.io");

const io = socketio(server, { cors: { origin: "*" } });
//routes
const roomsRoutes = require("./routes/roomsRoutes");
const usersRoutes = require("./routes/usersRoutes");

const messagesRoutes = require("./routes/messagesRoutes");
const userProfileRoutes = require("./routes/userProfileRoutes");
const db = require("./db/models");
// db.sequelize.sync({ force: true });

//middleware
app.use(cors());

app.use(express.json());

app.use(passport.initialize());

passport.use(localStrategy);

passport.use(jwtStrategy);

app.use(usersRoutes);
app.use(roomsRoutes);
app.use(messagesRoutes);
app.use(userProfileRoutes);

//handling image
app.use("/media", express.static(path.join(__dirname, "media")));

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.on("message", (message) => {
    Message.create(message);

    io.sockets.emit("message", { message });
  });
});

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

server.listen(8080, () => {
  console.log("The application is running on localhost:8080");
});
