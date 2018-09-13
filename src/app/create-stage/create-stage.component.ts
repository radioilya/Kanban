import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Stage} from '../model/stage';
import {FormControl, Validators} from '@angular/forms';
import {Subject, Subscription} from 'rxjs';
import {InsertStageService} from '../insert-stage.service';

@Component({
  selector: 'app-create-stage',
  templateUrl: './create-stage.component.html',
  styleUrls: ['./create-stage.component.css']
})
export class CreateStageComponent implements OnInit {
  @Input()  stages: Stage;
  @Output()  newStage: EventEmitter<Stage> = new EventEmitter<Stage>();
  stageName: FormControl;
  stageDescription: FormControl;
  stageParent_id: FormControl;

  refreshStage = new Subject();
  constructor( private service: InsertStageService) {
    this.stageName = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
    this.stageDescription = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]);
  }

  ngOnInit() {

  }

  createStage() {
    if (this.stageName.valid && this.stageDescription.valid) {

      const stage = new Stage(this.stageName.value, this.stageDescription.value, 1);
      alert(this.stageName.value);
      this.newStage.emit(stage);


      const newTaskSubscription = this.service
        .addStageService(stage)
        .subscribe(() => {
          newTaskSubscription.unsubscribe();
        });
      this.stageName.reset('');
      this.stageDescription.reset('');
    } else {
      alert('Заполните корректно поля');
    }
  }

}
