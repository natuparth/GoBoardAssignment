import { Component, OnInit } from '@angular/core';
import {  Store } from '@ngrx/store';
import {  ACTIONS} from '../AppStore/users.reducer';
import { DataService } from '../data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dataService: DataService,private store: Store) { }
  firstName: string;
   lastName: string;
   email: string;
   age: number;
  ngOnInit(): void {
    this.dataService.dataSubject.subscribe((data) => {
      this.store.dispatch({type: ACTIONS.USER_LOADED,
      payload: { 
        users: data
       }
      })
    })
  }
  onclear(){
    
    if(!this.firstName && !this.lastName && !this.age && !this.email)
     this.dataService.getUserData();
  }
  search(){
   
    this.store.dispatch({
      type: ACTIONS.FILTER_USED,
      payload: {
          first: this.firstName,
          last: this.lastName,
          age: this.age,
          email: this.email
      }
        })

  }

  clear(){
    this.firstName = undefined;
    this.lastName = undefined;
    this.age = undefined;
    this.email = undefined;
    this.dataService.getUserData()
  }

}
