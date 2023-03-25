const express = require("express");
const testRouter = express.Router();

testRouter.get("/", async (req, res, next) => {
    console.log("Made it to the api. All is well")
  });

  module.exports = testRouter;