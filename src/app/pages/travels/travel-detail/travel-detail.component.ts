import { TravelService } from './../../../shared/services/travel.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Travel } from './../../../models/travel.interface';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-travel-detail',
  templateUrl: './travel-detail.component.html',
  styleUrls: ['./travel-detail.component.scss']
})
export class TravelDetailComponent implements OnInit {

  id: any;
  form: FormGroup;
  travel: any;
  travelPrice: number;
  model;
  
  constructor(
    private activatedRoute: ActivatedRoute, 
    private travelService: TravelService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {  
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
      
      this.travelService.getOneTravel(this.id).subscribe(res => {
        this.travel = res as Travel
        console.log(this.travel);
        
        this.travelPrice = res.detalhesRoteiro.preco
      });

    })

    this.form = this.formBuilder.group({
      date: ['', Validators.required],
      numberPeople: ['1', Validators.required],
    })
  }

  multiplyPrice(numberPersons: any) {
    this.travelPrice = numberPersons.target.value * this.travel.detalhesRoteiro.preco;
  }

  enviaDados(funcionario: any): void {
    funcionario.total = this.travelPrice;
    console.log(funcionario)
  }

}
