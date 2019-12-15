import {
  ADD_TASK,
  DELETE_TASK,
  EDIT_TASK,
  UPDATE_STATUS
} from "../constants/ActionTypes";
import uuid from "uuid/v4";

export const initialTasks = [
  { id: uuid(), task: "Đi làm", status: true },
  { id: uuid(), task: "Đi chơi", status: false },
  { id: uuid(), task: "Xem phim", status: true }
];

export default function tasksReducer(state, action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        { id: uuid(), task: action.task, status: action.status }
      ];
    case DELETE_TASK:
      return state.filter(task => task.id !== action.id);
    case EDIT_TASK:
      return state.map(task => {
        if (task.id === action.task.id) {
          return action.task;
        }
        return task;
      });
    case UPDATE_STATUS:
      return state.map(task => {
        if (task.id === action.id) {
          return { ...task, status: !task.status };
        }
        return task;
      });
    default:
      return state;
  }
}
