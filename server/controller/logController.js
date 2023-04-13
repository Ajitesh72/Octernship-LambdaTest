const mongoose = require("mongoose");

const logModel = require("../model/logModel");
// const asyncHandler = require('express-async-handler');

const db = mongoose.connect(
  "mongodb+srv://dubeyajitesh07:4KNmp6Xptk0px0Cf@cluster0.ujrdmvw.mongodb.net/testing?retryWrites=true&w=majority"
);

exports.search = async (req, res) => {
  const { key, value } = req.body;
  async function clientquery() {
    console.log("hello");
    const allDocs = await logModel.find({ [key]: value }).limit(10);
    if (allDocs.length > 0) {
      res.send({ status: "ok", allDocs });
    } else {
      res.send({ status: "no documents found" });
    }
    console.log("hello2");
  }
  clientquery();
};


exports.graph = async (req, res) => {
  async function clientquery() {
    const allDocs = await logModel.find();
    const totalCount = await logModel.countDocuments({});
console.log(totalCount);

    
    if (totalCount > 0) {
        res.send({ status: "ok", totalCount,allDocs });
      } else {
        res.send({ status: "no documents found" });
      }
  }
  clientquery();
};
