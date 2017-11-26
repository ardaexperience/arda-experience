import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      user: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  login() {

  }

}
