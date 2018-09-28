import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Stage} from '../model/stage';
import {Task} from '../model/task';
import {Subject, Subscription} from 'rxjs';
import {BackendStageService} from '../backend-stage.service';
import {BackendBoardService} from '../backend-board.service';
import {map, repeatWhen} from "rxjs/operators";
import {Board} from "../model/board";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  @Input() stages: Stage[];
  @Input() boardId: number;
  board: Board[];
  @Output()  refrashBoardUp: EventEmitter<number> = new EventEmitter<number>();
  getStagesSubscription: Subscription;
  refreshStages = new Subject();


  constructor(private serviceStage: BackendStageService) {
  }
  refreshStage(): void {
      this.refreshStages.next();
  }
  refreshBoard(): void {
    this.refrashBoardUp.emit();
  }
  ngOnInit() {
    this.getStagesSubscription=this.serviceStage
      .getStages()
      .pipe(
       repeatWhen(() => this.refreshStages))
      .subscribe((value: Stage[]) => {
        this.stages = value.filter(val => val.boardId == this.boardId);
      });

   }
}
