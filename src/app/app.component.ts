import {Component, OnInit} from '@angular/core';
import {Board} from './model/board';
import {repeatWhen} from "rxjs/operators";
import {Subject, Subscription} from "rxjs";
import {BackendBoardService} from "./backend-board.service";
import {Stage} from "./model/stage";
import {BackendStageService} from './backend-stage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*refreshBoard($event): void {
  this.refreshBoards.next();
}*/

export class AppComponent  implements OnInit{
  boards:Board[];
  stages:Stage[];
  getBoardsSubscription: Subscription;
  refreshBoards = new Subject();

  constructor(private serviceBoard: BackendBoardService) {

  }
  refreshBoard($event): void {
    alert('123');
    this.refreshBoards.next();
  }
  ngOnInit() {
    this.getBoardsSubscription=this.serviceBoard
      .getBoards()
      .pipe(repeatWhen(() => this.refreshBoards))
      .subscribe((value: Board[]) => {
        this.boards = value;
      });
  }
  }
