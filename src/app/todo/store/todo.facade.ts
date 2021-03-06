import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";

import { Todo } from "../models/todo.model";
import { State } from "./todo.reducer";
import { TodoStoreModule } from "./todo-store.module";
import * as TodoSelectors from "./todo.selector";
import * as TodoActions from "./todo.actions";
import { remove } from "./todo.actions";

@Injectable({
  providedIn: TodoStoreModule, // 'root' でもOK
})
export class TodoFacade {
  constructor(private store: Store<State>) {}

  create(todo: Todo) {
    this.store.dispatch(TodoActions.create({ todo }));
  }

  update(todo: Todo) {
    this.store.dispatch(TodoActions.update({ todo }));
  }

  remove(id: number) {
    this.store.dispatch(TodoActions.remove({ id }));
  }
}
