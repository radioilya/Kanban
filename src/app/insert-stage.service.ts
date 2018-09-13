import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from './model/task';
import {Stage} from './model/stage';


@Injectable({
  providedIn: 'root'
})
export class InsertStageService {
  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }
  addStageService(stage: Stage) {
    return this.http.post<Stage>(this.url + 'stages', stage);

  }
}

