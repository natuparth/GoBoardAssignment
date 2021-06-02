import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule } from '@angular/common/http';
import {  StoreModule , Store} from '@ngrx/store';
import { userReducer } from './AppStore/users.reducer';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({users: userReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
