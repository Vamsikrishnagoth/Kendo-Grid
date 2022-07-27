import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http : HttpClient) { }


  getDataFromServe(){
    return this._http.get('../assets/json/mock-grid.json');
  }
}
