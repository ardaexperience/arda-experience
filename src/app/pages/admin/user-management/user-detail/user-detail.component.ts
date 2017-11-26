import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from './../../../../shared/services/client.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  id: any;
  client: any;
  form: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private clientService: ClientService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.initForm();
    this.getClientID();
  }



  getClientID() {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
      this.recoverClient();
    })
  }

  initForm() {
    this.form = this.fb.group({

      rg: ['', Validators.required],
      cpf: ['', Validators.required],
      nome: ['', Validators.required],

      contato: this.fb.group({
        email: ['', Validators.required],
        telefone: ['', Validators.required],
        celular: ['', Validators.required]
      }),

      endereco: this.fb.group({
        rua: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: ['', Validators.required],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        uf: ['', Validators.required],
        cep: ['', Validators.required],
      }),

      cartaoCredito: this.fb.group({
        nomeCliente: ['', Validators.required],
        numeroCartao: ['', Validators.required],
        mesExpiracao: ['', Validators.required],
        anoExpiracao: ['', Validators.required],
      })
    })
  }

  recoverClient() {
    this.clientService.getOneClient(this.id).subscribe(res => {
      this.form.get('nome').patchValue(res.nome);
      this.form.get('rg').patchValue(res.rg)
      this.form.get('cpf').patchValue(res.cpf)

      this.form.get('contato.telefone').patchValue(res.contato.telefone);
      this.form.get('contato.email').patchValue(res.contato.email);
      this.form.get('contato.celular').patchValue(res.contato.celular);

      this.form.get('endereco.rua').patchValue(res.endereco.rua);
      this.form.get('endereco.numero').patchValue(res.endereco.numero);
      this.form.get('endereco.complemento').patchValue(res.endereco.complemento);
      this.form.get('endereco.bairro').patchValue(res.endereco.bairro);
      this.form.get('endereco.cidade').patchValue(res.endereco.cidade);     
      this.form.get('endereco.uf').patchValue(res.endereco.uf);
      this.form.get('endereco.cep').patchValue(res.endereco.cep);

      this.form.get('cartaoCredito.nomeCliente').patchValue(res.cartaoCredito.nomeCliente);
      this.form.get('cartaoCredito.numeroCartao').patchValue(res.cartaoCredito.numeroCartao);
      this.form.get('cartaoCredito.mesExpiracao').patchValue(res.cartaoCredito.mesExpiracao);
      this.form.get('cartaoCredito.anoExpiracao').patchValue(res.cartaoCredito.anoExpiracao);
      
      
      

      this.client = res
      console.log(res)
      console.log(this.client)
    })
  }
}
