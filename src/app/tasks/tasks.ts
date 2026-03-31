import { Component, EventEmitter, Input, Output } from '@angular/core';
//import { Task } from "./task/task";
//import { NewTask } from './new-task/new-task';
import { TasksService } from './tasks.service';

type NewTaskData = {
  title: string,
  summary: string,
  date: string
}
@Component({
  selector: 'app-tasks',
  standalone:false,
 // imports: [Task, NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input({required:true}) userId!:string
@Input({required:true}) name!:string;
isAddingTask:boolean=false;
private tasksService:TasksService;
//@Output() start=new EventEmitter();
 
 // onSelectuser(){
   // this.select.emit(this.id);

  //}
  constructor(tasksService:TasksService){
    this.tasksService=tasksService;
  }

  get selectedUserTasks(){
    return this.tasksService.getuserTasks(this.userId);
  }

//  onCompleteTask(id:string){
//    this.tasks=this.tasksService.tasks.filter((task)=>task.id!=id);
 // }

  onStartAddTask(){
   this.isAddingTask=true;
  }

  onCloseAddTask(){
       this.isAddingTask=false;
  }

//  onAddTask(taskdata:NewTaskData){
 //  this.tasks.unshift({
  //  id:new Date().getTime().toString(),
  //  userId:this.userId,
  //  title:taskdata.title,
  //  summary:taskdata.summary,
  //  dueDate:taskdata.date
  // })
 //  this.isAddingTask=false;
 // }
}
