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
