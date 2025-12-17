import express from "express";
import lenderController from "../controllers/lenderController.js";
import { asyncHandler } from "../middleware/async.js";
import { lenderAuth } from "../middleware/auth.js";

const router = express.Router();

router.post(
  "/register",
  asyncHandler(lenderController.register.bind(lenderController))
);

router.post(
  "/login",
  asyncHandler(lenderController.login.bind(lenderController))
);

router.get(
  "/leads",
  lenderAuth,
  asyncHandler(lenderController.getLeads.bind(lenderController))
);

router.get(
  "/leads/:id",
  lenderAuth,
  asyncHandler(lenderController.getLeadDetails.bind(lenderController))
);

router.patch(
  "/leads/:id/status",
  lenderAuth,
  asyncHandler(lenderController.updateLeadStatus.bind(lenderController))
);

router.patch(
  "/leads/:id/assign",
  lenderAuth,
  asyncHandler(lenderController.assignLead.bind(lenderController))
);

export default router;
