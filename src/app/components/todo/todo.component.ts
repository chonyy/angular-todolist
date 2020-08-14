import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../Models/Todo';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
    todos: Todo[];

    constructor(private todoService: TodoService) {}

    ngOnInit(): void {
        this.todoService.getTodos().subscribe((todos) => {
            this.todos = todos;
        });
    }

    deleteTodo(todo: Todo) {
        this.todos = this.todos.filter((t) => t.id !== todo.id);
        this.todoService.deleteTodo(todo).subscribe();
    }
}
