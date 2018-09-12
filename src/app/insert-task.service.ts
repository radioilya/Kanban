import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from './model/task';


@Injectable({
  providedIn: 'root'
})
export class InsertTaskService {
 url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }
  addTaskService(task: Task) {
    alert('Задача создана ' + task.stageId);
    return this.http.post<Task>(this.url + 'tasks', task);

}
}
