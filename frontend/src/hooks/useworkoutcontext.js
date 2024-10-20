import { Workoutcontext } from "../context/workoutcontext";
import { useContext } from "react";

export const useWorkoutContext = () => {
  const context = useContext(Workoutcontext);
  return context
};
