require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const cors = require("cors");
const listEndpoints = require("express-list-endpoints");
const colors = require("colors/safe");
const { connectDB } = require("./models");

const app = express();
const { PORT = 4000 } = process.env;

app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use((err, req, res, next) => {
  res.status(err.status).send(err);
});

app.get("/", (req, res) => {
  req.session.requestCount = req.session.requestCount
    ? req.session.requestCount + 1
    : 1;
  res.send(
    `api-make API running, ${
      req.session.requestCount
    } requests made this session. 

    ${listEndpoints(app)
      .map(
        (a) =>
          `<a href="http://localhost:4000${a.path}" >http://localhost:4000${a.path}</a>`
      )
      .join("\n")}`
  );
});

(async () => {
  await connectDB();
  app.listen(PORT, () =>
    console.log(
      colors.green.inverse(`api-make API running at http://localhost:${PORT}`)
    )
  );
})();
