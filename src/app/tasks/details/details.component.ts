import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../model/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  public task: Task;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
    ) {
   }

  ngOnInit() {

    const tareaId = parseInt(this.route.snapshot.params['id']);
    this.task = this.taskService.getById(tareaId);
  }
}
