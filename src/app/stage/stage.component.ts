import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {Stage} from '../stage';
import {Task} from '../task';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit {

  @Input()
  stage: Stage;
  @Input()
  moveEnabled: boolean;
  @Input()
  backEnabled: boolean;
  @Output()
  moveTask: EventEmitter<Task> = new EventEmitter<Task>();
  @Output()
  downTask: EventEmitter<Task> = new EventEmitter<Task>();
  taskName: FormControl;
  taskDescription: FormControl;

  constructor() {
    this.taskName = new FormControl('', [Validators.required]);
    this.taskDescription = new FormControl('', [Validators.required, Validators.minLength(4)]);
  }

  ngOnInit() {

  }

  createTask() {
    if (this.taskName.valid && this.taskDescription.valid) {
      this.stage.tasks.push(new Task(this.taskName.value, this.taskDescription.value, 1,1));
      this.taskName.reset('');
      this.taskDescription.reset('');
    } else {
      alert('Заполните поля');
    }
  }


  onTaskMoved($event: Task) {
    this.stage.tasks = this.stage.tasks.filter(value => value !== $event);
    this.moveTask.emit($event);
  }
  offMoveTask($event: Task) {
    this.stage.tasks = this.stage.tasks.filter(value => value !== $event);
    this.downTask.emit($event);
    }
}
