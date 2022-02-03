import { Component, OnInit } from '@angular/core';
import { TASK } from 'src/app/mock-tasks';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[]=TASK;
  faTimes=faTimes;
 
  constructor() { }

  ngOnInit(): void {
  }

}
