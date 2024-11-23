import React, { useEffect } from "react";
import Workoutdetails from "../components/workoutdetails";
import Workoutform from "../components/workoutform";
import { useWorkoutContext } from "../hooks/useworkoutcontext";
const Home = () => {
  const { workouts, dispatch } = useWorkoutContext(); // Update usage

  const fetchWorkouts = async () => {
    const response = await fetch("http://localhost:4000/api/workouts");
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "SET_WORKOUTS", payload: json });
    }
  };

  useEffect(() => {
    fetchWorkouts();
  },[dispatch] );

  return (
    <div className="container mx-auto px-4 bg-white mt-16 -mb-8">
      <div className="flex">
        <div className="w-3/4 pr-4">
          {workouts &&
            workouts.map((workout, index) => (
              <Workoutdetails
                key={index}
                workout={workout}
                handleDelete={fetchWorkouts}
              />
            ))}
        </div>
        <div className="w-1/4">
          <Workoutform />
        </div>
      </div>
    </div>
  );
};

export default Home;
