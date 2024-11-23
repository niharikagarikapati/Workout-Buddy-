import React, { useState } from "react";
import { useWorkoutContext } from "../hooks/useworkoutcontext";

const Workoutform = () => {
  const { dispatch } = useWorkoutContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyfields, setEmptyfields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const workout = { title, load, reps };

    const response = await fetch("https://workout-buddy-sjzc.onrender.com/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "CREATE_WORKOUT", payload: json });
      setError(null);
      setTitle("");
      setLoad("");
      setReps("");
      setEmptyfields([]);
    } else {
      setError(json.error);
      setEmptyfields(json.missingFields || []);
    }
  };

  return (
    <div className=" max-w-xs p-6 bg-white rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Workout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="title" className="mb-1">
            Exercise Title:
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`border border-gray-900 rounded-md py-3 px-3 ${
              emptyfields.includes("title") ? "border-red-500" : ""
            }`}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="load" className="mb-1">
            Load (kg):
          </label>
          <input
            type="number"
            id="load"
            value={load}
            onChange={(e) => setLoad(e.target.value)}
            className={`border border-gray-900 rounded-md py-3 px-3 ${
              emptyfields.includes("load") ? "border-red-500" : ""
            }`}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="reps" className="mb-1">
            Reps:
          </label>
          <input
            type="number"
            id="reps"
            value={reps}
            onChange={(e) => setReps(e.target.value)}
            className={`border border-gray-900 rounded-md py-3 px-3 ${
              emptyfields.includes("reps") ? "border-red-500" : ""
            }`}
          />
        </div>
        <button
          type="submit"
          className="bg-purple-900 text-white rounded-md py-2 px-4 hover:bg-purple-800 focus:outline-none"
        >
          Add Workout
        </button>
      </form>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default Workoutform;
