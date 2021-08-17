const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const dataRoutes = require("./routes/getData");
const nameRoutes = require("./routes/myName");
const app = express();
app.set("view engine", "pug");

app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/myName", nameRoutes);
app.use("/getData", dataRoutes);
app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.send("<h3>Hello 你好嗎～衷心感謝</h3>");
});

// app.get('/sum', function (req, res) {
//     res.render('sum', { number: req.cookies.number });

// });
// app.post('/sum', function (req, res) {
//     res.cookie("number", req.body.number);
//     console.dir(req.body.number);
//     res.render('sum', { number: req.body.number });

// });

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
