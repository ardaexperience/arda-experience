import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { ClientService } from './../../shared/services/client.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clientService: ClientService
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
        full_name: ['', [Validators.required]],
        user: ['', [Validators.required]],
        contato: this.formBuilder.group({
          email: ['', [Validators.required]],
        }),
        password: ['', [Validators.required]],
        password_confirmation: ['', [Validators.required]]
    })
  }

  registerClient(client) {
    this.clientService.registerClient(client).subscribe(res => res)
  }
  

}
