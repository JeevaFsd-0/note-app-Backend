const express = require("express");
const app = express();
const connectDb = require("./config/db");
const userRoute = require("./routes/user");
const noteRoute = require("./routes/notes");
const cors = require("cors");

connectDb();

app.use(cors());
app.use(express.json());
app.use("/user", userRoute);
app.use("/note", noteRoute);

app.get("/", (req, res) => {
    res.send("Api is working");
});

app.listen(4000, () => {
    console.log("Server is up and running");
});