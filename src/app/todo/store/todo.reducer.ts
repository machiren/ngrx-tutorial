import { Action, createReducer, on } from "@ngrx/store";
import { Todo } from "../models/todo.model";
import * as TodoActions from "./todo.actions";

export const todoFeatureKey = "todo";

export interface State {}

export const initialState: State = {};

export const reducer = createReducer({});
