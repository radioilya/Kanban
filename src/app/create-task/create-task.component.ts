import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../task';
import {FormControl, Validators} from '@angular/forms';
import {Stage} from '../stage';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  @Input()  stages: Stage;
  taskName: FormControl;
  taskDescription: FormControl;
  taskPriority: FormControl;
  taskParent_id: FormControl;
  constructor() {
    this.taskName = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
    this.taskDescription = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]);
    this.taskPriority = new FormControl('');
    this.taskParent_id = new FormControl('');
  }
  @Output()  newTask: EventEmitter<Task> = new EventEmitter<Task>();
  ngOnInit() {
  }
  createTask() {
    if (this.taskName.valid && this.taskDescription.valid && this.taskPriority.valid && this.taskParent_id.valid) {
      this.newTask.emit(new Task(this.taskName.value, this.taskDescription.value, this.taskPriority.value, this.taskParent_id.value));
      this.taskName.reset('');
      this.taskDescription.reset('');
      this.taskPriority.reset('');
      this.taskParent_id.reset('');
    } else {
      alert('Заполните поля');
    }
  }
}
