const express = require('express');
const router = express.Router();
const urlController = require('../controllers/urlController');

router.post("/shorten", urlController.shortenUrl);
router.get("/:slug", urlController.redirectUrl);
router.get("/stats/:slug", urlController.getUrlStats);

module.exports = router;