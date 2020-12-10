import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { Todo } from "../models/todo.model";
import { State } from "./todo.reducer";
import { TodoStoreModule } from "./todo-store.module";
import * as TodoSelectors from "./todo.selector";
import * as TodoActions from "./todo.actions";

@Injectable({
  providedIn: TodoStoreModule, // 'root' でもOK
})
export class TodoFacade {
  constructor(private store: Store<State>) {}
}
