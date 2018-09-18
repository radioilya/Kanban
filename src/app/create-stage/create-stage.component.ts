import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Stage} from '../model/stage';
import {FormControl, Validators} from '@angular/forms';
import {BackendStageService} from '../backend-stage.service';

@Component({
  selector: 'app-create-stage',
  templateUrl: './create-stage.component.html',
  styleUrls: ['./create-stage.component.css']
})
export class CreateStageComponent implements OnInit {
  @Input()  stages: Stage;
  @Output()  refrashBoards: EventEmitter<number> = new EventEmitter<number>();
  stageName: FormControl;
  stageDescription: FormControl;
  StageParent_id=1;
  constructor( private service: BackendStageService) {
    this.stageName = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]);
    this.stageDescription = new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]);
  }

  ngOnInit() {

  }

  createStage() {
    if (this.stageName.valid && this.stageDescription.valid) {

      const stage= new Stage(this.stageName.value, this.stageDescription.value, 1);
      const newStageSubscription = this.service
        .addStageService(stage)
        .subscribe(() => {
          this.refrashBoards.emit(this.StageParent_id);
          newStageSubscription.unsubscribe();
        });
      this.stageName.reset('');
      this.stageDescription.reset('');
    } else {
      alert('Заполните корректно поля');
    }
  }

}
