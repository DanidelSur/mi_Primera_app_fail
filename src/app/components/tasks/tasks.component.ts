import { Component, OnInit } from '@angular/core';
import { Tarea_B_interface } from 'src/app/Tareas_B';
// import { listaDeTareas_A } from 'src/app/mock_tareas_A';
import { TareaService } from 'src/app/service/tarea.service';




@Component({
  selector: 'Tareas_C',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  Taskarray: Tarea_B_interface[] = []

  constructor(private taskService: TareaService) { }

  ngOnInit(): void {

    this.taskService.getTasks().subscribe((tareas)=>{
      this.Taskarray = tareas
    })
  }

}
