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
