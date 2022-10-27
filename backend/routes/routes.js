// import express
import express from "express";
 
// import function from controller
import { showPersonal, showPersonalById, createPersonal, updatePersonal, deletePersonal } from "../controllers/personal.js";
 
// init express router
const router = express.Router();
 
// Get All Personal
router.get('/personal', showPersonal);
 
// Get Single Personal
router.get('/personal/:id', showPersonalById);
 
// Create New Personal
router.post('/personal', createPersonal);
 
// Update Personal
router.put('/personal/:id', updatePersonal);
 
// Delete Product
router.delete('/personal/:id', deletePersonal);
 
// export default router
export default router;