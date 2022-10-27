// Import function from Personal Model
import { getPersonal, getPersonalById, insertPersonal, updatePersonalById, deletePersonalById } from "../models/personalModels.js";
 
// Get All Personal
export const showPersonal = (req, res) => {
    getPersonal((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get Single Personal
export const showPersonalById = (req, res) => {
    getPersonalById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Create New Personl
export const createPersonal = (req, res) => {
    const data = req.body;
    insertPersonal(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Personal
export const updatePersonal = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updatePersonalById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Personal
export const deletePersonal = (req, res) => {
    const id = req.params.id;
    deletePersonalById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 