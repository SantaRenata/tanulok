/*
* File: api.service.ts
* Author: Sánta Renáta Diána
* Copyright: 2023, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2023-03-01
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/

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
