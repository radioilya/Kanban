import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from './model/task';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class BackendTaskService {
 url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }
  addTaskService(task: Task) {
    //alert('Задача создана ' + task.stageId);
    return this.http.post<Task>(this.url + 'tasks', task);

}
  getTasksByStage(stageId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.url}stages/${stageId}/tasks`);
}
}
