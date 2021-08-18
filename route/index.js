const detectRoute = require("./detect");

route = (app) => {
    app.use("/", detectRoute);
};

module.exports = route;
