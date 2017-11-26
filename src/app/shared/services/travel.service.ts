import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { BASE_API } from './../utils/base-api';
import { Travel } from './../../models/travel.interface';

@Injectable()
export class TravelService {

  constructor(private http: Http) { }

  getAllCards(): Observable<any> {
    return this.http.get(`http://localhost:3000/roteiros`)
                    .map(res => res.json() as any);
  }

  getOneTravel(id): Observable<any> {
    return this.http.get(`http://localhost:3000/roteiros/${id}`)
                    .map(res => res.json() as any);
  }
}
