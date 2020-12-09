import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from "@ngrx/store";
import * as fromTodo from "./todo.reducer";
import { environment } from "../../../environments/environment.prod";

export const todoFeatureKey = "todo";

export interface State {
  [fromTodo.todoFeatureKey]: fromTodo.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromTodo.todoFeatureKey]: fromTodo.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
