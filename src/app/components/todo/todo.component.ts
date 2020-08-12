import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
    todos: Todo[];
    constructor() {}

    ngOnInit(): void {
        this.todos = [
            {
                id: 1,
                title: 'one',
                completed: false,
            },
            {
                id: 2,
                title: 'two',
                completed: false,
            },
            {
                id: 3,
                title: 'three',
                completed: true,
            },
        ];
    }
}
