import express from 'express';
import { createBusinessLoan,
         getMyBusinessLoan,
         getMyBusinessLoanById,
         updateBusinessLoanApplication,
         deleteBusinessLoanApplication } from '../controllers/BussinessLoanController.js';
 import { authenticate } from '../middleware/auth.js';

 const router = express.Router();

 //All routes require authentication
 router.use(authenticate);

 //POST /api/applications/bussiness - create new bussiness Loan application
 router.post('/', createBusinessLoan);

 //POST/api/appications/bussiness - get all my bussiness application
 router.get('/', getMyBusinessLoan);

//GET /api/applications/bussiness/:id - get bussiness Loan by ID
router.get('/:id', getMyBusinessLoanById);

//PUT/api/application/:id - update bussiness loan application
router.put("/:id", updateBusinessLoanApplication);

//DELETE /api/applications/bussiness/:id - delete bussiness loan application
router.delete("/:id", deleteBusinessLoanApplication);

export default router;