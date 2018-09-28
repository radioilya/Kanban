import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Task} from '../model/task';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormControl, Validators} from "@angular/forms";
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  @Input()
  task: Task;
  @Output()  taskUp: EventEmitter<Task> = new EventEmitter<Task>();
  @Input()
  moveEnabled: boolean;
  @Input()
  backEnabled: boolean;
  constructor(public edit: MatDialog) {
  }

  ngOnInit() {
   }
  openEditTask() {
    const taskEditing = this.edit.open(editTask, {
      data:this.task
    });
    taskEditing.afterClosed().subscribe(result => {
      if (result[0].valid && result[1].valid && result[2].valid) {

          this.task.name=result[0].value;
          this.task.description=result[1].value;
          this.task.priority=result[2].value;
        this.taskUp.emit(this.task);
      }else{
        alert('Заполните корректно поля');
      }
      });
  }
  dragStart(event) {
    event.dataTransfer.setData('text', event.target.id);
  }
}

  @Component({
    selector: 'edit-task',
    templateUrl: 'edit-task.html',
  })
  export class editTask {
    taskName: FormControl;
    taskDescription: FormControl;
    taskPriority: FormControl;
    taskParent_id: FormControl;
  constructor(
    public taskEditing:MatDialogRef<editTask>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.taskName = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
    this.taskDescription = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]);
    this.taskPriority = new FormControl();
    this.taskParent_id = new FormControl('1');
  }
    formatLabel(value: number | null) {
      if (!value) {
        return 0;
      }

      if (value >= 100) {
        return Math.round(value / 100) + 'k';
      }

      return value;
    }
    onNoClick(): void {
      this.taskEditing.close();
    }
}
