import {  createContext, useReducer } from "react";

export const Workoutcontext = createContext();
const workoutReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
      case "DELETE_WORKOUT":
        return{
          workouts:[state.workouts.filter((workouts)=>workouts._id!==action.payload._id)]
        };
    default:
      return state;

  }
};
export const Workoutcontextprovider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutReducer, {
    workouts: null,
  });
  return (
    <Workoutcontext.Provider value={{ ...state, dispatch }}>
      {children}
    </Workoutcontext.Provider>
  );
};
