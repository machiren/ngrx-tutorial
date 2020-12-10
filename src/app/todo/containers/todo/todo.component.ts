import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Todo } from "../../models/todo.model";
import { TodoService } from "../../services/todo.service";
import { TodoFacade } from "../../store/todo.facade";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.less"],
})
export class TodoComponent implements OnInit {
  constructor(private readonly todoService: TodoFacade) {}

  ngOnInit() {}
  create(todo: Partial<Todo>) {
    const date = new Date();
    todo.checked = false;
    todo.createdAt = Math.floor(date.getTime() / 1000);
    todo.updatedAt = Math.floor(date.getTime() / 1000);
  }
  update(todo: Todo) {}
  remove(id: number) {}
}
