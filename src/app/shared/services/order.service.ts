import { Http } from '@angular/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class OrderService {

  constructor(private http: Http) { }

  getAllOrders(): Observable<any> {
    return this.http.get('http://localhost:3000/pedidos').map(res => res.json())
  }

}
