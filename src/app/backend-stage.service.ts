import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Stage} from './model/stage';
import {Observable} from "rxjs";
import {Task} from "./model/task";
@Injectable({
  providedIn: 'root'
})
export class BackendStageService {
  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }
  addStageService(stage: Stage) {
    return this.http.post<Stage>(this.url + 'stages', stage);

  }
  getStages(): Observable<Stage[]> {
    return this.http.get<Stage[]>(this.url + 'stages');
  }
  getStagesOne(stageId): Observable<Stage[]> {
    return this.http.get<Stage[]>(`${this.url}/stages/${stageId}`);
  }
}

