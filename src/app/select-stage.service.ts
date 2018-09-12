import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Stage} from './model/stage';
import {Task} from './model/task';
@Injectable({
  providedIn: 'root'
})
export class SelectStageService {
  url = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }

  getStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>(this.url + 'stages');
  }

}
