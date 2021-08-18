const express = require("express");
const app = express();
const route = require("./route/index");
const multer = require("multer");
const upload = multer({ dest: "../uploads/" });
app.use(express.static("static"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(upload.single("digit"));

route(app);

app.listen(3000);
