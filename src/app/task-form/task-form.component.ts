import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconButtonComponent } from "../icon-button/icon-button.component";
import { Task } from '../Task';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../task.service';

@Component({
    selector: 'app-task-form',
    standalone: true,
    templateUrl: './task-form.component.html',
    imports: [IconButtonComponent,FormsModule],
    providers:[TaskService]
})
export class TaskformComponent {
    taskTitle:string=''
    @Output() onDeleteAllClicked=new EventEmitter()
    constructor(private readonly taskService:TaskService){
     }
    addTask(){
        if(!this.taskTitle){
          alert("Title can not be empty")
          return
        }
        if(this.taskService.findBy(this.taskTitle)){
          alert('Task already defined');
          this.taskTitle='';
          return
        }
    
        const task:Task={
          id:this.taskService.length()+1,
          tittle: this.taskTitle,
          status:1
        }
        this.taskService.add(task);
        this.taskTitle='';
      }
      titleChanged(){
        console.log(this.taskTitle)
      }
    
      deleteAll(){
          this.taskService.deleteAll()
          this.onDeleteAllClicked.emit()
      }
      addToLocalStorage(){
        const name='Hossein'
        localStorage.setItem('name',name)
      }
}
