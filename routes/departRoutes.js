
const express = require('express');
const { updateDepart,deleteDepart,addDepart,getDepartByName,getDeparts, getDepartById} = require('../controllers/departControllers');

const router = express.Router();

router.get("/departements", getDeparts);
router.get("/departements/:id", getDepartById);
router.get("/departements/name/:nom", getDepartByName);
router.post("/departements/add", addDepart);
router.delete("/departements/delete/:id", deleteDepart);
router.put("/departements/update/:id", updateDepart);



module.exports = router;