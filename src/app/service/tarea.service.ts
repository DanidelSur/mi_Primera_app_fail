import { Injectable } from '@angular/core';
import { listaDeTareas_A } from '../mock_tareas_A';
import { Tarea_B_interface } from '../Tareas_B';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private apiUrl = 'http://localhost:3000/Tareas'

  constructor(private http:HttpClient) { }

  getTasks(): Observable<Tarea_B_interface[]>{
    
    return this.http.get<Tarea_B_interface[]>(this.apiUrl)
  }
}
