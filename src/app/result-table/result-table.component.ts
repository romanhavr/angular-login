import { Component, OnInit } from '@angular/core';

import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  teachers = [];
  students = [];

  constructor(private service: TestServiceService) {
  }

  ngOnInit() {
  }

  showTeachers() {
    this.teachers = this.service.teachers;
  }
  showStudents() {
    this.students = this.service.students;
    // console.log('erw');
  }

}
