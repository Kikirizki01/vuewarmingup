// import connection
import db from "../config/database.js";
 
// Get All Personal
export const getPersonal = (result) => {
    db.query("SELECT * FROM personal", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get Single Personal
export const getPersonalById = (id, result) => {
    db.query("SELECT * FROM personal WHERE personal_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Personal to Database
export const insertPersonal = (data, result) => {
    db.query("INSERT INTO personal SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Product to Database
export const updatePersonalById = (data, id, result) => {
    db.query("UPDATE product SET personal_name = ?, personal_birth_date = ?, personal_address = ? WHERE personal_id = ?", [data.personal_name, data.personal_birth_date, data.personal_address, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Product to Database
export const deletePersonalById = (id, result) => {
    db.query("DELETE FROM personal WHERE personal_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}