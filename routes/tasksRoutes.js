const express = require('express')
const router = express.Router();

const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.removeTask)
router.get('/edit/:id', TaskController.updatedTask)
router.post('/edit', TaskController.updatedTaskPost)
router.post('/updatedstatus', TaskController.toggleTaskStatus)
router.get('/', TaskController.showTask)

module.exports = router