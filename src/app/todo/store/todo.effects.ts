import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, concatMap, map, switchMap } from "rxjs/operators";
import { TodoService } from "../services/todo.service";
import * as TodoActions from "./todo.actions";

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}
}
