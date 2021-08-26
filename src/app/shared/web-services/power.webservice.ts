import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PowerWebService {

  constructor(
    private http: HttpClient
  ) { }

  getPowers() {
    return this.http.get('http://localhost:8080/powers/')
  }
}
