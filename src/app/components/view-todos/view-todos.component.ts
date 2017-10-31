import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpCallsService } from './../../services/http-calls.service';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css']
})
export class ViewTodosComponent implements OnInit {
  private url = 'https://jsonplaceholder.typicode.com/todos?userId=';
  private changeStateUrl = ' https://jsonplaceholder.typicode.com/todos/XXX';
  private addTodoUrl =  'https://jsonplaceholder.typicode.com/todos';
  private deleteUrl = 'https://jsonplaceholder.typicode.com/todos/';

  private todos;

  constructor(private route: ActivatedRoute, private httpCalls : HttpCallsService) { 
    var userId;
    this.route.params.subscribe( params => { console.log(params); userId = params.id;} );
    this.url += userId;
  }

  ngOnInit() {
    this.httpCalls.getAllItems(this.url).subscribe(
      res => {
        console.log(res);
        this.todos = res;
      }
    );
  }

  changeState(){

  }

  createTodo(){

  }

  deleteTodo(todoId){
    this.deleteUrl += todoId;
    this.httpCalls.getAllItems(this.deleteUrl).subscribe(
      res => {
        console.log(res);
        this.todos = res;
      }
    );
  }

}
