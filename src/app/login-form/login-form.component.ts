import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginData = {};
  token: string;
  teachers = [];
  form = new FormGroup({
    name: new FormControl(),
    pass: new FormControl()
  });

  constructor(private service: TestServiceService) {}

  ngOnInit() {
    this.token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
  }

  onSubmit(form): void {
    this.loginData = {
      username: form.controls.name.value,
      password: form.controls.pass.value,
    };
    this.service.signIn(this.loginData).subscribe(
      resp => {
        this.token = resp.headers.get('Authorization');
        localStorage.setItem('token', this.token);
      }
    );

    this.form.reset();
  }

  getTeachers() {
    this.service.getTeachers().subscribe();
  }

  getStudents() {
    this.service.getStudents().subscribe();
  }

  getClasses() {
    this.service.getClasses().subscribe();
  }

  signOut() {
    this.token = null;
    localStorage.removeItem('token');
  }
}
