import { Component, OnInit } from '@angular/core';

import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  teachers = [];

  constructor(private service: TestServiceService) {
  }

  ngOnInit() {
  }

  show() {
    this.teachers = this.service.teachers;
    console.log('erw');
  }

}
