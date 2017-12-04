import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {

  parent

  constructor(public http: Http) {
    console.log("Data Service Connected")
   }

   getParents(){
    return this.http.get('http://localhost:3000/api/relationship')
    .map(res => res.json());
  }

  getChildren(){
    // let jsonData = JSON.parse(data);  
    return this.http.get('http://localhost:3000/api/relationship')
      .map(res => res.json());
      // return this.parent
  }

}
