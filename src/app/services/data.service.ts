import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';

@Injectable()
export class DataService {

  constructor(public http: Http) {
    console.log("Data Service Connected")
  
   }

   getParents(){
    return this.http.get( environment.url + '/api/relationship')
    .map(res => res.json());
  }

  getChildren(){
    return this.http.get( environment.url + '/api/relationship')
      .map(res => res.json());
  }

  getLoans(){
    return this.http.get( environment.url + '/api/loan')
      .map(res => res.json());
    
  }

  getLimits(){
    return this.http.get( environment.url + '/api/limit')
    .map(res => res.json());
  }

}
