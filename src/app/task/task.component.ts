import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../model/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  task: Task;

  @Input()
  moveEnabled: boolean;
  @Input()
  backEnabled: boolean;
  constructor() {
  }

  ngOnInit() {
   }

  dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
  }

}
