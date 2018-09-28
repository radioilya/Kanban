import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Board} from './model/Board';
import {Observable} from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class BackendBoardService {
  url = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }
  addBoardservice(board: Board) {
    return this.http.post<Board>(this.url + 'boards', board);
  }
  getBoards(): Observable<Board[]> {
    return this.http.get<Board[]>(this.url + 'boards');
  }

}

