import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map'

@Injectable()
export class ClientService {

  constructor(private http: Http) { }

  getAllClients(): Observable<any> {
    return this.http.get('http://localhost:3000/usuarios').map(res => res.json())
  }

  getOneClient(id): Observable<any> {
    return this.http.get(`http://localhost:3000/usuarios/${id}`).map(res => res.json())
  }

  registerClient(client): Observable<any> {
    return this.http.post(`http://localhost:3000/usuarios`, client).map(res => res.json())
  }

}
