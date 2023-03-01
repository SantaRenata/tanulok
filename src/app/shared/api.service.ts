import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http:HttpClient) { }

  getStudents(){
    let endpoint = "students";
    let url = environment.restapi_host + endpoint;

    return this.http.get<any>(url);
  }

  getScores(){
    let endpoint = "scores";
    let url = environment.restapi_host + endpoint;

    return this.http.get<any>(url);
  }
}
