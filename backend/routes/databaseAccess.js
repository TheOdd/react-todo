const express = require('express');
const router = express.Router();
const TodoItem = require('../models/TodoItem');

router.get('/all', (req, res) => {
  TodoItem.find()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
});

router.post('/remove', (req, res) => {
  TodoItem.findByIdAndRemove(req.body.taskId)
    .then(document => {
      res.send(document);
    })
    .catch(error => {
      res.send(error);
    })
});

router.post('/toggle', (req, res) => {
  TodoItem.findByIdAndUpdate(req.body.taskId, {
      completed: req.body.completed
    }, {
      new: true
    })
    .then(document => {
      res.send(document);
    })
    .catch(error => {
      res.send(error);
    })
});

router.post('/add', (req, res) => {
  const testTodo = new TodoItem({
    task: req.body.task
  });

  testTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
});

module.exports = router;
