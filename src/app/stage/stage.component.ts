import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Stage} from '../model/stage';
import {Task} from '../model/task';
import {Subject, Subscription} from 'rxjs';
import {repeatWhen} from 'rxjs/operators';
import {BackendTaskService} from "../backend-task.service";

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.css']
})
export class StageComponent implements OnInit, OnDestroy {
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
  getTasksByStageSubscription: Subscription;
  refreshStage = new Subject();
  taskOne: Task;
  constructor(private service: BackendTaskService) {

  }

  ngOnInit() {
    this.getTasksByStageSubscription = this.service
      .getTasksByStage(this.stage.id)
      .pipe(repeatWhen(() => this.refreshStage))
      .subscribe((tasks: Task[]) => this.stage.tasks = tasks);



  }

  ngOnDestroy(): void {
    this.getTasksByStageSubscription.unsubscribe();
  }
  drop($event) {
    $event.preventDefault();
    const data = $event.dataTransfer.getData('text');
    let target = $event.target;
    const targetClassName = target.className;
    while (target.className !== 'stage__dorop') {
      target = target.parentNode;
    }
    target = target.querySelector('.tasks');
    if (targetClassName === 'stage') {
     const getTasksSubscription =this.service
       .getTasksByOne(data).subscribe(task=> {
         this.taskOne=task;
         this.taskOne.stageId = $event.target.parentNode.id;
         const updateTasksSubscription = this.service.updateTasksService(this.taskOne)
           .subscribe(() => updateTasksSubscription.unsubscribe());
         getTasksSubscription.unsubscribe();
         $event.target.parentNode.insertBefore(document.getElementById(data), $event.target);

       });
      } else {
      target.appendChild(document.getElementById(data));
    }
  }
  allowDrop($event) {
    $event.preventDefault();
  }
  uptadeTask($event) {

    console.log($event);
    const updateTasksSubscription = this.service.updateTasksService($event)
      .subscribe(() => updateTasksSubscription.unsubscribe());

  }
}
