const express = require('express');
const { createworkout, getallworkouts, getworkout, deleteworkout, updateworkout } = require('./controllers/workoutcontroller');
const routes = express.Router()


routes.get("/", getallworkouts);
routes.get('/:id',getworkout);
routes.post('/',createworkout)
routes.delete('/:id',deleteworkout);
routes.patch("/:id",updateworkout);
module.exports  =   routes