import { Component, OnInit } from '@angular/core';
import { TaskService} from '../../services/task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  public taskList: TaskService;

  constructor(task: TaskService) {
    this.taskList = task;
   }

}
