import { state } from "@angular/animations";
import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import * as TodoActions from "./todo.actions";

export const todoFeatureKey = "todo";

export interface State {
  loading: boolean;
  todos: Todo[];
}

export const initialState: State = { loading: false, todos: [] };

export const reducer = createReducer(
  initialState,
  on(TodoActions.load, (state) => ({ ...state, loading: true })),
  on(TodoActions.create, (state, todo) => ({
    ...state,
    loading: false,
    todos: [...state.todos, todo],
  }))
);
