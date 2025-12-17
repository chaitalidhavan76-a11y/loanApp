import express from "express";
import loanController from "../controllers/loanController.js";
import { asyncHandler } from "../middleware/async.js";

const router = express.Router();

router.post(
  "/apply",
  asyncHandler(loanController.applyGeneric.bind(loanController))
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const lead = await loanController.getLoanById(req, res);
    res.json(lead);
  })
);

export default router;
