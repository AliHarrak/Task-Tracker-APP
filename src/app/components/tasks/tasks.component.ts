import { Component, OnInit, Input } from '@angular/core';
import {TASKS} from '../../mock-tasks';
import { Task } from 'src/app/Task';
import { TaskService} from '../../services/task.service';
import {} from 'rxjs';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
 
  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  this.taskService
  .getTasks()
  .subscribe((tasks) => (this.tasks = tasks));
  }

  deleteTask(task: Task){
    this.taskService 
    .deleteTask(task)
    .subscribe(() => (this.tasks = this.tasks.filter((t) => t.id  !== task.id)));
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
     this.tasks.push(task);
   }
}
