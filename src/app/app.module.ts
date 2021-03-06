import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from "@angular/router";

import { environment } from "../environments/environment";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { AngularFireDatabaseModule } from "angularfire2/database";

import { MdButtonModule, MdToolbarModule, MdInputModule } from "@angular/material";

import { FlexLayoutModule } from "@angular/flex-layout";

import { AuthService } from "./services/auth.service";
import { TasksService } from "./services/tasks.service";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TasksComponent } from './tasks/tasks.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: TasksComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TasksComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FlexLayoutModule,
    MdButtonModule,
    MdInputModule,
    MdToolbarModule,
  ],
  providers: [
    AuthService,
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
