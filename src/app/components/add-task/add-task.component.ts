import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { Task } from '../../Task';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
 @Output() onAddTask: EventEmitter<Task> = new EventEmitter(); 
text: string;
day: string;
reminder: boolean = false;
showAddTask: boolean;
subscription: Subscription;


  constructor(private taskservice: TaskService, private uiService: UiService) { 
    this.subscription = this.uiService
    .onToggle()
    .subscribe((value) => (this.showAddTask = value));
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text) {
      alert('Please add a task ! ');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };
   
this.taskservice.addTask(newTask)
.subscribe(res => {
  this.onAddTask.emit(res);
});
//this.onAddTask.emit(newTask);
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
 

}
