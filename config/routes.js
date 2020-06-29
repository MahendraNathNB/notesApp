const express = require('express')
const router =express.Router()
const notesController =require('../app/controllers/notesController')
const categoryController =require('../app/controllers/categoryController')
const userControllers =require('../app/controllers/userControllers')
const authenticateUser =require('../app/middlewares/authenticateUser')

router.post('/users/register',userControllers.register)
router.post('/users/login',userControllers.login)
router.get('/users/account',authenticateUser,userControllers.account)
router.delete('/users/logout',authenticateUser,userControllers.logout)

router.get('/notes', authenticateUser,notesController.list)
router.get('/notes',authenticateUser,notesController.show)
router.post('/notes',authenticateUser,notesController.create)
router.put('/notes',authenticateUser,notesController.update)
router.delete('/notes',authenticateUser,notesController,destroy)

router.get('/category',authenticateUser,categoryController.list)
router.get('/category/:id',authenticateUser,categoryController.show)
router.post('/category',authenticateUser,categoryController.create)
router.put('/category/:id',authenticateUser,categoryController.update)
router.delete('/category/:id',authenticateUser,categoryController.destroy)

module.exports = router 