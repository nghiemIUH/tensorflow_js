const express = require("express");
const tf = require("@tensorflow/tfjs-node");
const fs = require("fs");

const app = express();
app.use(express.static("static"));
app.get("/", async (req, res) => {
    const model = await tf.loadLayersModel(
        "http://localhost:3000/modeljs/model.json"
    );

    // read image

    const img = fs.readFileSync(`${__dirname}/static/img.png`);
    let decodeImage = tf.node.decodeImage(img, 1);
    decodeImage = tf.reshape(decodeImage, [1, 784]);
    const predict = model.predict(decodeImage);
    const result = tf.argMax(predict, 1).dataSync();

    res.send(`Ket qua la: ${result}`);
});

app.listen(3000);
