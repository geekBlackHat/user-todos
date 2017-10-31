import { Component, OnInit } from '@angular/core';
import { HttpCallsService } from './../../services/http-calls.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router' ;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private users;
  constructor(private httpCalls : HttpCallsService, private router : Router) { }

  ngOnInit() {
    this.httpCalls.getAllItems('https://jsonplaceholder.typicode.com/users').subscribe(
      res => {
        console.log(res);
        this.users = res;
      }
    );
  }

  viewTodos(term:any) {
    this.router.navigate(['view-todos', {id: term}]);
  }
}
