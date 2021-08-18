const tf = require("@tensorflow/tfjs-node");
const fs = require("fs");

class Detect {
    async post(req, res) {
        const model = await tf.loadLayersModel(
            "http://localhost:3000/modeljs/model.json"
        );

        // read image
        const img = fs.readFileSync(req.file.path);
        let decodeImage = tf.node.decodeImage(img, 1);
        decodeImage = tf.reshape(decodeImage, [1, 784]);
        const predict = model.predict(decodeImage);
        const result = tf.argMax(predict, 1).dataSync();

        res.send(`Ket qua la: ${result}`);
    }
}

module.exports = new Detect();
