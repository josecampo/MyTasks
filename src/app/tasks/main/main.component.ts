import { Component, ViewChild } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  public taskList: TaskService;
  constructor(task: TaskService) {
    this.taskList = task;
   }
}
