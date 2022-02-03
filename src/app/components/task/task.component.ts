import { Component, OnInit } from '@angular/core';
import { TASK } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[]=TASK;
 
  constructor() { }

  ngOnInit(): void {
  }

}
