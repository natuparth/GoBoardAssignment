import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  products: any = [];
  dataSubject = new Subject<any>();
  
  constructor(private httpClient: HttpClient) { }
  getUserData(){
    this.httpClient.get("assets/data.json").subscribe(data =>{
      this.products = data;
      this.dataSubject.next(this.products)
    })
  }

}
