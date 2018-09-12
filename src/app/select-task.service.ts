
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Stage} from './model/stage';
import {Task} from './model/task';
@Injectable({
  providedIn: 'root'
})
export class SelectTaskService {
  url = 'http://localhost:8080/';
  constructor(private http: HttpClient) { }
  getTasksByStage(stageId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.url}stages/${stageId}/tasks`);
  }
}
