import { Component, OnInit } from '@angular/core';
import { Tarea_B_interface } from 'src/app/Tareas_B';
import { listaDeTareas_A } from 'src/app/mock_tareas_A';




@Component({
  selector: 'Tareas_C',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  Taskarray: Tarea_B_interface[] = listaDeTareas_A

  constructor() { }

  ngOnInit(): void {
  }

}
