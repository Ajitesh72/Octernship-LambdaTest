const mongoose = require("mongoose");

const logModel = new mongoose.Schema(
  {
    // id: { type: Object, required: true },

    responseStart: { type: Number, required: false },
    responseEnd: { type: Number, required: false },
    responseStatus: { type: Number, required: false },
    transferSize: { type: Number, required: false },
    date: { type: String, required: true },
  },
  { collection: "test" }
);

const model = mongoose.model("logModel", logModel);

module.exports = model;
