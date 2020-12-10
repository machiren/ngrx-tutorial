import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";

import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Todo } from "../../models/todo.model";

@Component({
  selector: "app-todo-list-item",
  templateUrl: "./todo-list-item.component.html",
  styleUrls: ["./todo-list-item.component.less"],
})
export class TodoListItemComponent implements OnInit {
  @Input() loading: boolean;
  @Input() todo: Todo;
  @Output() update = new EventEmitter<Todo>();
  @Output() remove = new EventEmitter<number>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      text: [this.todo.text, Validators.required],
    });
  }

  onSubmit() {
    const text: string = this.form.get("text").value;
    const todo = { ...this.todo, text };
    this.update.emit(todo);
  }
}
