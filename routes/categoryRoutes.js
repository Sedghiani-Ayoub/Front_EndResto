const express = require('express');

const { deleteCategory,getCategoryByName,updateCategory,addCategory,getCategoryById,getCategories, home } = require('../controllers/categoryControllers');

/* const auth = require('../middleware/auth') */

const router = express.Router();


router.get('/', home);
router.get("/categories", getCategories);
router.get("/categories/:id", getCategoryById);
router.get("/categories/name/:name", getCategoryByName);

router.post("/categories/add", addCategory);
router.put("/categories/update/:id", updateCategory);    
router.delete("/categories/delete/:id", deleteCategory);



module.exports = router;







