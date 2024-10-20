import { useWorkoutContext } from "../hooks/useworkoutcontext";
import { FaTrash } from "react-icons/fa"; // Assuming you're using React Icons for the delete icon

const WorkoutDetails = ({ workout, handleDelete }) => {
  const { dispatch } = useWorkoutContext();

  const handleDeleteClick = async () => {
    const response = await fetch(
      "http://localhost:4000/api/workouts/" + workout._id,
      {
        method: "DELETE",
      }
    );
    const json = await response.json();
    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
      handleDelete();
    }
  };

  return (
    <div className="mb-8 relative mr-20 ml-48 max-w-2xl">
      {/* Use ml-auto to move the container to the left */}
      <div className="bg-white p-4 rounded-lg shadow-md ">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-green-700 font-bold">{workout.title}</h4>
          {/* Delete button */}
          <button
            onClick={handleDeleteClick}
            className="bg-gray-400 text-white py-2 px-3 rounded-lg hover:bg-gray-500 focus:outline-none flex items-center"
          >
            <FaTrash />
          </button>
        </div>
        <div>
          <p>
            <strong>Load(kg):</strong> {workout.load}
          </p>
          <p>
            <strong>Reps:</strong> {workout.reps}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
