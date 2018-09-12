import {Component, OnInit} from '@angular/core';
import {Stage} from '../model/stage';
import {Task} from '../model/task';
import {Subscription} from 'rxjs';
import {SelectStageService} from '../select-stage.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  stages: Stage[];
  getStagesSubscription: Subscription;
  constructor(private service: SelectStageService) {
  }

  ngOnInit() {
    this.getStagesSubscription = this.service
      .getStages()
      .subscribe((stages: Stage[]) => this.stages = stages);
  }
  newTask($event: Task) {

    this.stages[$event.stageId].tasks.push($event);
  }
  onMoveTask($event: Task, i: number) {
    this.stages[i + 1].tasks.push($event);
  }
  offMoveTask($event: Task, i: number) {
    this.stages[i - 1].tasks.push($event);
  }
}
