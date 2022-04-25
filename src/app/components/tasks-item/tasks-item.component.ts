import { Component, OnInit, Input } from '@angular/core';
import { Tarea_B_interface } from 'src/app/Tareas_B';
import { listaDeTareas_A } from 'src/app/mock_tareas_A';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {

  @Input() tarea: Tarea_B_interface = listaDeTareas_A[0]

  faTimes = faTimes

  constructor() { }

  ngOnInit(): void {
  }

}
