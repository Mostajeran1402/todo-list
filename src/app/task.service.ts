import { Injectable } from '@angular/core';
import { Task } from './Task';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class TaskService {
  tasks:Task[] = []
  initList() : Task[]{
    // return[{
    //   id : 1,
    //   tittle : 'Angular Course',
    //   status : 2
    // },
    // {
    //   id : 2,
    //   tittle : 'Shoping',
    //   status : 1
    // } ,
    // {
    //   id : 3,
    //   tittle : 'Coocking',
    //   status : 3
    // },
    // {
    //   id : 4,
    //   tittle : 'Wake Up at 07:00',
    //   status : 3
    // }

    // ]
   const list= this.tasks=JSON.parse(localStorage.getItem('tasks'))
   if (!list) return []
   
   return list
  }

  constructor() { 
    this.tasks=this.initList()
  }
   list(){
    return this.tasks
  }
  add(task:Task){
    this.tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(this.tasks))
  }
  find(id:number){
   return this.tasks.find(x=>x.id == id)
  }
  findBy(title : string){
    return this.tasks.find(x=>x.tittle == title)
  }
  deleteAll(){
    this.tasks=[]
    localStorage.removeItem('tasks')
  }
  length(){
    return this.tasks.length
  }
  delete(task:Task){
    const index=this.tasks.indexOf(task)
     this.tasks.splice(index)
    localStorage.setItem('tasks',JSON.stringify(this.tasks))

  }
}
