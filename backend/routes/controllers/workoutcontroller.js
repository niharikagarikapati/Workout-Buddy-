const { request, response } = require("express");
const Workout = require("../workoutmodel");
const { default: mongoose } = require("mongoose");
//get all workouts
const getallworkouts = async (request, response) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 });
  response.status(200).json(workouts);
};

//get a single workout

const getworkout = async (request, response) => {
  const { id } = request.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    response.status(404).json("No workout found");
  }
  const workout = await Workout.findById(id);
  if (!workout) {
    response.status(404).json("No workout found");
  }
  response.status(200).json(workout);
};
//create a workout
const createworkout = async (request, response) => {
  const { title, reps, load } = request.body;
  let emptyfields=[]
  if(!title){
    emptyfields.push('title')
  }
  if (!load) {
    emptyfields.push("load");
  }
  if (!reps) {
    emptyfields.push("reps");
  }
  if(emptyfields.length>0){
     return response.status(400).json({error:"Please fill all the fields"})
  }

  //add doc to the workout
  try {
    const workout = await Workout.create({ title, reps, load });
    response.status(200).json(workout);
  } catch (error) {
    response.status(400).json({ error: error.message });
  }
};
//delete a workout
const deleteworkout = async (request, response) => {
  const { id } = request.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    response.status(404).json("No workout found");
  }
  const workout = await Workout.findOneAndDelete(id);
  if (!workout) {
    response.status(404).json("No workout found");
  }
  response.status(200).json(workout);
};

//update a workout
const updateworkout = async (request, response) => {
  const { id } = request.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    response.status(404).json("No workout found");
  }
  const workout = await Workout.findOneAndUpdate(id);
  if (!workout) {
    response.status(404).json("No workout found");
  }
  response.status(200).json(workout);
};

module.exports = {
  createworkout,
  getallworkouts,
  getworkout,
  deleteworkout,
  updateworkout,
};
