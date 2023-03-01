/*
* File: tanulo.component.ts
* Author: Sánta Renáta Diána
* Copyright: 2023, Sánta Renáta Diána
* Group: Szoft II N
* Date: 2023-03-01
* Github: https://github.com/SantaRenata/
* Licenc: GNU GPL
*/

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-tanulo',
  templateUrl: './tanulo.component.html',
  styleUrls: ['./tanulo.component.scss']
})
export class TanuloComponent implements OnInit {
  students:any = [];
  scores:any = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getStudents();
    this.getScores();
  }

  getStudents(){
    this.api.getStudents().subscribe({
      next: (students) => {this.students = students},
      error: (error) => {console.log("Hiba! RestApi elérése sikertelen.")}
    });
  }

  getScores(){
    this.api.getScores().subscribe({
      next:(scores)=>{this.scores = scores},
      error:(error) => {console.log("Hiba! RestApi elérése sikertelen.")}
    });
  }
}
