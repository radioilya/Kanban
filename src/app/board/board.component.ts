import {Component, OnInit} from '@angular/core';
import {Stage, Stages} from '../stage';
import {Task} from '../task';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  stages: Stage[] = Stages;
  constructor() {

  }

  ngOnInit() {

  }
  newTask($event: Task) {

    this.stages[$event.parent_id].tasks.push($event);
  }
  onMoveTask($event: Task, i: number) {
    this.stages[i + 1].tasks.push($event);
  }
  offMoveTask($event: Task, i: number) {
    this.stages[i - 1].tasks.push($event);
  }
}
