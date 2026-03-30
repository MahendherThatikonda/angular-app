import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from "../../shared/card/card";
import { DatePipe } from '@angular/common';
type Tsk ={
  id:string;
  userId:string;
  title:string;
  summary:string;
  dueDate:string

}

@Component({
  selector: 'app-task',
  imports: [Card,DatePipe],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
@Input({required:true}) task!:Tsk
@Output() complete=new EventEmitter<string>();

onCompleteTask(){
  this.complete.emit(this.task.id)
}
}
