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
  }

  onSubmit(form): void {
    this.loginData = {
      username: form.controls.name.value,
      password: form.controls.pass.value,
    };
    this.service.signIn(this.loginData).subscribe(
      resp => this.token = resp.headers.get('Authorization')
    );

    this.form.reset();
  }

  getTeachers() {
    this.service.getTeachers(this.token).subscribe(
      resp => console.log(resp)
      // this.teachers = resp.data
    );
  }

  signOut() {
    this.token = null;
  }
}
