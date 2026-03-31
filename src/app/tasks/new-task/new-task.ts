import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
//import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

type NewTaskData={title:string,summary:string,date:string}

@Component({
  selector: 'app-new-task',
  standalone:false,
//  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})

export class NewTask {
  @Input({required:true}) userId!:string;
 @Output() close=new EventEmitter<void>();
// @Output() add= new EventEmitter<NewTaskData>();
 enteredTitle="";
 enteredSummary="";
 enteredDate="";
 private tasksService=inject(TasksService);

  onCancel(){
this.close.emit();
 }

 onSubmit(){
//  this.add.emit({
//    title:this.enteredTitle,
//    summary:this.enteredSummary,
//    date:this.enteredDate
//  })
this.tasksService.addTask({
  title:this.enteredTitle,
  summary:this.enteredSummary,
  date:this.enteredDate

}, this.userId );
this.close.emit();
 }
}
