import { Component, ViewChild } from '@angular/core';
import { NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IconButtonComponent } from "./icon-button/icon-button.component";
import { TaskTableComponent } from "./task-table/task-table.component";
import { TaskformComponent } from "./task-form/task-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    //styleUrl: './app.component.css'
    styles: '.Custom-p  {color:blue}',
    imports: [NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, FormsModule, IconButtonComponent, TaskTableComponent,TaskformComponent]
})
export class AppComponent {
  @ViewChild('table') table :TaskTableComponent
  title = 'todo-list';
  constructor(){
  }
  refreshList(){
    this.table.refresh()
  }
}

