import { Component, OnInit, ViewChild } from '@angular/core';

import { TestServiceService } from '../test-service.service';
import {PageEvent, MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.css']
})
export class ResultTableComponent implements OnInit {
  activeClasses = [];
  activeClassesData;
  displayedColumns: string[] = ['position', 'className', 'classYear', 'numOfStudents'];
  // pageSize: number;
  pageEvent: PageEvent;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(private service: TestServiceService) {
  }

  ngOnInit() {
  }

  showClasses() {
    if (this.activeClasses.length) { return; }
    this.service.classes.forEach(item => {
      if (item.isActive) {
        this.activeClasses.push(item);
      }
    });
    this.activeClassesData = new MatTableDataSource(this.activeClasses);
    this.activeClassesData.paginator = this.paginator;
  }

}
