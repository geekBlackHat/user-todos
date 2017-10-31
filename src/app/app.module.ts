import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router' ;
import { HttpModule } from '@angular/http';
import { ClarityModule } from "clarity-angular";

import { HttpCallsService } from './services/http-calls.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ViewTodosComponent } from './components/view-todos/view-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewTodosComponent
  ],
  imports: [
    BrowserModule, HttpModule, ClarityModule.forRoot(), RouterModule.forRoot([
      {path : 'home', component: HomeComponent},
      {path : 'view-todos', component: ViewTodosComponent},
      {path : 'view-todos/:id', component: ViewTodosComponent},
      {path : '**', component:HomeComponent}
    ])
  ],
  providers: [HttpCallsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
