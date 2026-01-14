import express from "express";
import {
    createPersonalLoan,
    getMyPersonalLoan,
    getPersonalLoanById ,
    updatePersonalLoanApplication,
    deletePersonalLoanApplication,
} from "../controllers/personalLoanController.js";
import { authenticate } from "../middleware/auth.js";

const router = express.Router();

//All routes require authetication
router.use(authenticate);

//POST /api/application - create new homeloan application
router.post("/", createPersonalLoan);

//POST/api/application - create new homeloan application
router.get("/", getMyPersonalLoan);

//GET /api/application - get all my application
router.get("/:id", getPersonalLoanById );

//PUT/ api / applications/:id - update application
router.put("/:id", updatePersonalLoanApplication);

//DELETE / api/application/:id - DELETE application
router.delete("/:id", deletePersonalLoanApplication);

export default router;