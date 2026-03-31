import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { App } from "./app";
import { HeaderComponent } from "../header/header";
import { User } from "./user/user";
import { Tasks } from "./tasks/tasks";
import { Task } from "./tasks/task/task";
import { NewTask } from "./tasks/new-task/new-task";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./shared/card/shared.module";

@NgModule({
   declarations:[App,
    HeaderComponent,
    User,
    Tasks,
    Task,
    NewTask],

   bootstrap:[App],
   imports:[BrowserModule,FormsModule,SharedModule]
})
export class AppModule{}