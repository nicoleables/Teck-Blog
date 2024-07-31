// const express = require("express");
const router = require("express").Router();

// Route imports
const viewRoutes = require("./viewRoutes");
const userRoutes = require("./api/userRoutes");

// Route usage
router.use("/viewRoutes", viewRoutes);
router.use("./api/user", userRoutes);

module.exports = router;