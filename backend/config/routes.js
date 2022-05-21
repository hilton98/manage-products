const express = require('express');
const router = express.Router();
const mainController =  require('../controllers/menu');
const managementCategoryController =  require('../controllers/managementCategory');
const deviceManagementController =  require('../controllers/deviceManagement');

router.get('/', mainController.index);
router.get('/managementCategory', managementCategoryController.index);
router.get('/deviceManagement', deviceManagementController.index);

//create
router.get('/deviceManagement/create', managementCategoryController.create);
router.get('/managementCategory/create', deviceManagementController.create);


// update category
router.get('/managementCategory/update', managementCategoryController.update);
router.get('/managementCategory/update/:id', managementCategoryController.update);
router.post('/managementCategory/update/:id', managementCategoryController.update);

// update product and category
router.get('/deviceManagement/update', deviceManagementController.update);
router.get('/deviceManagement/update/:id', deviceManagementController.update);
router.post('/deviceManagement/update/:id', deviceManagementController.update);


//remove
router.get("/deviceManagement/remove/:id", deviceManagementController.remove);
router.get("/managementCategory/remove/id:", managementCategoryController.remove);

module.exports = router;