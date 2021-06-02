import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {  Store } from '@ngrx/store';
import { AppState, IUser, ACTIONS} from '../AppStore/users.reducer';
import * as Rx from 'rxjs';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
  public filteredUsers: Rx.Observable<Array<IUser>>
  public users: Rx.Observable<Array<IUser>>
  constructor(private dataService: DataService, private store: Store<AppState>) { 
    this.users = this.store.select('users')  
   
  }

  ngOnInit(): void {
   
    this.dataService.getUserData();
    this.dataService.dataSubject.subscribe((data) => {
      this.store.dispatch({type: ACTIONS.USER_LOADED,
      payload: { 
        users: data
       }
      })
  
    }
  )

}


  deleteUser(index, email){
    this.store.dispatch({
      type: ACTIONS.USER_DELETED,
      payload: index
    })

    alert(`User with email: ${email} has been deleted`);
  }

}
