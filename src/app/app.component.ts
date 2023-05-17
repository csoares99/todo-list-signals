import { Component, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './components/dialog/dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(public dialog: MatDialog) { }

  title = 'todo-list-signals';
  todoList = signal(['item 1', 'item 2']);

  addItemToList() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.todoList.mutate(value => {
          value.push(result);
        });
      }
    });
  }
}
