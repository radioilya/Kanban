import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Task} from '../model/task';
import {FormControl, Validators} from '@angular/forms';
import {Stage} from '../model/stage';
import {InsertTaskService} from '../insert-task.service';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  @Input()  stages: Stage;
  @Output()  newTask: EventEmitter<Task> = new EventEmitter<Task>();
  taskName: FormControl;
  taskDescription: FormControl;
  taskPriority: FormControl;
  taskParent_id: FormControl;
  condition:boolean=true;
  getTasksByStageSubscription: Subscription;
  refreshStage = new Subject();
  constructor( private service: InsertTaskService) {
    this.taskName = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
    this.taskDescription = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]);
    this.taskPriority = new FormControl('4');
    this.taskParent_id = new FormControl('1');
  }

  ngOnInit() {

  }

  createTask() {
    if (this.taskName.valid && this.taskDescription.valid && this.taskPriority.valid && this.taskParent_id.valid) {

      const task = new Task(this.taskName.value, this.taskDescription.value, 'Илья', this.taskPriority.value, this.taskParent_id.value);
     // alert(this.taskParent_id.value);
      this.newTask.emit(task);


      const newTaskSubscription = this.service
        .addTaskService(task)
        .subscribe(() => {
          this.refreshStage.next();
          newTaskSubscription.unsubscribe();
        });
      this.taskName.reset('');
      this.taskDescription.reset('');

    } else {
      alert('Заполните корректно поля');
    }
  }
}
