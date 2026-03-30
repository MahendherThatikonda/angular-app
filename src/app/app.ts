import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-app');
  users=DUMMY_USERS;
  userselected="";
  userId="";

  onSelectUser(id:string){
  //console.log('Selected user with id '+id);
//  this.userselected=name;
const user = this.users.find(u => u.id === id)!;
  this.userselected = user.name;
  this.userId = id;

  }
}
