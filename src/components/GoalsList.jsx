import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addGoalActionCreator,
  deleteGoalActionCreator,
} from "../states/goals/action";
import GoalInput from "./GoalInput";
import GoalItem from "./GoalItem";

function GoalsList() {
  const goals = useSelector((states) => states.goals); // TODO: Get goals from store;
  const dispatch = useDispatch();

  function onAddGoal(text) {
    // TODO: dispatch action ADD_GOAL
    const id = `id-${+new Date()}`;

    dispatch(
      addGoalActionCreator({
        id,
        text,
      })
    );
  }

  function onDeleteGoal(id) {
    // TODO: dispatch action DELETE_GOAL
    dispatch(deleteGoalActionCreator(id));
  }

  return (
    <div>
      <h3>My Goals</h3>
      <GoalInput addGoal={onAddGoal} />

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <GoalItem {...goal} deleteGoal={onDeleteGoal} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalsList;
