import { Component,Input, Output, EventEmitter, } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
//import { Card } from "../shared/card/card";

//const randomIndex=Math.floor(Math.random()*DUMMY_USERS.length);

type Usr=
  {
  id:string,
  avatar:string,
  name:string
 }

@Component({
  selector: 'app-user',
  standalone:false,
//  imports: [Card],
  templateUrl: './user.html',
  styleUrl: './user.css',
})


export class User {
//   @Input({required:true}) id!:string;
 //@Input({required:true}) avatar!:string;
 // @Input({required:true}) name!:string;
 @Input({required:true}) user!:Usr;
 @Input({required:true}) selected!:boolean;
  @Output() select=new EventEmitter();

  get imagePath(){
    return "users/users/"+this.user.avatar;
  }
  onSelectuser(){
    this.select.emit(this.user.id);

  }

}
