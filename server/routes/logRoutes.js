const express = require("express");

const {
  search,graph
} = require("../controller/logController");


const router = express.Router();

router.post("/search", search);
router.get("/graph", graph);

module.exports = router;



    