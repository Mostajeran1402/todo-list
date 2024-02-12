import { Component, Input } from '@angular/core';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { CommonModule, NgClass, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Task } from '../Task';
import { HighlightDirective } from '../highlight.directive';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [IconButtonComponent,NgFor,NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault,NgClass,HighlightDirective],
  providers:[TaskService],
  templateUrl: './task-table.component.html'
  
})
export class TaskTableComponent {

    tasks:Task[] = [] //********متغیر در کامپوننت *
   constructor(private readonly taskService : TaskService) {
     this.refresh()
    }  
      refresh(){
        this.tasks=this.taskService.list()
      }
  changeStatus(taskId:number,target:number){
    const task=this.taskService.find(taskId)!
    task.status=target
   }
   trackById(index : number , task:Task) :number   {
    return task.id;
  }

  deleteTask(taskId:number) {
    const task=this.taskService.find(taskId)!
    if(confirm(`Do you want to delete : ${task.tittle}`) == true){
     this.taskService.delete(task)
    }
    }

  
}
 